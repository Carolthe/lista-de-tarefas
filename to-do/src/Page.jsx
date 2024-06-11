import { useState } from "react"
import Logo from "./img/Logo.png"


export default function Page(props) {

    const pessoa = ["ju", "ju"]
    console.log(pessoa.length)
    
const [inputText, setInputText] = useState('')
// const [inputText2, setInputText2] = useState('')
    

    //  let getTarefa = localStorage.getItem("tarefa") !== null ? tarefa : []

    //   const tarefaObject = JSON.parse(getTarefa)
    //  }
    const handleInputChange = (tarefa) => {
        setInputText(tarefa.target.value)
        // setInputText2(tarefa.target.value)
        console.log(inputText, inputText)
    }


    const handleButtonClick = () => {
        props.atualizar(true)
        let tarefa = {
            concluida: false,
            nomeTarefa: inputText,
          }

        console.log("Tarefa do dia:", inputText)
        localStorage.setItem ("tarefa", JSON.stringify(tarefa))
    }

   
    return (

        <div className="flex flex-col justify-center items-center bg-gray-700 h-52">
            <img className=" mt-20 " src={Logo} alt="logo" />
            <div className="mt-12 flex justify-center ">
                <input className="w-screen max-w-2xl h-12 px-6 rounded-lg bg-gray-400 shadow-2xl text-white"
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Adicione uma nova tarefa" />
                <button onClick={handleButtonClick} className=" ml-5 h-12 w-16 rounded-lg bg-blue text-white shadow-2xl"> Criar </button>

            </div>
        </div>
    )
}