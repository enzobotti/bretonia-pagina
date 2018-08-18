<?php
$to = ""; // This is your Email address
$from = $_POST['email']; // This is the sender's Email address
$first_name = $_POST['name']; // This is the sender's Name
$asunto = $_POST['asunto'];
$comments = $_POST['message'];
$subject = "Mensaje desde pagina bretonia.com";
$comments = "Nombre: $first_name \n
            Asunto: $asunto \n
            Mensaje: $message ";
$headers = "From:" . $from;
$email = mail($to,$subject,$comments,$headers);
if(!$email){
  echo "Hubo un error al procesar tu email, detalle del error". $email; 
}
header('Location: thanks.html');
exit();
?>
