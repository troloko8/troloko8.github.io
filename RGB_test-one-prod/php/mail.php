    
<?php
$recepient = "troloko8@gmail.com";
$siteName = "RGB-test";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$message = "Имя: $name \nТелефон: $phone";
$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>

