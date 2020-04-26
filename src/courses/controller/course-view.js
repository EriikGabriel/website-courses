import AutoCompleteCountries from "../../functions/autocomplete-countries.js";

$(document).ready(function () {
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });
    
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

    $("#form-signup-buy").submit(function(e){
        e.preventDefault()

        $('#steps li:nth-child(2) a').tab('show')
        $('#steps li:first-child a').removeClass('active')
        $('#steps li:nth-child(2) a').addClass('active')
        $('#steps li:nth-child(2) a').removeClass('disabled')
    })

    new Cleave('#input-credit-number', {
        creditCard: true,
        onCreditCardTypeChanged: function (type) {
            switch (type) {
                case 'mastercard':
                    $('.cc-icon').removeClass('text-primary')
                    $('.fa-cc-mastercard').addClass('text-primary')
                    $('.fa-cc-mastercard').toggleClass('icon-scale')
                    break;

                case 'visa':
                    $('.cc-icon').removeClass('text-primary')
                    $('.fa-cc-visa').addClass('text-primary')
                    $('.fa-cc-visa').toggleClass('icon-scale')
                    break;

                case 'amex':
                    $('.cc-icon').removeClass('text-primary')
                    $('.fa-cc-amex').addClass('text-primary')
                    $('.fa-cc-amex').toggleClass('icon-scale')
                    break;

                case 'diners':
                    $('.cc-icon').removeClass('text-primary')
                    $('.fa-cc-diners-club').addClass('text-primary')
                    $('.fa-cc-diners-club').toggleClass('icon-scale')
                    break;

                case 'jcb':
                    $('.cc-icon').removeClass('text-primary')
                    $('.fa-cc-jcb').addClass('text-primary')
                    $('.fa-cc-jcb').toggleClass('icon-scale');
                    break;
                    
                case 'discover':
                    $('.cc-icon').removeClass('text-primary')
                    $('.fa-cc-discover').addClass('text-primary')
                    $('.fa-cc-discover').toggleClass('icon-scale')
                    break;

                default:
                    $('.cc-icon').removeClass('text-primary')
                    $('.cc-icon').removeClass('icon-scale')
                    break;
            }
        }
    })

    new Cleave('#input-expire-date', {
        date: true,
        datePattern: ['m', 'y']
    });

    $("#form-credit-card").submit(function(e) {
        e.preventDefault()
    })

    AutoCompleteCountries()
})