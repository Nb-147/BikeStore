import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { mFetch } from "../../helpers/mFetch"
import { ItemDetail } from "./ItemDetail/ItemDetail"


export const ItemDetialContainer = () => {
    const [product, setProduct ] = useState({})
    const { pid } = useParams()
    console.log(pid)

    useEffect(()=>{
        mFetch(pid)
        .then(resp => setProduct(resp))
        .catch(err=> console.log(err))
        // .finally(set loading)
    },[pid])
    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}