<?php

// Enable CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Replace these with your actual database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "brain_tumor_lock";

// Create a connection to the database
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to get all data from the "blog" table
function getAllBlogData()
{
    global $conn;
    $sql = "SELECT * FROM blogs";
    $result = $conn->query($sql);

    $data = array();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    return $data;
}

// Function to get a specific blog by ID from the "blog" table
function getBlogById($id)
{
    global $conn;
    $stmt = $conn->prepare("SELECT * FROM blogs WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $result = $stmt->get_result();
    $row = $result->fetch_assoc();
    return $row;
}

// Function to insert data into the "blog" table
function insertBlogData($title, $description, $img)
{
    global $conn;
    $stmt = $conn->prepare("INSERT INTO blogs (title, description, img) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $title, $description, $img);
    return $stmt->execute();
}

// Function to update data in the "blog" table
function updateBlogData($id, $title, $description, $img)
{
    global $conn;
    $stmt = $conn->prepare("UPDATE blogs SET title = ?, description = ?, img = ? WHERE id = ?");
    $stmt->bind_param("sssi", $title, $description, $img, $id);
    return $stmt->execute();
}

// Function to delete data from the "blog" table by ID
function deleteBlogData($id)
{
    global $conn;
    $stmt = $conn->prepare("DELETE FROM blogs WHERE id = ?");
    $stmt->bind_param("i", $id);
    return $stmt->execute();
}



// Set the Content-Type header to prevent character set switching attacks
header("Content-Type: text/html; charset=UTF-8");

// Content Security Policy (CSP) to prevent XSS attacks
header("Content-Security-Policy: default-src 'self'; script-src 'self' cdn.example.com;");

// Handle CORS (Cross-Origin Resource Sharing) to allow requests from your Angular frontend
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// Check if the HTTP method is GET
if ($_SERVER["REQUEST_METHOD"] === "GET") {
    // Check if an ID is provided to fetch a specific blog or get all blogs
    if (isset($_GET["id"]) && is_numeric($_GET["id"])) {
        $id = $_GET["id"];
        $data = getBlogById($id);
        echo json_encode($data);
    } else {
        // Fetch all data from the "blog" table
        $data = getAllBlogData();

        // Output escaping using htmlspecialchars before displaying user-generated content
        foreach ($data as &$row) {
            $row['title'] = htmlspecialchars($row['title'], ENT_QUOTES, 'UTF-8');
            $row['description'] = htmlspecialchars($row['description'], ENT_QUOTES, 'UTF-8');
            $row['img'] = htmlspecialchars($row['img'], ENT_QUOTES, 'UTF-8');
        }

        echo json_encode($data);
    }
}

// Check if the HTTP method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Read data from the request
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);

    // Check if the data is successfully decoded and valid
    if ($data !== null && is_array($data) && !empty($data["title"]) && !empty($data["description"]) && !empty($data["img"])) {
        // Sanitize user input before inserting into the "blog" table
        $title = htmlspecialchars($data["title"], ENT_QUOTES, 'UTF-8');
        $description = htmlspecialchars($data["description"], ENT_QUOTES, 'UTF-8');
        $img = htmlspecialchars($data["img"], ENT_QUOTES, 'UTF-8');

        // Insert data into the "blog" table
        $inserted = insertBlogData($title, $description, $img);

        // Send a response to the Angular frontend
        $response = array("success" => $inserted);
        echo json_encode($response);
    } else {
        // If the JSON data is not valid, return an error response
        $response = array("success" => false, "error" => "Invalid JSON data");
        echo json_encode($response);
    }
}

// Check if the HTTP method is PUT
// ... (existing PHP code)

// Check if the HTTP method is PUT
// Check if the HTTP method is PUT
if ($_SERVER["REQUEST_METHOD"] === "PUT") {
    // Get the blog ID from the URL (no need for parse_str here)
    $id = isset($_GET["id"]) ? intval($_GET["id"]) : null;

    // Check if the ID is valid
    if ($id === null) {
        // If the ID is missing or not a number, return an error response
        $response = array("success" => false, "error" => "Invalid blog ID");
        echo json_encode($response);
        exit;
    }

    // Read the JSON data from the request body
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);

    // Check if the data is successfully decoded and valid
    if ($data !== null && is_array($data)) {
        // Sanitize user input before updating the "blog" table
        $title = isset($data["title"]) ? htmlspecialchars($data["title"], ENT_QUOTES, 'UTF-8') : "";
        $description = isset($data["description"]) ? htmlspecialchars($data["description"], ENT_QUOTES, 'UTF-8') : "";
        $img = isset($data["img"]) ? htmlspecialchars($data["img"], ENT_QUOTES, 'UTF-8') : "";

        // Update data in the "blog" table
        $updated = updateBlogData($id, $title, $description, $img);

        // Send a response to the Angular frontend
        if ($updated === true) {
            $response = array("success" => true);
        } else {
            $response = array("success" => false, "error" => "Failed to update data");
        }
        echo json_encode($response);
    } else {
        // If the JSON data is not valid, return an error response
        $response = array("success" => false, "error" => "Invalid JSON data");
        echo json_encode($response);
    }
}


// ... (existing PHP code)


// Check if the HTTP method is DELETE
if ($_SERVER["REQUEST_METHOD"] === "DELETE") {
    // Read data from the request
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);

    // Check if the data is successfully decoded and valid
    if ($data !== null && is_array($data) && isset($data["id"]) && is_numeric($data["id"])) {
        // Sanitize user input before deleting from the "blog" table
        $id = intval($data["id"]);

        // Delete data from the "blog" table
        $deleted = deleteBlogData($id);

        // Send a response to the Angular frontend
        $response = array("success" => $deleted);
        echo json_encode($response);
    } else {
        // If the JSON data is not valid, return an error response
        $response = array("success" => false, "error" => "Invalid JSON data");
        echo json_encode($response);
    }
}

// Close the database connection
$conn->close();
