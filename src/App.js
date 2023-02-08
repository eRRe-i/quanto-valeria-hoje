import logo from './logo.svg';
import axios from 'axios';
import './App.css';

async function getDados() {
  let response = await axios.get(
    "http://www.ipeadata.gov.br/api/odata4/Metadados('PRECOS_INPCBR')/Valores"
  );

  let data = await response.data.value.map((item) => {
    const container = {
      ano: new Date(item.VALDATA).getFullYear(),
      valor: item.VALVALOR
    };
    return container;
  }
  );
  console.log(data)
};

const dados = getDados();

function App() {
  return (
    <div className='App'>
      <h1>Quanto valeria hoje</h1>
      <form name="">
        <input type='text' placeholder='insira o valor' />
        <input type='text' placeholder='insira o ano' />
        <button type='submit'>Submeter</button>
      </form>
    </div>
  );
}

export default App;
