import { useState } from 'react';
import './App.css';
import ashley from './assets/amused.webp'; 

function App() {
  const [replica, setReplica] = useState("Загрузка...");
  const [btns, setBtns] = useState([[0, "Начать"]]);

  async function fetch_replica() {
    try {
      const resp = await fetch("https://144.31.87.101/next_replica");
      let res = await resp.json()
      setReplica(res.text);
      setBtns(res.buttons);
    } catch(error) {
      print(error);
    }
  }

  return (
    <>
      <img className='ashley' src={ashley} alt="Ashley" />
      <div>{replica}</div>
      <div>{btns.map(([_, btn_text]) => (
        <button onClick={fetch_replica}>{btn_text}</button>
      ))}</div>
    </>
  );
}

export default App;