import { useEffect, useState } from "react"
import Delete from "./img/Delete.png"

export default function Tarefas (props){
    const [tarefaRecebida, setTarefarecebida] = useState ({})
    function receberLocalstorage (){
        let getTarefa = JSON.parse(localStorage.getItem("tarefa")) 
        setTarefarecebida (getTarefa) 
        console.log(getTarefa)
        props.setAtualizar (false)
    }
    useEffect(()=> {
        console.log("teste")
        if(props.atualizar === true){
            receberLocalstorage()
        }
    },[props.atualizar])
    return(

        <div className="flex items-center gap-10 flex-col mt-10 ">
            <div className=" w-screen max-w-2xl rounded-lg h-12 bg-gray-400 flex items-center px-4 justify-between">
            <button type="checkbox" className="bg-gray-500 border-2 border-cyan-600 w-4 h-4 rounded-full  ">.</button>
            <p className="text-white px-4 w-full">{tarefaRecebida.nomeTarefa}</p>
            <p> </p>
            <img src={Delete} className=" w-6 rounded-full "></img>
        </div>
       
    </div>
    )
}

