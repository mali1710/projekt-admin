<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
if (session_status() == PHP_SESSION_NONE){
    session_start();
}
/* Database credentials */
define("DBHOST", "");
define("DBUSER", "");
define("DBPASS", "");
define("DBDATABASE", "");


spl_autoload_register(function ($class){
    include 'classes/' . $class . '.class.php';
});
?>