import useIsMobile from "@ap/hooks/useIsMobile";
import { Modal } from "@mantine/core";
import styled from "styled-components";


const ModalStyled = styled(Modal)`
  .mantine-Paper-root, .mantine-Modal-header {
    background-color: #FFFBD2;
    width: 80%;
    flex: unset;

    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .mantine-Modal-title {
    font-size: 24px !important;
    font-weight: 500 !important;
  }
  background-color: #FFFBD2 !important;

  @media (max-width: 768px) {
    .mantine-Modal-body {
      max-height: 500px;
      width: 580px;
      // max-width: 100%;
    }
  }
`;

const BonusText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #73562C;
  margin-top: 10px;
`;
export const PrizeModal = ({ children,
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
  const isMobile = useIsMobile();
  return (
  <ModalStyled
    withCloseButton={false}
    opened={opened}
    onClose={close}
    closeOnClickOutside={true}
    title="Prize"
    size="md"
    radius={'lg'}
    centered
  >
    <PrizeGrid>
      <BigSpan>Position</BigSpan>
      <BigSpan>Payout</BigSpan>
      <BigSpan>
        {!isMobile ? 'Bonus (HODL 1,000,000 $STANLEY!)'
        : 'HODL 1,000,000 $STANLEY'}
      </BigSpan>
    </PrizeGrid>
    <PrizeGrid>
      <BigSpan>No. 1</BigSpan>
      <BigSpan>300,000 $STANLEY</BigSpan>
      <BigSpan>$50 USDC</BigSpan>
    </PrizeGrid>
    <PrizeGrid>
      <BigSpan>No. 2</BigSpan>
      <BigSpan>250,000 $STANLEY</BigSpan>
      <BigSpan>$25 USDC</BigSpan>
    </PrizeGrid>
    <PrizeGrid>
      <BigSpan>No. 3</BigSpan>
      <BigSpan>50,000 $STANLEY</BigSpan>
      <BigSpan>$10 USDC</BigSpan>
    </PrizeGrid>
  </ModalStyled>
  )
}

const PrizeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  @media (max-width: 768px) {
    grid-template-columns: 0.5fr 1.2fr 2fr;
    padding: 10px;
  }
  gap: 20px;
  padding: 20px;
  justify-content: center;
  border-bottom: 1px solid #000;
`;

const BigSpan = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #73562C;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;