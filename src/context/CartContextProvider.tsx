import React, { useReducer } from 'react'
import { Props, Action, State, Context } from '../Types/CartContextTypes'

const initialState: State = {
    selectedItems: [],
    total: 0,
    itemsCounter: 0,
    isCheckOut: false,
}

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "CHECKOUT":
            return { selectedItems: [], total: 0, itemsCounter: 0, isCheckOut: true }
        case "CLEAR":
            return { selectedItems: [], total: 0, isCheckOut: false, itemsCounter: 0 };
        case "INCREASE":
            const index = state.selectedItems.findIndex(item => item.id === action.payload?.id)
            if (index === -1)
                state.selectedItems.push({ ...action.payload!, quantity: 1 })
            else
                state.selectedItems[index].quantity++;
            return { itemsCounter: ++state.itemsCounter, isCheckOut: false, selectedItems: [...state.selectedItems], total: state.total + action.payload!.price };
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload?.id)
            if (state.selectedItems[indexD].quantity === 1) {
                const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload?.id)
                return { itemsCounter: --state.itemsCounter, isCheckOut: false, selectedItems: [...newSelectedItems], total: state.total - action.payload!.price }
            }
            else
                if (!(state.selectedItems[indexD].quantity < 1))
                    --state.selectedItems[indexD].quantity;
            return { itemsCounter: --state.itemsCounter, isCheckOut: false, selectedItems: [...state.selectedItems], total: state.total - action.payload!.price };
        default: return initialState;
    }
}


export const CartContext = React.createContext({} as Context);

const CartContextProvider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CartContext.Provider value={{ dispatch, state }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
