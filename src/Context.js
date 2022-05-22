import { useContext } from "react";
import { createContext, useState } from "react";

const AnuContext = createContext();

const AppProvider = ({children}) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(true)
    const [modal, setModal] = useState(true)

    const OpenSideBar = () => {
        setIsSideBarOpen(true)
    }
    const CloseSideBar = () => {
        setIsSideBarOpen(false)
    }

    const OpenModal = () =>{
        setModal(true)
    }
    const CloseModal = () =>{
        setModal(false)
    }

    return (
        <AnuContext.Provider value={{isSideBarOpen, OpenSideBar, CloseSideBar, modal, OpenModal, CloseModal}}>
            {children}
        </AnuContext.Provider>
    )
}


 export const useGlobalContext = () => {
     return useContext(AnuContext)
 }

 export {AnuContext, AppProvider}