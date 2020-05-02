$(document).ready(function() {
    $("#modal-content").load("src/modal/view/modal.html")

    $(".buy-course").click(function(e){

        var course_name = e.target.name
        
        $("body").css({"overflow": "hidden"})

        document.addEventListener('iziToast-closed', function(data){
            $("body").css({"overflow": "visible"})  
        })

        iziToast.warning({
            title: '<h1>Aviso!</h1>',
            message: '<p id="message-warning">Este site é meramente um modelo para testes e nós não temos intenção nenhuma de \
            fazer uso das informações pessoais e sigilosas dos usuários, nenhum dado seu será exposto no processo!</p>',
            timeout: false,
            titleSize: '40px',
            messageSize: '15px',
            position: 'center',
            maxWidth: '60%',
            overlay: true,
            buttons: [
                ['<button id="btn-warning">Entendi</button>', function (instance, toast) {
                    instance.hide({
                        transitionOut: 'fadeOutUp'
                    }, toast, 'buttonName');

                    $('#purchaseModal').modal('show')
                }]
            ]
        })

        $('#purchaseModal').on('show.bs.modal', function (e) {
            if(sessionStorage.length > 0) {
                $('#steps li:nth-child(2) a').removeClass('disabled')
                $('#steps li:nth-child(2) a').tab('show')
                $('#steps li:first-child a').removeClass('active')
                $('#steps li:first-child a').addClass('disabled')
                $('#steps li:nth-child(2) a').addClass('active')

                $.post({
                    url: "src/users/model/user-control.php",
                    data: {
                        id: sessionStorage.getItem("login-id"),
                        action: "Search Payment Datas"
                    }
                }).done(function(res) {
                    const userData = JSON.parse(res)
                    console.log(userData)

                    $("#input-credit-number").val(userData.numero_cartao)
                    $("#input-cvv").val(userData.cvv)
                    $("#input-titular").val(userData.titular)
                    $("#input-expire-date").val(userData.data_expiracao)

                    $("#name-customer-input").val(userData.nome)
                    $("#email-customer-input").val(userData.email)
                    $("#tel-customer-input").val(userData.telefone)
                    $("#cpf-customer-input").val(userData.cpf)
                })
            } else {
                $("#btn-login").attr("name", course_name)
            }
        })
    })  
})