$(document).ready(function () {
    $("#dob").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "1900:2024",
        dateFormat: "dd-mm-yy"
    });
    $("#password").on("input", function () {
        const password = $(this).val();
        const strength = zxcvbn(password).score; 
        const messages = ["Very weak", "Weak", "Good", "Strong", "Very strong"];
        const color = ["red", "orange", "yellow", "lightgreen", "green"];
        $(".password-strength").text(messages[strength]).css("color", color[strength]);
    });

    $("#contactForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            },
            dob: {
                required: true,
                date: true
            }
        },
        messages: {
            name: {
                required: "The name is required.",
                minlength: "The name must contain at least 2 characters."
            },
            email: {
                required: "Email is required.",
                email: "Please enter a valid email address."
            },
            password: {
                required: "Password is required.",
                minlength: "The password must contain at least 8 characters."
            },
            dob: {
                required: "Date of birthy is required.",
                date: "Please enter a valid date."
            }
        },
        submitHandler: function (form) {
            alert("Forma je uspešno poslata!");
            form.reset(); 
        }
    });
});
