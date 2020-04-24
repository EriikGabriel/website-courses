<?php

//? Recarregando automáticamente as classes com autoload
require_once 'vendor/autoload.php';

//? Instanciando um novo produto
$produto = new \App\Model\Produto();

// $produto->setId(1);
// $produto->setNome('Cadeira Gamer');
// $produto->setDescricao('Razer Certificate');

$produtoDao = new \App\Model\ProdutoDao();

//? Criando um produto
// $produtoDao->create($produto);

//? Atualizando um Produto
// $produtoDao->update($produto);

//? Deletando um Produto
// $produtoDao->delete(2);

//? Exibindo os Produtos
$produtoDao->read();

foreach($produtoDao->read() as $produto) {
    echo "Produto: {$produto['nome']} <br> 
          Descrição: {$produto['descricao']} <hr>";
}
