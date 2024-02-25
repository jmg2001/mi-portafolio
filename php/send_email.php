<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Correo al que se enviará el mensaje
    $to = "jmg357159@gmail.com";
    $subject = "Mensaje de contacto de $name";
    $body = "Nombre: $name\nCorreo electrónico: $email\nMensaje: $message";

    // Encabezados
    $headers = "From: $email";

    // Envío del correo
    if (mail($to, $subject, $body, $headers)) {
        echo "¡Mensaje enviado con éxito!";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>
