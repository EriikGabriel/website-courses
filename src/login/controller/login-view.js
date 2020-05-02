$(document).ready(function() {
    $("[rel='tooltip']").tooltip();

    $("#btn-login").click(function(e) {
        location.href = `login.html?course=${e.target.name}`
    })

    $("#form-signin").submit(function(e) {
        e.preventDefault()

        $.post({
            url: "src/users/model/user-control.php",
            data: {
                email: $("#signin-email").val(),
                password: $("#signin-password").val(),
                action: "Search Email"
            }
        }).done(function(res) {
            if(res !== "false") {
                if($("#keep-me-conected").is(':checked')) {
                    console.log("Mantendo conectado!")
                } else {
                    sessionStorage.setItem('login-id', res)
                }

                var course_get = window.location.search.substring(1).split('&')[0]
                location.href = `index.html?${course_get}`
            } else {
                iziToast.error({
                    title: 'Erro',
                    message: 'O email ou a senha, estão incorretos!',
                    position: 'topLeft'
                }) 
            }
        })
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

        $("#signup-email").addClass("border-primary")
        $("#signup-email").removeClass("border-danger")
        $(".email-icon i").addClass("text-primary")
        $(".email-icon i").removeClass("text-danger")
        $(".email-icon").addClass("border-primary")
        $(".email-icon").removeClass("border-danger")
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
                    tel: $("#signup-tel").val(),
                    action: "Create User"
                }
            }).done(function(res) {
                if(res == "") {
                    $("#form-signup-2 button").addClass('d-none')
        
                    iziToast.success({
                        title: 'Sucesso',
                        message: 'Você foi cadastrado com sucesso!',
                        position: 'topCenter',
                        onClosing: function() {
                            location.href = "login.html"
                        }
                    });
                }else if(res == 23000) {
                    iziToast.error({
                        title: 'Erro',
                        message: 'Este email já está sendo utilizado!',
                        position: 'topCenter',
                        onOpening: function() {
                            $("#form-signup-1").removeClass("d-none")
                            $("#form-signup-2").addClass("d-none") 
    
                            $("#signup-email").removeClass("border-primary")
                            $("#signup-email").addClass("border-danger")
                            $(".email-icon i").removeClass("text-primary")
                            $(".email-icon i").addClass("text-danger")
                            $(".email-icon").removeClass("border-primary")
                            $(".email-icon").addClass("border-danger")
                        }
                    })
                } 
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
                tel: null,
                action: "Create User"
            }
        }).done(function(res) {
            if(res == "") {
                $("#form-signup-2 button").addClass('d-none')
    
                iziToast.success({
                    title: 'Sucesso',
                    message: 'Você foi cadastrado com sucesso!',
                    position: 'topCenter',
                    onClosing: function() {
                        location.href = "login.html"
                    }
                });
            }else if(res == 23000) {
                iziToast.error({
                    title: 'Erro',
                    message: 'Este email já está sendo utilizado!',
                    position: 'topCenter',
                    onOpening: function() {
                        $("#form-signup-1").removeClass("d-none")
                        $("#form-signup-2").addClass("d-none") 

                        $("#signup-email").removeClass("border-primary")
                        $("#signup-email").addClass("border-danger")
                        $(".email-icon i").removeClass("text-primary")
                        $(".email-icon i").addClass("text-danger")
                        $(".email-icon").removeClass("border-primary")
                        $(".email-icon").addClass("border-danger")
                    }
                })
            }
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