import { CartActionTypes } from './cart.types'

// Payload is an optional property for action object
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});