import { Modal } from "@mantine/core";
import styled from "styled-components";

const CustomModal = styled(Modal)`
  // Add your custom styles here
  .mantine-Modal-modal {
    background-color: #f0f0f0; // Example custom background
    border-radius: 12px; // Example custom border radius
    padding: 20px; // Example custom padding
  }

  .mantine-Modal-title {
    font-size: 24px; // Example custom title font size
    color: #e6007d; // Example custom title color
  }

  .mantine-Modal-body {
    font-size: 16px; // Example custom body font size
    color: #333; // Example custom body color
  }

  @media (max-width: 768px) {
    .mantine-Modal-inner {
      width: 100% !important; // Example custom width
      padding-inline: unset !important; // Example custom padding
      padding: 0px 12px !important; // Example custom padding
    }
    .mantine-Modal-content {
      flex: 1 !important; // Example custom flex
    }
  }
`;

export default CustomModal;