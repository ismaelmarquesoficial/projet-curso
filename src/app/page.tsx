"use client"
import { useState } from "react";

export default function Home() {
  const [numero,setNumero] = useState('');
  const [nome,setNome] = useState('');
  const [validade,setValidade] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div>
        <div>
          <form action="">
            <input type="number" placeholder="Numero do Cartão" value={numero} onChange={e => setNumero(e.target.value)} />              
            <input type="text" placeholder="Nome do Cartão" value={nome} onChange={e => setNome(e.target.value)}/>         
            <input type="number" placeholder="Validade" value={validade} onChange={e => setValidade(e.target.value)}/>         
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
