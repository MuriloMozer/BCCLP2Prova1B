import GradeProdutos from './componentes/GradeProdutos';
import BarraBusca from './templates/BarraBusca';
import Cabecalho from './templates/Cabecalho';
import CarrinhoConteudo from './componentes/VerCarrinho';
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
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

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

  const toggleMostrarCarrinho = () => {
    setMostrarCarrinho(!mostrarCarrinho);
  };

  return (
    <div className="App">
      <Cabecalho />
      <BarraBusca />
      <button onClick={toggleMostrarCarrinho}>Mostrar Carrinho</button>
      {mostrarCarrinho && (
        <CarrinhoConteudo
          carrinho={carrinho}
          setCarrinho={setCarrinho}
          toggleMostrarCarrinho={toggleMostrarCarrinho}
        />
      )}
      <GradeProdutos listaProdutos={produtos} adicionarProdutoAoCarrinho={adicionarProdutoAoCarrinho} />
    </div>
  );
}

export default App;
