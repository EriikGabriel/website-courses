$(document).ready(function() {
    $(".buy-game-design").click(function(){
        $login = false;

        if($login === true) {
            $.post({
                url: "src/courses/model/course-payment.php",
                data: {
                    nome: "Erik Gabriel"
                }
            }).done(function(res){
                console.log(JSON.parse(res))
            })
        }else {
            
        }

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
                }]
            ]
        });
    })
})