import { useState } from "react"
import { Addition } from "./Addition";
import Subtraction from "./Subtraction";
import { Division } from "./Division";
import { Multiplication } from "./Multiplication";

export default function Calculator(){

    const [number, setNumber] = useState([10,20]);

    return(
        <>

        <Addition num ={number}/>
        <Subtraction num = {number}/>   
        <Division num = {number}/>
        <Multiplication num = {number}/>

        </>
       


    )
}