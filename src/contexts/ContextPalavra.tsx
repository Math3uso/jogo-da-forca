"use client";

import { Palavra } from "@/types/palavra";
import { createContext, ReactNode, useContext, useState } from "react";

export type DataPalavra = {
    palavra:Palavra;
    res:string[];
};

type Context = {
    palavra:Palavra;
    setPalavra:(palavra:Palavra)=>void;
}

type Teste = {
    data:DataPalavra ;
    setData:(data:DataPalavra)=> void;
}

export const ContextPalavra = createContext<null | Teste>(null);

export const PalavraProvider = ({children}:{children:ReactNode})=>{

    const [data,setData] = useState<DataPalavra>({
        palavra:{
            category:"",
            name:"",
            dica:''
        },
        res:[],

    });

    return(
        <ContextPalavra.Provider value={{data,setData}}>
            {children}
        </ContextPalavra.Provider>
    )
}

export const usePalavra = ()=>useContext(ContextPalavra);