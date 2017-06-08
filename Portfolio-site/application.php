<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Создание формы обратной связи</title>
<meta http-equiv="Refresh" content="4; URL=http://irynagr.zzz.com.ua/index.html"> 
</head>
<body>

<?php 

if($_POST)
{
$to = "ir.grynchak@gmail.com";
$from = 'very@irynagr.zzz.com.ua';
$subject = "Ваше сообщение"; 
 
$message = 'Имя: '.$_POST['name'].'; help: '.$_POST['help'].'; Email: '.$_POST['email'].';';
 
$headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
$headers .= "From: <very@irynagr.zzz.com.ua>\r\n"; 
 
$result = mail($to, $subject, $message, $headers);
 
 
if ($result){
    echo "<center><img src='img/sent.png'></center>";
    }
else {echo "<center><img src='img/no-sent.png'></center>";
    }
}

?>

</body>
</html>