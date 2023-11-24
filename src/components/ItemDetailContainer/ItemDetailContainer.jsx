import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { mFetch } from "../../helpers/mFetch"
import { ItemDetail } from "./ItemDetail/ItemDetail"

import { LoadingComponent, TextComponent, TextComponent2, TextComponent3, TextComponent4, TextComponent5, TextComponent6, TextComponent7 } from "../TextComponent/TextComponent"



export const ItemDetialContainer = () => {
    const [product, setProduct] = useState({});
    const { pid } = useParams();
    console.log(pid);

    useEffect(() => {
        mFetch((pid))
            .then(resp => {
                console.log('Product Data:', resp);
                setProduct(resp);
            })
            .catch(err => console.log(err));
             // .finally(()=> setLoading(false))
    }, [pid]);

    return (
        <>
            {
                <LoadingComponent />
            }
            <ItemDetail product={product} />
            {/* <TextComponent >
            </TextComponent> */}
            {/* <TextComponent2 /> */}
            {/* <TextComponent3 /> */}
            {/* <TextComponent4 /> */}
            {/* <TextComponent5 /> */}
            {/* <TextComponent6  otro='mt-2'/> */}
            {/* <TextComponent7 /> */}
        </>
    )
}