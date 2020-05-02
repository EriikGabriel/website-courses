$(document).ready(function() {
    $("[rel='tooltip']").tooltip();

    $(".payment-forms").submit(function (e) {
        e.preventDefault()
        console.log()
        if($(this)[0].id === 'form-payment-slip' || ValidationCredit() !== false 
        && $(this)[0].id === 'form-credit-card') {
            $('#steps li:last-child a').removeClass('disabled')
            $('#steps li:last-child a').tab('show')
            $('#steps li:nth-child(2) a').removeClass('active')
            $('#steps li:last-child a').addClass('active')
    
            if ($(this)[0].id === 'form-credit-card') {
                console.log('Cartão de Crédito!')
            } else {
                console.log('Boleto!')
            }
        }
    })

    function OnlyNumberInput(input_element) {
        $(input_element).keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });
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