import { Modal } from "@mantine/core";
import styled from "styled-components";

const ModalStyled = styled(Modal)`
  .mantine-Paper-root, .mantine-Modal-header {
    background-color: #FFFBD2;
  }
  .mantine-Modal-title {
    font-size: 24px !important;
    font-weight: 500 !important;
  }
  background-color: #FFFBD2 !important;
`;
export const CustomModal = ({ children,
  opened,
  open,
  close,
  type,
 }: {
  children: React.ReactNode;
  opened: boolean;
  open: () => void;
  close: () => void;
  type: string;
}) => {
  // const [opened, { open, close }] = useDisclosure(false);
  if (type === 'add_wallet') {
    return (
      <ModalStyled
        withCloseButton={false}
        opened={opened}
        onClose={close}
        closeOnClickOutside={false}
        title="Start the game"
        size="md"
        radius={'lg'}
        centered
      >
          {children}
      </ModalStyled>
    );
  } else {
    return (
      <Modal
        withCloseButton={false}
        opened={opened}
        onClose={close}
        title="Join the family"
        size="md"
      >
          {children}
      </Modal>
    );
  }
}