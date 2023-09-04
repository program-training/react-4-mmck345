import React, { createContext, useState } from "react";

type TextContextType = {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

export const TextContext = createContext<TextContextType | null>(null)

type TextContextProps = {
    children: React.ReactNode;
}

function TextContextProvider(props: TextContextProps) {
    const [state, setState] = useState<string>('Hello World')
    return (
        <TextContext.Provider value={{state, setState}}>
            {props.children}
        </TextContext.Provider>
    )
}

export default TextContextProvider;