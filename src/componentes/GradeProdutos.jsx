import Produto from '../templates/Produto';

export default function GradeProdutos(props) {
  const { listaProdutos, adicionarProdutoAoCarrinho } = props;

  if (listaProdutos) {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          margin: '10px',
          padding: '10px',
          gap: '20px',
        }}
      >
        {listaProdutos.map((produto) => (
          <Produto key={produto.id} produto={produto} adicionarProdutoAoCarrinho={adicionarProdutoAoCarrinho} />
        ))}
      </div>
    );
  } else {
    return <h1>Carregando...</h1>;
  }
}
