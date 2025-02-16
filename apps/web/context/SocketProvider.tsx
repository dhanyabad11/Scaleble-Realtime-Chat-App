"use client";
import React, { Children } from "react";

interface SocketProviderProps {
    Children?: React.ReactNode;
}
interface ISocketContext {
    sendMessage: (msg: string) => any;
}

const SocketContext = React.createContext<ISocketContext | null>(null);

export const SocketProvider: React.FC<SocketProviderProps> = ({ Children}) => {
     const sendMessage: ISocketContext['sendMessage'] = useCallback((msg) => 

         console.log('Send Message', msg); 
     )
    return <SocketContext.Provider value={sendMessage}>{Children}</SocketContext.Provider>;
};
