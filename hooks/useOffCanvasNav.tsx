import { FC, createContext, useContext } from 'react'

const offCanvasNavContext = createContext({
  isOpen: false,
  setOpen: (isOpen: boolean) => {},
})

export const OffCanvasNavContextProvider: FC<{
  isOpen: boolean
  setOpen: (isOpen: boolean) => void
}> = ({ children, ...value }) => (
  <offCanvasNavContext.Provider value={value}>
    {children}
  </offCanvasNavContext.Provider>
)

export const useOffCanvasNavContext = () => useContext(offCanvasNavContext)
