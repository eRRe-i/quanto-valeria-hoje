import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';


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

  const [data, setData] = useState();

  useEffect(() => {
    getDados();
  }, []);

  async function getDados(){
    const response = await axios.get(
      "http://www.ipeadata.gov.br/api/odata4/Metadados('PRECOS_INPCBR')/Valores"
    );

    const responseData = await response.data.value.map((item) => {
      const container = {
          ano: new Date(item.VALDATA).getFullYear(),
          valor: item.VALVALOR
        };
        return container;
      }
    );
    // console.log(responseData)
    setData(responseData);
  };
  
  const dados = [
    {ano:2000, value:145286},
    {ano:2001, value:145287}
  ]

  return (
    <div className='DataList'>
      <ul>
        { data.map((item, index) => ( <DataListItem key={index} dataYear={item.ano} dataValue={item.valor} /> )) }
      </ul>
    </div>
  );
}

export function DataListItem(props) {
  return (
    <div className='DataListItem'>
      <li>{props.dataYear} / {props.dataValue}</li>
    </div>
  )
}

export default App;
