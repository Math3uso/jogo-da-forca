"use client";

import { ToggleDialog } from "./toggle-dialog";
import { usePalavra } from "@/contexts/ContextPalavra";
import { useInfo } from "@/contexts/ContextGame";

export const Info = ()=>{

    const palavra = usePalavra();
    const infoPlayer = useInfo();

    return(
        <div className="p-3 flex justify-between items-center text-white">
            <div className="flex justify-center items-center gap-2 flex-col">
                {!infoPlayer?.infoPlayer.dica.dicaVerifi && infoPlayer?.infoPlayer.game &&
                    <ToggleDialog/>
                }
                
                {infoPlayer?.infoPlayer.dica.dicaVerifi && 
                    <div className="max-lg:w-[130px] text-center">
                        <p className="font-bold max-sm:text-xs">{infoPlayer?.infoPlayer.dica.dicaMessage}</p>
                    </div>
                }
            </div>
            <div className="e text-2xl text-center font-bold max-sm:text-base">
                <h1>{palavra?.data.palavra.category}</h1>
            </div>
            <div>
                {infoPlayer?.infoPlayer.game && 
                    <p className="text-xl max-sm:text-sm">Tentativas <span className="font-bold">{infoPlayer?.infoPlayer.attemps}</span></p>
                }
            </div>
        </div>
    );
}