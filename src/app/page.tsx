"use client"
import { useState } from "react";

export default function Home() {
  const [numero,setNumero] = useState('');
  const [nome,setNome] = useState('');
  const [validade,setValidade] = useState('');

  const [cout, setCout] = useState(0)
  const handleBtClick = () => {
    setCout(cout + 1);
  }


  return (
    <main className="flex min-h-screen flex-col items-center m-5">

      <div className="w-100 p-10 bg-blue-900 m-5 text-blue-50 flex flex-col items-center">
        <p>{cout}</p>
        <button className="bg-black" onClick={handleBtClick}>Mais um</button>
      </div>


      <div>
        <div className="w-100 bg-orange-700 p-10">
          <form action="" className=" flex flex-col">
            <input type="number" className="text-black bg-transparent border border-solid border-black" placeholder="Numero do Cartão" value={numero} onChange={e => setNumero(e.target.value)} />              
            <input type="text" className="text-black bg-transparent border border-solid border-black" placeholder="Nome do Cartão" value={nome} onChange={e => setNome(e.target.value)}/>         
            <input type="number" className="text-black bg-transparent border border-solid border-black" placeholder="Validade" value={validade} onChange={e => setValidade(e.target.value)}/>         
          </form>
          <div>
            <p className="text-while">{numero}</p>
            <p className="text-while">{nome}</p>
            <p className="text-while">{validade}</p>
          </div>
        </div>
      </div>

    </main>
  );
}
