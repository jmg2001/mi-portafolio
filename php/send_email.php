<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoge los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    // Dirección de correo electrónico a la que deseas recibir el mensaje
    $destinatario = "jmg357159@gmail.com";

    // Asunto del correo electrónico
    $asunto = "Nuevo mensaje de formulario de contacto";

    // Cuerpo del correo electrónico
    $cuerpoMensaje = "Nombre: $nombre\n";
    $cuerpoMensaje .= "Email: $email\n";
    $cuerpoMensaje .= "Mensaje:\n$mensaje";

    // Envía el correo electrónico
    if (mail($destinatario, $asunto, $cuerpoMensaje)) {
        echo "El mensaje ha sido enviado correctamente.";
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
} else {
    // Si se accede directamente a este script sin enviar el formulario, redirige al formulario
    header("Location: contacto.html");
}
?>
