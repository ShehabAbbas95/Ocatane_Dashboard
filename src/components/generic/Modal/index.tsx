import { Modal } from "antd";
import { ReactNode } from "react";

type ModalProps = {
  open: boolean;
  children: ReactNode;
  width?: string;
  title: string;
};

const GlobalModal = ({ title, open, width = "60%", children }: ModalProps) => {
  return (
    <Modal
      title={title}
      width={width}
      open={open}
      children={children}
      footer={null}
    />
  );
};

export default GlobalModal;
