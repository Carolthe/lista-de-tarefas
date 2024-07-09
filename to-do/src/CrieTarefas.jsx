import { useEffect, useState } from "react"
import Notas from "./img/Notas.png"

export default function CrieTarefas(){
  
    return(
        <div>
        <div className="flex justify-center mt-4">
            <hr className="w-screen max-w-3xl border-gray-400"/>
        </div>
        <div className="flex justify-center mt-16">
            
        <img className="w-14 h-14" src={Notas} alt="Notas"></img>
        </div>
        <div className="flex flex-col items-center w-full  mt-4">
            <p className="text-gray-300 inline-block text-base font-bold">Você ainda não tem tarefas cadastradas</p>
            <p className="text-gray-300  inline-block text-base ml-2">Crie tarefas e organize seus itens a fazer</p>
        </div>
        </div>
    )
}