import React, { useContext } from 'react';
import { appSetStateContext } from '../AppState';
import { RobotProps } from './Robot';
const withAddToCart = (ChildComponent: React.ComponentType<RobotProps>) => {
    return (props) => {
        const setState = useContext(appSetStateContext)
        const addToCart = (id, name) => {
            if (setState) {
                setState(state => {
                    return {
                        ...state,
                        shoppingCart: {
                            items: [...state.shoppingCart.items, { id, name }]
                        }
                    }
                })
            }
        }
        return <ChildComponent {...props} addToCart={addToCart} />
    }
}

export default withAddToCart;

//自定义钩子
export const useAddToCart = () => {
    const setState = useContext(appSetStateContext)
    const addToCart = (id, name) => {
        if (setState) {
            setState(state => {
                return {
                    ...state,
                    shoppingCart: {
                        items: [...state.shoppingCart.items, { id, name }]
                    }
                }
            })
        }
    }
    return addToCart;
}