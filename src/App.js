import GradeProdutos from './componentes/GradeProdutos';
import BarraBusca from './templates/BarraBusca';
import Cabecalho from './templates/Cabecalho';
import React, { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resposta) => resposta.json())
      .then((produtos) => {
        setProdutos(produtos);
      });
  }, []);

  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinhoSalvo) {
      setCarrinho(carrinhoSalvo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);

  const adicionarProdutoAoCarrinho = (produto) => {
    const index = carrinho.findIndex((item) => item.id === produto.id);

    if (index === -1) {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    } else {
      const novoCarrinho = [...carrinho];
      novoCarrinho[index].quantidade += 1;
      setCarrinho(novoCarrinho);
    }
  };

  return (
    <div className="App">
      <Cabecalho />
      <BarraBusca />
      <GradeProdutos listaProdutos={produtos} adicionarProdutoAoCarrinho={adicionarProdutoAoCarrinho} />
    </div>
  );
}

export default App;
