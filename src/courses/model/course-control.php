<?php

require_once '../../../vendor/autoload.php';

$action = filter_input(INPUT_POST, "action", FILTER_SANITIZE_SPECIAL_CHARS);
$name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS);

$course = new \src\model\Course();
$courseDao = new \src\model\CourseDAO();

switch ($name) {
    case 'game-design':
        $name = "Game Design";
        break;
    case 'programmer':
        $name = "Programação";
        break;
    case 'level-design':
        $name = "Level Design";
        break;
    case 'modeling':
        $name = "Modelagem e Animação";
        break;
    default:
        break;
}


switch ($action) {
    case 'Search Course Data':
        $search = $courseDao->select("cursos", true, "nome", $name)[0];
        
        echo json_encode($search);
        break;
    default:
        break;
}