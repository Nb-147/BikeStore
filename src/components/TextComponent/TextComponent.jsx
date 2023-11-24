import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

export const ControlledInput = () => {
    const [dataForm, setDataForm] = useState({ email: '', nombre: '' });

    const handleOnChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
    }

    console.log(dataForm)
    return (
        <>
            <input
                type="text"
                name='email'
                value={dataForm.email}
                onInput={handleOnChange}
                placeholder="mail"
            /><br></br>
            <input
                type="text"
                name='nombre'
                value={dataForm.nombre}
                onChange={handleOnChange}
                placeholder="nombre"
            />

        </>
    );
};

const Loading = () => {
    useEffect(() => {
        console.log('useEffect')
        return () => {
            console.log('Desmontado el loading')
        }
    })
    console.log('renderizo loading')
    return <h2>Cargando ...</h2>
}

export function LoadingComponent() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000)
    }, []);

    return <>
        {loading ? <Loading /> : <h4>Productos: </h4>}
    </>;
}

export function TextComponent({ user = false, children }) {
    if (!user) {
        return <h1> Ud no puede ver este componente porque no está logueado</h1>
    }
    return (
        <>
            <h2>Ud esta logueado puede ver la pág.</h2> {children} </>
    )
}

export function TextComponent2({ user = 'admin' }) {
    return (
        <>
            <button className="btn btn-outline-danger">Para todos</button>
            {user === 'admin' && <button className="btn btn-outline-danger">Admin</button>}
            {user !== 'admin' && <button className="btn btn-outline-primary" >User</button>}
        </>
    );
}

export function TextComponent3({ stock = 0 }) {
    return (
        <> <h2> {stock === 0 ? 'NO Hay Stock' : 'Hay stock'} </h2> </>
    )
}

export function TextComponent4({ stock = 1 }) {
    return (
        <>
            <h2 style={{ color: stock ? "green" : "red" }}> {stock === 0 ? 'NO Hay Stock' : 'Hay stock'} </h2>
        </>
    );
}

export function TextComponent5({ stock = 0 }) {
    return (
        <>
            <h2 className={(stock !== 0) ? "alert alert-success" : "alert alert-danger"}> {stock === 0 ? 'NO Hay Stock' : 'Hay stock'} </h2>
        </>
    );
}

export function TextComponent6({ stock = 1, otro = 'mt-5' }) {
    return (
        <>
            <h2 className={`${stock !== 0 ? "alert alert-success" : "alert alert-danger"} ${otro || ""}`} > Stock </h2>
        </>
    );
}

export function TextComponent7({ condition = true, otro = "mt-5" }) {
    const props = condition ?
        {
            className: `alert alert-success ${otro || ""}`,
            style: { color: 'red' },
            title: "Este es el titulo si la condicion es verdadera",
            nombre: 'Nico'
        }
        :
        {
            className: `alert alert-warning ${otro || ""}`,
            style: { color: 'green' },
        }

    return (
        <>
            {/* className= btn btn-success style=   */}
            <h2 {...props} >Ud esta logueado puede ver la pág.</h2>
        </>
    )
}