<?php
// Add connection
include("connection.php");

$sql = "SELECT * FROM courses";
$execute = mysqli_query($connection, $sql);

$courses = [];
$index = 0;

while ($line = mysqli_fetch_assoc($execute)) {
  $courses[$index]['idCourse'] = $line['idCourse'];
  $courses[$index]['nameCourse'] = $line['nameCourse'];
  $courses[$index]['priceCourse'] = $line['priceCourse'];

  $index++;
}

echo json_encode(['courses' => $courses]);
?>
