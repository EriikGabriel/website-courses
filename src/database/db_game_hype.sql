CREATE DATABASE db_game_hype;
USE db_game_hype;

CREATE TABLE usuarios (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
    senha VARCHAR(32) NOT NULL,
    email VARCHAR(100) UNIQUE,
    foto VARCHAR(200)
) ENGINE=INNODB;

CREATE TABLE cursos(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    descricao TEXT NOT NULL,
    aulas INT NOT NULL,
    duracao VARCHAR(10) NOT NULL,
    certificado CHAR(1) NOT NULL,
    preco DOUBLE NOT NULL
) ENGINE=INNODB;

CREATE TABLE historico_cursos(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_curso INT NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY(id_curso) REFERENCES cursos(id),
    FOREIGN KEY(id_usuario) REFERENCES usuarios(id)
) ENGINE=INNODB;

INSERT INTO cursos 
VALUES(null, "Game Design", "Curso sobre os fundamentos e técnicas envolvendo o Game Design", 8, "2h 30min", 'S', 45.00);

INSERT INTO cursos 
VALUES(null, "Programação", "Curso sobre lógica e linguagem de programação na construção de jogos", 10, "3h 20min", 'N', 30.00);

INSERT INTO cursos 
VALUES(null, "Level Design", "Curso sobre o desenvolvimento, criação e regras por trás dos levels de um jogo", 4, "50min", 'S', 22.00);

INSERT INTO cursos 
VALUES(null, "Modelagem e Animação", "Curso sobre estruturação de modelagens 3D e criação de animações", 8, "2h 10min", 'N', 38.00);

SELECT * FROM cursos;