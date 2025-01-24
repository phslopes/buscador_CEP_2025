import { useState } from 'react'
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './services/api'

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});


  async function handleSearch() {
    if (input === '') {
      alert("Preencha algum CEP");
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("")

    } catch {
      alert("Erro ao buscar CEP")
      setInput("")
    }
  }

  return (
    <div className="conteiner">
      <h1 className="title">Buscador CEP</h1>
      <div className="conteinerInput">
        <input
          type="text"
          placeholder="Digite o CEP..."
          value={input}
          //apertando a tecla enter faz a função de pesquisa 
            onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }
              }
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#FFF' />
        </button>
      </div>


      {Object.keys(cep).length > 0 && (

        <main className='main'>
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>

      )}

    </div>
  );
}

export default App;
