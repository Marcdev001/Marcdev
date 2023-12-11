emailjs.init("PxRjNCuDuGZLwimOp")
function submitForm() {
    const form = document.getElementById("myForm");
    const formData = new FormData(form);

    const templateParams = {
        to: "martinchikwuolum@gmail.com",
        from_name: formData.get("name"),
        from_email: formData.get("email"),
        message: formData.get("message"),
    };

    emailjs.send("service_jg8u6ne", 
    "template_bvimbtt", templateParams)
    .then((response) => {
        console.log("Email sent successfully:", response);
        alert("Message sent successfully!");
    })
    .catch((error)  => {
        console.error("Error sending email:", error);
        alert("Error sending message. Please try again later.");
    });
}