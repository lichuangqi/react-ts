import React, { useContext } from 'react';
import { appSetStateContext } from '../AppState';
import { RobotProps } from './Robot';
// HOC高阶组件写法
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

//自定义钩子写法
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