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
})