import styled from "styled-components"

const FaqWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export default function FAQ() {
  return (
    <FaqWrapper>
      <h1>FAQ</h1>
    </FaqWrapper>
  )
}