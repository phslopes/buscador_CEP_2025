import { FiSearch } from 'react-icons/fi';
import './style.css';
function App() {
  return (
    <div className="conteiner">
      <h1 className="title">Buscador CEP</h1>
      <div className="conteinerInput">
        <input
          type="text"
          placeholder="Digite o CEP..."
        />
        <button className="buttonSearch">
          <FiSearch size={25} color='#FFF'/>
        </button>
        <main className='main'>

          <h2>CEP: 0972359482</h2>
          <span>Rua teste algum</span>
          <span>Complemento: Algum Complemento</span>
          <span>Vila Rosa</span>
          <span>Campo Grande - MS</span>

 </main>
      </div>
    </div>
  );
}

export default App;
