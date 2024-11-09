import React, { useState } from 'react'
import './RandomQuote.css'
import xicon from '../assets/xicon.png'
import icon from '../assets/icon.png'
const RandomQuote=()=>{

    let quotes =[];
    async function loadquotes(){
        const response=await fetch("https://type.fit/api/quotes");
        quotes=await response.json();
    }

    const random=()=>{
        const select=quotes[Math.floor(Math.random()*quotes.length)]
        setquote(select);
    }
    const twitter=()=>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`);
    }
    const [quote,setquote]=useState({
        text:"",
        author:"",
    });

    loadquotes();


    return(
        <div>
            <div className='container'>
                <div className='quote'>
                    {quote.text}
                </div>
                
                
                <div className='bottom'>
                    <div className='author'>
                        -{quote.author.split(',')[0]}
                    </div>
                    <div className='icons'>
                        <img src={icon} onClick={()=>{random()}} alt=""/>
                        <img src={xicon} onClick={()=>{twitter()}}alt=""/>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default RandomQuote