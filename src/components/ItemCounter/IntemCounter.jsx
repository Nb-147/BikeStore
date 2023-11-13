import { useState } from "react"

export const ItemCounter = ({ initial, stock, onAdd }) => {
    const [counter, setcounter] = useState(initial)

    const handleAdd = () => {
        if (counter < stock) setcounter(counter + 1)

    }
    const handleSubstract = (evt) => {
        console.log(evt)
        if (counter > initial) setcounter(counter - 1)
    }

    const handleOnAdd = () => onAdd(counter)

    return <center>
        <h4>Comprar</h4>
        <button className="btn btn-outline-dark" onClick={handleAdd}> + 1 </button>
        <button className="btn btn-outline-dark" onClick={handleSubstract} > - 1 </button>
        <label>
            <strong className="card-text h3 fw-bold">{counter}</strong>
        </label>
        <button className="btn btn-outline-dark" onClick={handleOnAdd}>  Agregar al carrito </button>
    </center>
}

