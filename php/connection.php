<?php

// Variables
$url = 'localhost';
$user = 'root';
$password = '';
$base = 'api';

//Connection
$connection = mysqli_connect($url, $user, $password, $base);

// Dealing with special caracters
mysqli_set_charset($connection, 'utf8');
?>
