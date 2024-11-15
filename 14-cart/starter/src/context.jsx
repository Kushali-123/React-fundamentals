import { useContext, createContext, useReducer, useEffect } from 'react'
import reducer from './reducer'
import {
  CLEAR_CART,
  REMOVE,
  DECREASE,
  INCREASE,
  DISPLAY_ITEMS,
  LOADING,
} from './actions'
import cartItems from './data'
import { getTotals } from './utils'
const url = 'https://www.course-api.com/react-useReducer-cart-project'

const AppContext = createContext()

const initialValue = {
  loading: false,
  cart: new Map(),
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  const { totalAmount, totalCost } = getTotals(state.cart)

  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } })
    console.log(id)
  }

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } })
    console.log(id)
  }

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } })
    console.log(id)
  }

  const fetchData = async () => {
    dispatch({ type: LOADING })
    const data = await fetch(url)
    const cart = await data.json()
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
