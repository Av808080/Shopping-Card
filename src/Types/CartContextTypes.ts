export type State = {
    selectedItems: {
        image: string;
        id: number;
        title: string;
        price: number;
        quantity: number
    }[];
    total: number;
    itemsCounter: number;
    isCheckOut: boolean;
}

export type Action = {
    payload: {
        id: number;
        image: string;
        price: number;
        title: string
        // quantity: number
    }
    type: "DECREASE" | "INCREASE" | "CLEAR" | "CHECKOUT"
}
export type Props = {
    children:React.ReactNode
}
 
export type Context = {
    dispatch: (action: Action) => void;
    state: State;
}