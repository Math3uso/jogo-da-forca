"use client";


import { FaRegLightbulb } from "react-icons/fa";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useInfo } from "@/contexts/ContextGame";

export const ToggleDialog = ()=>{

    const infoPlayer = useInfo();

    const handleShowInfo = ()=>{
        infoPlayer?.setInfoPlayer({
            attemps:infoPlayer.infoPlayer.attemps-2,
            dica:{
                dicaMessage:infoPlayer.infoPlayer.dica.dicaMessage,
                dicaVerifi:true,
            },
            game:true,
        });
    }

    return(
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'secondary'} disabled={infoPlayer?.infoPlayer.dica.dicaVerifi}>
                    Dica <FaRegLightbulb/>
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-primary text-secondary border-primary">
                <DialogHeader>
                    <DialogTitle>Ver a dica</DialogTitle>
                    <DialogDescription>
                        Ao confirmar, tera 2 pontos a menos
                    </DialogDescription>
                </DialogHeader>
                <div>
                    <DialogClose asChild>
                        <Button onClick={handleShowInfo} variant={"secondary"}>Confimar</Button>
                    </DialogClose>
                </div>
            </DialogContent>
        </Dialog>
    );
}