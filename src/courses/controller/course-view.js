$(document).ready(function () { 
    $(".home").click(function() {
        window.location.reload()      
    })

    $(".game-design").click(function() {
        $("#content").empty()
        $("#content").load('src/courses/view/game-design.html')       
    })

    $(".programmer").click(function() {
        $("#content").empty()
        $("#content").load('src/courses/view/programmer.html')       
    })

    $(".level-design").click(function() {
        $("#content").empty()
        $("#content").load('src/courses/view/level-design.html')       
    })

    $(".modeling").click(function() {
        $("#content").empty()
        $("#content").load('src/courses/view/modeling.html')       
    })

    $("#btn-ready").click(function() {
        window.scroll({
            top: document.querySelector('.course-cards').offsetTop - 120,
            left: 0,
            behavior: 'smooth'
        })
    })

    $("[rel='tooltip']").tooltip();

    $("#form-signup-buy").submit(function(e){
        e.preventDefault()

        $('#steps li:nth-child(2) a').tab('show')
        $('#steps li:first-child a').removeClass('active')
        $('#steps li:nth-child(2) a').addClass('active')
        $('#steps li:nth-child(2) a').removeClass('disabled')
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

    new Cleave('#input-expire-date', {
        date: true,
        datePattern: ['m', 'y']
    })

    new Cleave('#tel-customer-input', {
        phone: true,
        phoneRegionCode: 'BR'
    })

    new Cleave('#cpf-customer-input', {
        blocks: [3, 3, 3, 2],
        delimiters: ['.', '.', '-'],
        uppercase: true
    })

    $("#form-credit-card").submit(function(e) {
        e.preventDefault()

        $('#steps li:last-child a').tab('show')
        $('#steps li:nth-child(2) a').removeClass('active')
        $('#steps li:last-child a').addClass('active')
        $('#steps li:last-child a').removeClass('disabled')
    })

    $("#form-payment-slip").submit(function(e) {
        e.preventDefault()

        $('#steps li:last-child a').tab('show')
        $('#steps li:nth-child(2) a').removeClass('active')
        $('#steps li:last-child a').addClass('active')
        $('#steps li:last-child a').removeClass('disabled')
    })
})