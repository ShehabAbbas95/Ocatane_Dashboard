import { Modal } from "antd";
import { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  children: ReactNode;
  width?: string;
  title: string;
  handleClose: (isOpen: boolean) => void;
};

const GlobalModal = ({
  title,
  open,
  width = "60%",
  children,
  handleClose,
}: ModalProps) => {
  return (
    <Modal
      title={title}
      width={width}
      open={open}
      children={children}
      footer={null}
      onCancel={() => handleClose(false)}
    />
  );
};

export default GlobalModal;
