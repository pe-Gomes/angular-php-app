<?php
include("connection.php");

$getData = file_get_contents("php://input");

//Extract data from JSON
$extraction = json_decode($getData);

$idCourse = $extraction->courses->idCourse;

//SQL Query
$sql = "DELETE FROM courses idCourse=$idCourse";
mysqli_query($connection, $sql);

?>
