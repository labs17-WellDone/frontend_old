import { createContext, useState, useContext } from "react"

const StoreContext = createContext({
  nav: false,
})

export const useStore = () => useContext(StoreContext)

export default function Layout({ children }) {
  const [store, setstore] = useState({ nav: false })

  const toggleNav = () => {
    setstore({ ...store, nav: !store.nav })
  }
  return (
    <StoreContext.Provider value={{ store, setstore, toggleNav }}>
      <div css={{ display: "flex" }}>{children}</div>
    </StoreContext.Provider>
  )
}
