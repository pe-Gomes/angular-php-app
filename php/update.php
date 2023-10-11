<?php
include("connection.php");

$getData = file_get_contents('php://input');

//Extract data from JSON
$extraction = json_decode($getData);

$idCourse = $extraction->courses->idCourse;
$nameCourse = $extraction->courses->nameCourse;
$priceCourse = $extraction->courses->priceCourse;

//SQL Query
$sql = "UPDATE courses SET nameCourse='$nameCourse', priceCourse=$priceCourse WHERE idCourse=$idCourse";
mysqli_query($connection, $sql);

//Exporting data
$course = [
  'idCourse' => $idCourse,
  'nameCourse' => $nameCourse,
  'priceCourse' => $priceCourse
];

echo json_encode(['course' => $course]);
?>
