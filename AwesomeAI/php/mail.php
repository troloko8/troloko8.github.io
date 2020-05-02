
<?php
$recepient = "algowavemail@gmail.com";
 $siteName = "AwesomeAI";

 $name = trim($_POST["name"]);
 $surname = trim($_POST["surname"]);
 $email = trim($_POST["email"]);
 $phone = trim($_POST["phone"]);
 $data = trim($_POST["data&time"]);


 $message = "Имя: $name \nФамилия: $surname \nemail: $email \nТелефон: $phone \nДата и время: $data";
 $pagetitle = "Заявка с сайта \"$siteName\"";
 mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>

