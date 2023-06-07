import React, { useReducer } from 'react';
// import { CartContext } from "../../../Contexts/CartContext/CartContext";
import { CartContext } from "../../../Contexts/CartContext";

const CartProvider = ({children}) => {
	const reducer = (state, action) => {
		const { type, payload } = action
		if (type === "ADD_ITEM") {
			return [...state, payload]
		}
	}
	// const [list, dispatch] = useReducer(reducer, [])
	const [list, dispatch] = useReducer(reducer, [])

	return (
		<CartContext.Provider value={{
			list,
			dispatch
		}}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;