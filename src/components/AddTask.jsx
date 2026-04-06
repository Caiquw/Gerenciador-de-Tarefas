import { useState } from "react";

function AddTask({onAddTaskSubmit}){

    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    

    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input 
            className="border border-slate-300 outline-slate-400 px-4 py-2" 
            type="text" 
            placeholder="Digite o título da tarefa" 
            value={title}
            onChange={(event) => setTitle(event.target.value)}/>

            <input 
            className="border border-slate-300 outline-slate-400 px-4 py-2" 
            type="text" 
            placeholder="Digite a descrição da tarefa" 
            value={description}
            onChange={(event) => setDescription(event.target.value)}/>

            <button 
                onClick ={() => {
                onAddTaskSubmit(title,description); 
                setTitle("");
                setDescription("");

            }} 
                className="cursor-pointer bg-slate-500 text-shadow-white text-white rounded-2xl py-2 px-4"> 
                Adicionar</button>
            
        
        </div>

    )

}


export default AddTask;