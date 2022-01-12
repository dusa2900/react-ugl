import React from "react";
import './Head.css';
import Child1 from "./Child1";
import { Button } from "./Button";
const Head =()=>{
    return(
        <>
        <h1>Hello world!.</h1>
        <Child1 />
        <Button/>
        </>
    )
}
export default Head;