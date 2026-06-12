import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const List = ({getItems}) => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        setItems(getItems());
        console.log("setting items")
    },[getItems])

    return (
        <div>
           { items.map((item, index) => {
            return <p key={index}>{item}</p>
           }
        )}
        </div>
    )
}
export default List;