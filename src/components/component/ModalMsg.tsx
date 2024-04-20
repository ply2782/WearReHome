import { Dispatch, FC, SetStateAction, useState } from "react";
import Modal from 'react-modal';

type ModalMsg = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}
const ModalMsg: FC<ModalMsg> = ({ isOpen, setIsOpen }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={() => setIsOpen(false)}
            style={customModalStyles}
            ariaHideApp={false}
            contentLabel="Message"
            shouldCloseOnOverlayClick={false}
        >
        </Modal>
    )
}
export default ModalMsg
const customModalStyles: ReactModal.Styles = {
    overlay: {
        backgroundColor: " rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "100vh",
        zIndex: "10",
        position: "fixed",
        top: "0",
        left: "0",
    },
    content: {
        width: "360px",
        height: "180px",
        zIndex: "150",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "10px",
        boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "white",
        justifyContent: "center",
        overflow: "auto",
    },
};