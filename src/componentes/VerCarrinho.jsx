import React from 'react';
import { useState } from 'react';
export default function CarrinhoConteudo(props) {
    const [carrinho, setCarrinho] = useState([])
    const voltarTelaInicial = () => {
    props.toggleMostrarCarrinho();
  };
  const atualizarQuantidade = (id, quantidade) => {
    const novoCarrinho = props.carrinho.map((item) => {
      if (item.id === id) {
        item.quantidade = Math.max(quantidade, 1);
      }
      return item;
    });

    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  const excluirItem = (id) => {
    const novoCarrinho = props.carrinho.filter((item) => item.id !== id);

    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {carrinho.map((item) => (
          <li key={item.id}>
            {item.nome} - Quantidade:
            <button onClick={() => atualizarQuantidade(item.id, item.quantidade - 1)}>-</button>
            {item.quantidade}
            <button onClick={() => atualizarQuantidade(item.id, item.quantidade + 1)}>+</button>
            <button onClick={() => excluirItem(item.id)}>Excluir</button>
          </li>
        ))}
      </ul>
      <button onClick={voltarTelaInicial}>Voltar para a tela inicial</button>
    </div>
  );
}
