

$(document).ready(function () {
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault();

        const name = $("#name").val();
        const email = $("#email").val();
        const phone = $("#phone").val();
        const address = $("#address").val();

        const displayData = `
            <strong>Name:</strong> ${name}<br>
            <strong>Email:</strong> ${email}<br>
            <strong>Phone:</strong> ${phone}<br>
            <strong>Address:</strong> ${address}
        `;

        $("#displayData").html(displayData);
        $("#successMessage").show();
    });
});
