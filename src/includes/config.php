<?php
/* Database credentials. Assuming you are running MySQL
server with default setting (user 'root' with no password) */
define("DBHOST", "localhost");
define("DBUSER", "admin");
define("DBPASS", "admin");
define("DBDATABASE", "admin");
 
/* Attempt to connect to MySQL database */
$mysqli = new mysqli(DBHOST, DBUSER, DBPASS, DBDATABASE);
 
// Check connection
if($mysqli === false){
    die("ERROR: Could not connect. " . $mysqli->connect_error);
}
?>