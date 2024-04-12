import { useState } from "react";

export function useModal(){
    const [isOpen, setIsOpen] = useState(false);

    const opneModal =()=>{
        setIsOpen(true);
    }
    const closeModal =()=>{
        setIsOpen(false);
    }

    return[
        isOpen,
        opneModal,
        closeModal
    ]
} 