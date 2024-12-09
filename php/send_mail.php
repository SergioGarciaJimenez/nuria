<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Validar y capturar los datos del formulario

    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $name = htmlspecialchars(trim($_POST['name']));
    $messageContent = htmlspecialchars(trim($_POST['message'])); 
    $newsletter = isset($_POST['newsletter']) ? "Sí" : "No"; 

    if ($email && $name && $messageContent) {
        $to = "ergarci94@hotmail.com"; 

        $subject = "Nuevo mensaje: $name";
        $message = "Has recibido un nuevo mensaje de contacto:\n\n";
        
        $message .= "Nombre: $name\n";
        $message .= "Correo: $email\n";
        $message .= "Mensaje: $messageContent\n";
        $message .= "Suscripción a newsletter: $newsletter\n";

        $headers = "From: $email\r\n"; 
        $headers .= "Reply-To: $email\r\n"; 
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        if (mail($to, $subject, $message, $headers)) {
            echo "Mensaje enviado correctamente. En breve me pondré en contacto contigo.";
        } else {
            echo "Error al enviar el mensaje. Por favor, inténtalo más tarde.";
        }
    } else {
        echo "Por favor, completa todos los campos correctamente.";
    }
} else {
    echo "Método no permitido.";
}
?>
