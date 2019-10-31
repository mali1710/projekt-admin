<?php
include ("includes/config.php");
$page_title = "Administration";
include("includes/header.php");
include("classes/Users.class.php");



?>
<div class="container-fluid">
        <form method="post" action="login.php" class="form-signin">
            <h1 class="h3 mb-3 font-weight-normal">Logga in | mallind.se</h1>
            <label for="username"  class="sr-only">Username</label>
            <input type="text" name="username"  class="form-control" required autofocus>

            <label for="password"  class="sr-only">Password</label>
            <input type="password" name="password" class="form-control" required>
            <input type="submit" value="Logga in" class="btn btn-lg btn-primary btn-block">
        </form>
        <?php
        if(isset($_POST['username'])){
            $username = $_POST['username'];
            $password = $_POST['password'];
        
            $users = new Users();
            if($users->loginUser($username, $password)){
                session_start();
                $_SESSION['username'] = $username;
                header("Location: admin.php");
            }else{
                echo "<div class='alert alert-danger'>Felaktigt användarnamn eller lösenord. Vänligen försök igen.</div>";
        
            }
        }
        ?>
</div>

<?php include("includes/footer.php");
?>