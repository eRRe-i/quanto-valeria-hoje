import logo from './logo.svg';
import axios from 'axios';
import './App.css';

async function getDados(){
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
  return data;
};

function App() {
  return (
    <div className='App'>
      <h1>Quanto valeria hoje</h1>
      <form name="">
        <input type='text' placeholder='insira o valor' />
        <input type='text' placeholder='insira o ano' />
        <button type='submit'>Submeter</button>
      </form>
      <DataList />
    </div>
  );
}

export function DataList() {
  let data = getDados().then((response) => {

    
  });
 
  return (
    <div className='DataList'>
      <ul>
        {data.map((item) => (
          <DataListItem dataYear={item.ano} dataValue={data.value} />
        ))}
      </ul>
    </div>
  )
}

export function DataListItem(props) {
  return (
    <div className='DataListItem'>
      <li>{props.dataYear} {props.dataValue}</li>
    </div>
  )
}

export default App;
