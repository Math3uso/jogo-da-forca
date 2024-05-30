import { AreaLetra } from "@/components/areaLetras";
import { AreaPalavras } from "@/components/areaPalavras";
import { Info } from "@/components/info";
import { GameContextProvider } from "@/contexts/ContextGame";
import { PalavraProvider } from "@/contexts/ContextPalavra";
import { Metadata } from "next";

export const metadata:Metadata = {
    title:"hangman game -Math3uso"
}

export default function Home() {

    return (
        <GameContextProvider>
            <PalavraProvider>
                <div className="w-screen h-screen bg-zinc-900 flex justify-center items-center overflow-hidden">
                    <div className=" w-full max-w-7xl h-[90%] flex justify-between flex-col overflow-hidden sm:h-full">
                        <Info />
                        <AreaPalavras />
                        <AreaLetra />
                    </div>
                </div>
            </PalavraProvider>
        </GameContextProvider>
    )
}
