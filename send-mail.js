
// Email script

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const responseMessage = document.getElementById("responseMessage");

    fetch("send_mail.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        responseMessage.textContent = data; 
        responseMessage.style.color = "#d86982"; 
        responseMessage.style.fontSize = "1.25rem";
        responseMessage.style.paddingTop = "0.3rem";
    })
    .catch(error => {
        responseMessage.textContent = "Error al enviar el correo. Inténtalo más tarde.";
        responseMessage.style.color = "red";
        responseMessage.style.fontSize = "1.25rem";
        responseMessage.style.paddingTop = "0.3rem";
    });
});