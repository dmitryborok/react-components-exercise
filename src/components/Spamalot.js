import Spam from "./Spam";
import React, { Component } from 'react';


const Spamalot =()=>{
    let divArr = [];
    for (let i=0; i<500; i++) {
        divArr.push(i);
    }
    return (
         divArr.map(item => <Spam/>)
    )
}

export default Spamalot

