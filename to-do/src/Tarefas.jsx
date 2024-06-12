import { useEffect, useState } from "react"

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
            <button className="bg-gray-500 text-white w-6 rounded-full  ">.</button>
            <p className="text-white px-4 w-full">{tarefaRecebida.nomeTarefa}</p>
            <button className="bg-gray-500 text-white w-6 rounded-full ">.</button>
        </div>
       
    </div>
    )
}

