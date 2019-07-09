    
<?php
$recepient = "frontend@rgb-agency.com.ua";
 $siteName = "RGB-test";

 $name = trim($_POST["name"]);
 $phone = trim($_POST["phone"]);
 $comment = trim($_POST["comment"]);
 $file = trim($_POST["file"]);
 $agree = trim($_POST["agree"]);

 $message = "Имя: $name \nТелефон: $phone \nО моем проекте: $comment \nФайл: $file \nОбработка данных: $agree";
 $pagetitle = "Заявка с сайта \"$siteName\"";
 mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>

