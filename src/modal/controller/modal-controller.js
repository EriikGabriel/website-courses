$(document).ready(function() {
    $("[rel='tooltip']").tooltip();

    $(".payment-forms").submit(function (e) {
        e.preventDefault()

        if($(this)[0].id === 'form-payment-slip' || ValidationCredit() !== false 
        && $(this)[0].id === 'form-credit-card') {
            $("#result-costumer-name").html(`<b>${$('#name-customer-input').val()}</b>`)
            $(".credit-card-info").addClass("d-none")
            $(".payment-slip-info").addClass("d-none")

            if ($(this)[0].id === 'form-credit-card') {
                $("#result-payment-method").html(`<b>Cartão de Crédito</b>`)
                $("#result-credit-number").html(`<b>${$('#input-credit-number').val()}</b>`)
                $("#result-titular").html(`<b>${$('#input-titular').val()}</b>`)
                $(".credit-card-info").removeClass("d-none")
            } else {
                $("#result-payment-method").html(`<b>Boleto Bancário</b>`)
                $("#result-email").html(`<b>${$('#email-customer-input').val()}</b>`)
                $("#result-cpf").html(`<b>${$('#cpf-customer-input').val()}</b>`)
                $("#result-tel").html(`<b>${$('#tel-customer-input').val()}</b>`)
                $(".payment-slip-info").removeClass("d-none")
            }

            $.post({
                url: "src/courses/model/course-control.php",
                data: {
                    name: $(".payment-forms button").attr("name"),
                    action: "Search Course Data"
                }
            }).done(function(res){
                const courseData = JSON.parse(res)
                
                switch (courseData.id) {
                    case 1:
                        $("#result-course-icon").attr("src", "src/images/game-design.svg")
                        break;
                    case 2:
                        $("#result-course-icon").attr("src", "src/images/game-programmer.svg")
                        break;
                    case 3:
                        $("#result-course-icon").attr("src", "src/images/level-design.svg")
                        break;
                    case 4:
                        $("#result-course-icon").attr("src", "src/images/3d-modeling.svg")
                        break;
                    default:
                        break;
                }

                if(courseData.certificado == "S") {
                    var certificado = "Com certificado"
                } else {
                    var certificado = "Sem certificado" 
                }

                $("#result-course-name").html(`<b>${courseData.nome}</b>`)
                $("#result-course-details").html(`${courseData.descricao}`)
                $("#result-course-class").html(`<i class="fas fa-book fa-lg text-muted" aria-hidden="true"></i> ${courseData.aulas} aulas`)
                $("#result-course-duration").html(`<i class="fas fa-clock fa-lg text-muted" aria-hidden="true"></i> ${courseData.duracao}`)
                $("#result-course-certificate").html(`<i class="fas fa-certificate fa-lg text-muted" aria-hidden="true"></i> ${certificado}`)
                $("#result-course-price").html(`<b>R$ ${Number(courseData.preco).toFixed(2)}</b>`)

                $("#btn-finish-purchase").click(function() {
                    if($("#result-payment-method b").html() == "Cartão de Crédito") {
                        $.post({
                            url: "src/courses/model/course-payment.php",
                            data: {
                                method: "credit_card",
                                card_number: $('#input-credit-number').val(),
                                cvv: $('#input-cvv').val(),
                                titular: $('#input-titular').val(),
                                expire_date: $('#input-expire-date').val(),
                                course_name: courseData.nome,
                                course_price: courseData.preco
                            }
                        }).done(function(res){
                            console.log(JSON.parse(res))

                            $('#purchaseModal').modal('hide')

                            iziToast.warning({
                                title: 'Compra',
                                message: 'A compra foi realizada',
                                position: 'topLeft'
                            });
                        })
                    } else {
            
                    }
                })
            })

            $('#steps li:last-child a').removeClass('disabled')
            $('#steps li:last-child a').tab('show')
            $('#steps li:nth-child(2) a').removeClass('active')
            $('#steps li:last-child a').addClass('active')
        }
    })

    

    function OnlyNumberInput(input_element) {
        $(input_element).keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        })
    }

    OnlyNumberInput('#cpf-customer-input')
    OnlyNumberInput('#input-cvv')

    new Cleave('#input-credit-number', {
        creditCard: true,
        onCreditCardTypeChanged: function (type) {
            switch (type) {
                case 'mastercard':
                    $('.cc-icon').removeClass('text-primary')
                    $('.cc-icon').removeClass('text-muted')
                    $('.fa-cc-mastercard').addClass('text-primary')
                    $('.fa-cc-mastercard').toggleClass('icon-scale')
                break;

                case 'visa':
                    $('.cc-icon').removeClass('text-primary')
                    $('.cc-icon').removeClass('text-muted')
                    $('.fa-cc-visa').addClass('text-primary')
                    $('.fa-cc-visa').toggleClass('icon-scale')
                break;

                case 'amex':
                    $('.cc-icon').removeClass('text-primary')
                    $('.cc-icon').removeClass('text-muted')
                    $('.fa-cc-amex').addClass('text-primary')
                    $('.fa-cc-amex').toggleClass('icon-scale')
                break;

                case 'diners':
                    $('.cc-icon').removeClass('text-primary')
                    $('.cc-icon').removeClass('text-muted')
                    $('.fa-cc-diners-club').addClass('text-primary')
                    $('.fa-cc-diners-club').toggleClass('icon-scale')
                break;

                case 'jcb':
                    $('.cc-icon').removeClass('text-primary')
                    $('.cc-icon').removeClass('text-muted')
                    $('.fa-cc-jcb').addClass('text-primary')
                    $('.fa-cc-jcb').toggleClass('icon-scale');
                break;

                case 'discover':
                    $('.cc-icon').removeClass('text-primary')
                    $('.cc-icon').removeClass('text-muted')
                    $('.fa-cc-discover').addClass('text-primary')
                    $('.fa-cc-discover').toggleClass('icon-scale')
                break;

                default:
                    $('.cc-icon').removeClass('text-primary')
                    $('.cc-icon').addClass('text-muted')
                    $('.cc-icon').removeClass('icon-scale')
                break;
            }
        }
    })

    $('#input-expire-date').mask("00/00", { placeholder: "" }).attr('minlength', 5);
    $('#cpf-customer-input').mask("000.000.000-00", { placeholder: "" }).attr('minlength', 14);
    $('#tel-customer-input').mask("(00) 0000-0000", { placeholder: "" }).attr('minlength', 14);

    function ValidationCredit() {
        if($('#input-credit-number').val().length < 16) {
            $('#input-credit-number').focus()
            
            return false;
        }
    }
})