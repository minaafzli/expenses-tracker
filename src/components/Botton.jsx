function Botton({title , color , onclick}) {
    return (
         <button onClick={onclick} className={`border border-border rounded-2xl p-2 bg-${color} text-text-muted font-bold cursor-pointer hover:text-primary`}>
           <p>{title}</p> 
        </button>
    )
}

export default Botton
