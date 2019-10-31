<?php
include("classes/Users.class.php");
include("includes/config.php");

session_start();
if(!isset($_SESSION['username'])){
    header("Location: login.php");
}
$username = $_SESSION['username'];
$users = new Users();
if(isset($_POST['logout'])){
    $users->logoutUser();
    header("Location: login.php");
}

$page_title = "Administration";
include("includes/header.php");
?>

    <form method="post" action="admin.php" class="form-signin">
        <h1>Välkommen <?=$username?>!</h1>
        <input type="submit" name="logout" value="Logga ut" class="btn btn-lg btn-primary btn-block">
    </form>
    <div class="border-top my-5"></div>
<div class="container">
<h1 class="work cv-title">Work</h1>

    <table class="table table-hover table-fixed">
  <thead class="table-head">
    <tr>
      <th>Datum</th>
      <th>Företag</th>
      <th>Titel</th>
      <th>Ändra</th>
      <th>Radera</th>
    </tr>
  </thead>
  <tbody id="work-list">
<!--     <tr>
      <td>Aug 2017 - Sep 2018</td>
      <td>Best Western Plaza</td>
      <td>Hotellreceptionist</td>
      <td><i class="fa fa-pencil"></i></td>
      <td><i class="fa fa-trash"></i></td>
    </tr>
    <tr>
    <td>Aug 2017 - Sep 2018</td>
      <td>Best Western Plaza</td>
      <td>Hotellreceptionist</td>
      <td><i class="fa fa-pencil"></i></td>
      <td><i class="fa fa-trash"></i></td>
    </tr> -->

  </tbody>
      <tr>
        <td colspan="5"><a onclick="addWork()" class="update text-center "><i class="fa fa-plus fa-2x"></i></a></td>
      </tr>
</table>
<form class="form-inline" id="add-work">
</form>
    <form class="form-inline" id="work-form">
        <!-- <div class="col">
        <input type="text" id="input-date" class="form-control" placeholder="Datum">
        </div>
        <div class="col">
        <input type="text" class="form-control" id="input-company" placeholder="Företag">
        </div>

        <div class="col">
        <input type="text" class="form-control" id="input-title" placeholder="Titel">
        </div>

        <button id="work-submit" type="submit" class="btn btn-primary">Spara</button> -->

    </form>

</div>

<div class="border-top my-5"></div>
<div class="container">

<h1 class="work cv-title">Education</h1>

    <table class="table table-hover table-fixed">
  <thead class="table-head">
    <tr>
      <th>Datum</th>
      <th>Skola</th>
      <th>Program</th>
      <th>Ändra</th>
      <th>Radera</th>
    </tr>
  </thead>
  <tbody id="education-list">
    <tr>
      <td>2017 - 2020</td>
      <td>Mittuniversitetet</td>
      <td>Webbutveckling</td>
      <td><i class="fa fa-pencil"></i></td>
      <td><i class="fa fa-trash"></i></td>
    </tr>
    <tr>
    <td>2017 - 2020</td>
      <td>Mittuniversitetet</td>
      <td>Webbutveckling</td>
      <td><i class="fa fa-pencil"></i></td>
      <td><i class="fa fa-trash"></i></td>
    </tr>

  </tbody>
</table>
<form class="form-inline">
        <div class="col">
        <input type="text" class="form-control" placeholder="First name">
        </div>
        <div class="col">
        <input type="text" class="form-control" placeholder="First name">
        </div>

        <div class="col">
        <input type="text" class="form-control" placeholder="Last name">
        </div>
        <div class="col">
        <input type="text" class="form-control" placeholder="Last name">
        </div>
        <button type="submit" class="btn btn-primary">Spara</button>
    
    </form>
</div>
<div class="border-top my-5"></div>
<div class="container">
<h1 class="work cv-title">Projekt</h1>

<div class="card-deck mb-3" id="project-list">
  <div class="card">
    <img class="card-img-top" src="images/site-1.JPG" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a href="#" class="btn btn-primary"><i class="fa fa-pencil"></i></a>
      <a href="#" class="btn btn-primary"><i class="fa fa-trash"></i></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="images/screenshot.png" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a href="#" class="btn btn-primary"><i class="fa fa-pencil"></i></a>
      <a href="#" class="btn btn-primary"><i class="fa fa-trash"></i></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="images/site-1.JPG" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a href="#" class="btn btn-primary"><i class="fa fa-pencil"></i></a>
      <a href="#" class="btn btn-primary"><i class="fa fa-trash"></i></a>
    </div>
  </div>
  
</div>
<form class="form-inline">
        <div class="col">
        <input type="text" class="form-control" placeholder="First name">
        </div>
        <div class="col">
        <input type="text" class="form-control" placeholder="First name">
        </div>

        <div class="col">
        <input type="text" class="form-control" placeholder="Last name">
        </div>
        <div class="col">
        <input type="text" class="form-control" placeholder="Last name">
        </div>
        <button type="submit" class="btn btn-primary">Spara</button>
    
    </form>
</div>

    <?php include("includes/footer.php");
?>