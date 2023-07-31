<?php

// Enable CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Get the raw JSON data from the request body
$data = json_decode(file_get_contents('php://input'), true);

// Connect to your database here (replace placeholders with actual values)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "brain_tumor_lock";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    $response = array("success" => false, "error" => "Connection failed: " . $conn->connect_error);
    echo json_encode($response);
    exit;
}

// Get email and password from JSON data
$email = $data['email'];
$password = $data['password'];

// Prepare and execute the query using prepared statements
$stmt = $conn->prepare("SELECT * FROM administrators WHERE email = ? AND password = ?");
$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$result = $stmt->get_result();

// Check if the user exists
if ($result->num_rows > 0) {
    // User exists, login successful
    echo json_encode(array("message" => "Login successful"));
} else {
    // User doesn't exist or incorrect credentials
    echo json_encode(array("message" => "Invalid credentials"));
}

// Close the connection
$conn->close();
