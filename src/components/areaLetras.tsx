"use client";

import { Letra } from "@/components/letra";
import { useInfo } from "@/contexts/ContextGame";
import { ContextPalavra, usePalavra } from "@/contexts/ContextPalavra";

export const AreaLetra = ()=>{

    const playerInfo = useInfo();

    const letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    return(
        <div className="w-[80%] p-5 flex gap-5 flex-wrap m-auto max-sm:w-full max-sm:justify-center max-sm:p-3">
            {playerInfo?.infoPlayer.game && letras.map((el,i) =>(
                <Letra letra={el} key={i}/>
            ))}
        </div>
    );
}