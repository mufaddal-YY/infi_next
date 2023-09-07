import Image from "next/image";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "90%",
    maxHeight: "90%",
    overflow: "auto",
  },
};

const Lightbox = ({ isOpen, onRequestClose, selectedImage }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <Image src={selectedImage} alt="Lightbox" />
    </Modal>
  );
};

export default Lightbox;
