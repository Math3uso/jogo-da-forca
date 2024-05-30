"use client";

import { useEffect, useState } from "react";
import { info } from "@/data/palavrasInfo";
import { Palavra } from "@/types/palavra";
import { usePalavra } from "@/contexts/ContextPalavra";
import { useInfo } from "@/contexts/ContextGame";

export const AreaPalavras = () => {

    const palavra = usePalavra();
    const infoPlayer = useInfo();
    const [letra, setLetra] = useState<string[]>([]);
    const [start, setStart] = useState(false);

    const handleStart = () => {
        let palavraText = info[Math.floor(Math.random() * info.length)];
        let res: string[] = [];
        palavraText.name.split('').map(text => (
            res.push('')
        ));
        setLetra(res);
        palavra?.setData({
            palavra: palavraText,
            res,
        });
        setStart(true);
        infoPlayer?.setInfoPlayer({
            game: true,
            attemps: 5,
            dica: {
                dicaMessage: palavraText.dica,
                dicaVerifi: false,
            }
        });
    }

    return (
        <div className="h-[70%] flex justify-center items-center text-white overflow-hidden">
            {!infoPlayer?.infoPlayer.game &&
                <div className="text-center p-3">
                    <h1 className="text-3xl my-3 font-bold max-lg:text-xl">Ao iniciar, tente adivinhar uma palavra aleatoria</h1>
                    <button onClick={handleStart} className="bg-red-500 p-3 rounded-md w-32 hover:bg-red-500/70 transition-all hover:scale-95">
                        Start
                    </button>
                </div>

            }

            <div className="p-3 flex gap-5 max-sm:gap-2">
                {palavra?.data?.res.map((el, i) => (
                    <div key={i} className=" w-20 flex justify-center items-center border-b-4 text-bold text-xl max-sm:w-7">
                        <p className="text-3xl font-bold max-sm:text-lg">{el.toUpperCase()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}