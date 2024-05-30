'use client';

import { InfoPlayer } from "@/types/infoPlayer";
import { createContext, ReactNode, useContext, useState } from "react";

type Context = {
    infoPlayer:InfoPlayer;
    setInfoPlayer:(infoPlayer:InfoPlayer)=>void;
}

export const GameContext = createContext<Context | null>(null);

export const GameContextProvider = ({children}:{children:ReactNode})=>{

    const [infoPlayer,setInfoPlayer] = useState<InfoPlayer>({
        game:false,
        attemps:5,
        dica:{
            dicaMessage:'',
            dicaVerifi:false,
        }
    });

    return(
        <GameContext.Provider value={{infoPlayer,setInfoPlayer}}>
            {children}
        </GameContext.Provider>
    );
}

export const useInfo = ()=> useContext(GameContext);