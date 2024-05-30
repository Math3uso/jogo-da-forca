"use client";

import { useInfo } from "@/contexts/ContextGame";
import { DataPalavra, usePalavra } from "@/contexts/ContextPalavra";
import { useEffect, useState } from "react";
import { MessageDialog } from "./message-dialog-1";

export const Letra = ({letra}:{letra:string})=>{
    const palavra = usePalavra();
    const [resColor,setResColor] = useState<string[]>([]);
    const [resFalse,setResFalse] = useState<string[]>([]);
    const playerInfo = useInfo();
    const [result,setResult] = useState("");

    const handleVerifLetra = (letra:string)=>{
        console.log(palavra?.data?.palavra);
        const textRes:string[] = [];
        palavra?.data.res.map(text => textRes.push(text));
        let tempValue = [];

        const text = palavra?.data.palavra.name;
        const letraText = text?.split("");

        text?.split('').map((el,i) =>{
            if(el == letra){
                textRes[i] = letra;
                setResColor([...resColor,el]);
            }else{
                tempValue.push(el);
                setResFalse([...resFalse,letra]);
                if(tempValue.length == letraText?.length){
                    playerInfo?.setInfoPlayer({
                        attemps:playerInfo.infoPlayer.attemps-1,
                        dica:playerInfo.infoPlayer.dica,
                        game:playerInfo.infoPlayer.game,
                    });
                }
            }
        });
        
        palavra?.setData({
            palavra:palavra.data.palavra,
            res:textRes,
        });
        verifiGame(textRes);
    }

    const verifiGame = (text:string[])=>{
        const newText = text.filter(letra => letra.trim()!=='');
        if(newText.length == text.length){
            setResult("blue");
        }
        if(playerInfo && playerInfo.infoPlayer.attemps <=1){
            setResult("red");
        }
    }

    const resetGame = ()=>{
        playerInfo?.setInfoPlayer({
            game:false,
            attemps:5,
            dica:{
                dicaMessage:'',
                dicaVerifi:false,
            }
        });
        palavra?.setData({
            palavra:{
                category:'',
                dica:"",
                name:'',
            },
            res:[],
        });
    }

    return(
        <div className="text-xl font-bold text-white">
            {result.trim()!=="" && 
                <MessageDialog 
                result={result} 
                reset={resetGame}
                /> 
            }
            
            <button onClick={()=>handleVerifLetra(letra)} 
            style={{backgroundColor:`
                ${ resColor.map(text => text==letra && 'rgb(59 130 246)') }
            `
        }}
            className={`
            rounded-md  bg-zinc-900 border hover:border-blue-500 hover:scale-110 size-14 transition-all hover:text-blue-500 
            max-sm:size-12
            ${resColor.map(text => text==letra? ' hover:text-white' : "")}
            ${resFalse.map(text => text == letra && 'bg-red-400 hover:text-white')}
            `}>
                {letra}
            </button>
        </div>
    );
}