import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import {modalData} from './data';


const Modal = () => {
    const {modal, OpenModal, CloseModal} = useGlobalContext();
    return (
        <aside className={`${modal} ? 'show-modal': 'modal-overlay'`}>
        <div className="modal-container">
            <button className="close-modal-btn" onClick={CloseModal} ><FaTimes /></button>
            <div>
                {modalData.map((modals)=>{
                    const {sno, text, icon, inp} = modals;
                    return (
                        <center>
                        <div key={sno}>
                            <h5>{text}</h5>
                            {icon}
                            {inp}
                        </div>
                        </center>
                    )
                })}
            </div>
            </div>
        </aside>
    );
}


export default Modal;