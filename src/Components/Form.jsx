import { useState } from "react"
import Card from "./Card";

export const Form = () => {
  const [name, setName] = useState("")
  const [colores, setColores] = useState("")
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);


  const handleName = (e)=>{
    setName(e.target.value)
  }

  const handleColor = (e)=> {
    setColores(e.target.value)
  }

  const eventHandler =(e)=> {
    e.preventDefault()
    if (name.trim().length > 3 && !/^\s/.test(name) && colores.trim().length > 6) {
          setShow(true);
          setError(false);
      } else {
          setError(true);
      }
  }
    

  return (
    <div>
      <form onSubmit={eventHandler}>
        <input onChange={handleName} type="text" placeholder="ingresar nombre" value={name} />
        <input onChange={handleColor}  type="text" placeholder="ingresa tu color favorito" value={colores} />
        <button>Enviar</button>
      </form>
      {error && <p>Por favor, chequee si la informacion es correcta</p>}
      {show && <Card nombre={name} color={colores}/>}

    </div>
  )
}
