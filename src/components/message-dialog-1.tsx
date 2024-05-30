"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { BiLike } from "react-icons/bi";

type Props = {
    result?:string;
    reset?:()=>void;
}

export const MessageDialog = ({result,reset}:Props) => {
    return (
        <Dialog open={true}>
            <DialogContent className="bg-primary text-secondary border-primary ">
                <DialogHeader className="flex flex-row justify-around items-center">
                    <div>
                        <DialogTitle>
                            {result == "blue"? "Parabens!": "Não foi dessa vez..."}
                        </DialogTitle>
                        <DialogDescription 
                            className={`${result == "blue"? "text-blue-500":"text-red-500"}`}>
                            Clique no botão para reiniciar
                        </DialogDescription>  
                    </div>
                    <div className={`size-20 rounded-full flex items-center justify-center border
                     ${result == "blue"? "border-blue-200 rotate-0" : "border-red-200 rotate-180"}
                    `}>
                        <BiLike 
                            size={25} 
                            color={`${result == "blue"?"rgb(96 165 250)" :"rgb(248 113 113)"}`} />
                    </div>
                </DialogHeader>
                <div className=" pl-10">
                    <button onClick={reset} className={`p-3 rounded-md ${result == "blue"? "bg-blue-500": "bg-red-500"} `}>
                        Reiniciar
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
}