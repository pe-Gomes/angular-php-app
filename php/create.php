<?php
include("connection.php");

$getData = file_get_contents('php://input');

//Extract data from JSON
$extraction = json_decode($getData);

$nameCourse = $extraction->courses->nameCourse;
$priceCourse = $extraction->courses->priceCourse;

//SQL Query
$sql = "INSERT INTO courses (nameCourse, priceCourse) VALUES ('$nameCourse', $priceCourse)";
mysqli_query($connection, $sql);


//Exporting data
$course = [
  'nameCourse' => $nameCourse,
  'priceCourse' => $priceCourse
];

echo json_encode(['course' => $course]);
?>
