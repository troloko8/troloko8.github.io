    
<?php
$recepient = "troloko8@gmail.com";
 $siteName = "RGB-test";

 $name = trim($_POST["name"]);
 $phone = trim($_POST["phone"]);
 $comment = trim($_POST["comment"]);
 $file = trim($_POST["file"]);
 $agree = trim($_POST["agree"]);

 $message = "Имя: $name \nТелефон: $phone \nО моем проекте: $comment \nФайл: $file \nОбработка данных: $agree";
 $pagetitle = "Заявка с сайта \"$siteName\"";
 mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

// $to      = 'troloko8@gmail.com, trolllo1612@gmail.com';
// $subject = 'the subject';
// $message = 'hello';
// $headers = 'From: webmaster@example.com' . "\r\n" .
//     'Reply-To: webmaster@example.com' . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();

// mail($to, $subject, $message, $headers);
?>

