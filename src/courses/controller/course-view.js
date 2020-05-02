$(document).ready(function () {
    if(window.location.search.substring(1).split('&')[0] != "") {
        var course = window.location.search.substring(1).split('&')[0].split('=')[1]

        switch (course) {
            case 'game-design':
                $("#content").empty()
                $("#content").load('src/courses/view/game-design.html')
                break;

            case 'level-design':
                $("#content").empty()
                $("#content").load('src/courses/view/level-design.html')
                break;

            case 'modeling':
                $("#content").empty()
                $("#content").load('src/courses/view/modeling.html')
                break;

            case 'programmer':
                $("#content").empty()
                $("#content").load('src/courses/view/programmer.html')
                break;

            default:
                break;
        }
    }
    
    if(sessionStorage.length > 0) {
        $(".avatar div").removeClass("d-none")
    }

    $("#left-account").click(function() {
        sessionStorage.removeItem("login-id")
        location.href = "index.html"
    })

    $(".home").click(function () {
        location.href = "index.html"
    })

    $(".game-design").click(function () {
        $("#content").empty()
        $("#content").load('src/courses/view/game-design.html')
    })

    $(".programmer").click(function () {
        $("#content").empty()
        $("#content").load('src/courses/view/programmer.html')
    })

    $(".level-design").click(function () {
        $("#content").empty()
        $("#content").load('src/courses/view/level-design.html')
    })

    $(".modeling").click(function () {
        $("#content").empty()
        $("#content").load('src/courses/view/modeling.html')
    })

    if(sessionStorage.length === 0) {
        $('.user-icon').click(function () {
            window.location.href = 'login.html'
        })
    }

    $("#btn-ready").click(function () {
        window.scroll({
            top: document.querySelector('.course-cards').offsetTop - 120,
            left: 0,
            behavior: 'smooth'
        })
    })
})