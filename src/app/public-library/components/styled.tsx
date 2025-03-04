import styled from "styled-components";

export const TopHeader = styled.div`
  background-color: #f8fafc;
  // background-image: radial-gradient(59.1% 166.02% at 50% -66.02%, 1);
  background-image: linear-gradient(180deg, #f8fafc 50%, #e2e8f0  100%);
  padding: 24px;

  display: flex;
  flex-direction: row;
`

export const SearchWrapper = styled.div`
  // border-radius: 48px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 535px;
  // overflow: hidden;
`
export const SearchInput = styled.input`
  border: 1px solid #e2e8f0;
  padding: 8px 48px 8px 18px;
  border-radius: 24px;
  display: flex;
  z-index: 1;
  width: inherit;

  // change the border color when focused
  &:focus {
    border-color: #2563eb !important;
    outline: #2563eb !important;
  }
`

export const SearchLogo = styled.div`
  position: absolute;
  top: unset;
  right: 6px;
  cursor: pointer;
  border-radius: 100%;
  width: 32px;
  height: 32px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2563eb;
  z-index: 3;

  svg {
    fill: white;
  }
`

export const Text = styled.span``;

const CategoryBox = styled.div`
  background-color: #f8fafc;
  padding: 24px;
  display: flex;
  flex-direction: row;
`
export const Category = () => {
  return (
    <CategoryBox>
      <Text>Arts</Text>
    </CategoryBox>
  )
}

export const StyledLLMInput = styled.input`
  border: 1px solid #e2e8f0;
  padding: 8px 48px 8px 18px;
  border-radius: 24px;
  display: flex;
  z-index: 1;
  width: inherit;

  // change the border color when focused
  &:focus {
    border-color: #2563eb !important;
    outline: #2563eb !important;
  }
`

export const StyledOpenAIResponseTextArea = styled.div`
  width: 100%;
  // the height is auto adjusted
  scroll-behavior: smooth;
  // background-color: #f8fafc;
  // need nice and darker abit
  background-color: #f0f0f0;
  padding: 8px;
  min-height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: start;
  display: flex;
`

// export const Style