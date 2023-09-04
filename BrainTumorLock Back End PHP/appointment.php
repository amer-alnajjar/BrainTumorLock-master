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
    $response = array("success" => false, "error" => "Connection failed: " . $conn->connect_error);
    echo json_encode($response);
    exit;
}

// Function to get data from the database
function getDataFromDatabase()
{
    global $conn;
    $sql = "SELECT * FROM appointment_requests";
    $result = $conn->query($sql);

    $data = array();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }

    return $data;
}

// Function to insert data into the database using prepared statement
function insertDataIntoDatabase($name, $email, $country, $city, $phone, $date, $message)
{
    global $conn;

    // Use prepared statement with parameterized query
    $stmt = $conn->prepare("INSERT INTO appointment_requests (name, email, country, city, phone, date,  message) VALUES (?, ?, ?, ?, ?, ?, ?)");

    // Validate input
    if (!$stmt) {
        $response = array("success" => false, "error" => "Prepared statement failed: " . $conn->error);
        echo json_encode($response);
        exit;
    }

    // Sanitize and assign variables
    $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $country = htmlspecialchars($country, ENT_QUOTES, 'UTF-8');
    $city = htmlspecialchars($city, ENT_QUOTES, 'UTF-8');
    $phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
    $date = htmlspecialchars($date, ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

    // Bind parameters securely
    $stmt->bind_param("sssssss", $name, $email, $country, $city, $phone, $date, $message);

    if ($stmt->execute()) {
        $response = array("success" => true);
        echo json_encode($response);
    } else {
        $response = array("success" => false, "error" => "Failed to insert data: " . $stmt->error);
        echo json_encode($response);
    }
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
    // Fetch data from the database
    $data = getDataFromDatabase();

    // Output escaping using htmlspecialchars before displaying user-generated content
    foreach ($data as &$row) {
        $row['name'] = htmlspecialchars($row['name'], ENT_QUOTES, 'UTF-8');
        $row['email'] = htmlspecialchars($row['email'], ENT_QUOTES, 'UTF-8');
        $row['country'] = htmlspecialchars($row['country'], ENT_QUOTES, 'UTF-8');
        $row['city'] = htmlspecialchars($row['city'], ENT_QUOTES, 'UTF-8');
        $row['phone'] = htmlspecialchars($row['phone'], ENT_QUOTES, 'UTF-8');
        $row['date'] = htmlspecialchars($row['date'], ENT_QUOTES, 'UTF-8');
        $row['message'] = htmlspecialchars($row['message'], ENT_QUOTES, 'UTF-8');
    }

    echo json_encode($data);
}

// Check if the HTTP method is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Read data from the request
    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);

    // Check if the data is successfully decoded and valid
    if ($data !== null && is_array($data) && !empty($data["name"]) && !empty($data["email"]) && !empty($data["country"]) && !empty($data["city"]) && !empty($data["phone"]) && !empty($data["date"]) && !empty($data["message"])) {
        // Validate email format
        if (!filter_var($data["email"], FILTER_VALIDATE_EMAIL)) {
            $response = array("success" => false, "error" => "Invalid email format");
            echo json_encode($response);
            exit;
        }

        // Insert data into the database
        insertDataIntoDatabase($data["name"], $data["email"], $data["country"], $data["city"], $data["phone"], $data["date"], $data["message"]);
    } else {
        // If the JSON data is not valid, return an error response
        $response = array("success" => false, "error" => "Invalid JSON data");
        echo json_encode($response);
    }
}

// Close the database connection
$conn->close();
