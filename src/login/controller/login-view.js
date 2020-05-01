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

        $("#form-data-name").html($("#signup-name").val())
        $("#form-data-email").html($("#signup-email").val())
        $("#form-data-password").html($("#signup-password").val())

        $("#form-signup-1").addClass("d-none")
        $("#form-signup-2").removeClass("d-none")   
    })

    $("#form-signup-2").submit(function(e) {
        e.preventDefault()

        if(ValidationCredit() !== false) {
            $.post({
                url: "src/users/model/user-control.php",
                data: {
                    name: $("#form-data-name").html(),
                    email: $("#form-data-email").html(),
                    password: $("#form-data-password").html(),
                    credit_number: $("#signup-credit-number").val(),
                    cvv: $("#signup-cvv").val(),
                    titular: $("#signup-titular").val(),
                    expire_date: $("#signup-expire-date").val(),
                    cpf: $("#signup-cpf").val(),
                    tel: $("#signup-tel").val()
                }
            }).done(function(res) {
                $("#form-signup-2 button").addClass('d-none')

                iziToast.success({
                    title: 'Sucesso',
                    message: 'Você foi cadastrado com sucesso!',
                    position: 'topCenter',
                    onClosing: function() {
                        window.location.href = "index.html"
                    }
                }); 
            })
        }
    })

    $("#btn-jump-step-signup").click(function() {
        $.post({
            url: "src/users/model/user-control.php",
            data: {
                name: $("#form-data-name").html(),
                email: $("#form-data-email").html(),
                password: $("#form-data-password").html(),
                credit_number: null,
                cvv: null,
                titular: null,
                expire_date: null,
                cpf: null,
                tel: null
            }
        }).done(function(res) {
            $("#form-signup-2 button").addClass('d-none')

            iziToast.success({
                title: 'Sucesso',
                message: 'Você foi cadastrado com sucesso!',
                position: 'topCenter',
                onClosing: function() {
                    window.location.href = "index.html"
                }
            }); 
        })
    })

    function OnlyNumberInput(input_element) {
        $(input_element).keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });
    }

    OnlyNumberInput('#signup-cpf')
    OnlyNumberInput('#signup-cvv')

    $('#signup-expire-date').mask("00/00", { placeholder: "" }).attr('minlength', 5);
    $('#signup-cpf').mask("000.000.000-00", { placeholder: "" }).attr('minlength', 14);
    $('#signup-tel').mask("(00) 0000-0000", { placeholder: "" }).attr('minlength', 14);

    function ValidationCredit() {
        if($('#signup-credit-number').val().length < 16) {
            $('#signup-credit-number').focus()
            
            return false;
        }
    }
})