import {useState} from 'react'
import { FiSearch } from 'react-icons/fi';
import './style.css';
function App() {
  const [inuput, setInput] = useState('');

function handleSearch(){
  alert("VALOR DO INPUT  " + inuput)
}

  return (
    <div className="conteiner">
      <h1 className="title">Buscador CEP</h1>
      <div className="conteinerInput">
        <input
          type="text"
          placeholder="Digite o CEP..."
          value={inuput}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>
      <main className='main'>
        <h2>CEP: 0972359482</h2>
        <span>Rua teste algum</span>
        <span>Complemento: Algum Complemento</span>
        <span>Vila Rosa</span>
        <span>Campo Grande - MS</span>
      </main>
    </div>
  );
}

export default App;
