<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "garzyfreestyle@gmail.com";
    $subject = "Nuevo mensaje de contacto";
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);
    $newsletter = isset($_POST["newsletter"]) ? "Sí" : "No";

    $body = "Nombre: $name\nCorreo electrónico: $email\nMensaje:\n$message\n\nDesea suscribirse a la newsletter: $newsletter";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h2>¡Gracias por contactarnos!</h2><p>Tu mensaje ha sido enviado con éxito.</p>";
    } else {
        echo "<h2>Error</h2><p>No pudimos enviar tu mensaje. Inténtalo de nuevo más tarde.</p>";
    }
} else {
    echo "Método no permitido.";
}

header("Location: ../index.html");
exit();
?>
