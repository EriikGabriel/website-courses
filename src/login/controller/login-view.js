$(document).ready(function() {
    $("[rel='tooltip']").tooltip();

    $("#form-signin").submit(function(e) {
        e.preventDefault()

        alert('Não enviado!')
    })

    $("#btn-signup").click(function() {
        $("#login-content").empty()
        $("#login-content").load("src/login/view/sign-up.html")
    })

    $("#form-signup-1").submit(function(e) {
        e.preventDefault()

        $("#form-signup-1").addClass("d-none")
        $("#form-signup-2").removeClass("d-none")
    })

    $("#form-signup-2").submit(function(e) {
        e.preventDefault()
    })
})