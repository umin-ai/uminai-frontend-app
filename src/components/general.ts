import { Space } from "@mantine/core";
import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  background-color: #301d81;
  border: none;
  color: white;
  // padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;

  // disabled
  &:disabled {
    background-color: #cccccc;
    color: #666666;
  }
`

export const StyledReadOnlyTextArea = styled.textarea`
  background-color: #f9f9f9;
  border: none;
  color: black;
  // padding: 15px 32px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: not-allowed;
  resize: none;
`;

const shadowStyles = `
  --tw-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 1px 2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
              var(--tw-ring-shadow, 0 0 #0000),
              var(--tw-shadow);
`;

export const Button = styled.button`
  display: flex;
  user-select: none;
  align-items: center;
  gap: 0.375rem;
  border-radius: 0.375rem;
  border: 1px solid transparent;
  text-align: start;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition: 
    color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    fill 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    filter 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    backdrop-filter 0.15s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-backdrop-filter 0.15s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const PrimaryButton = styled(Button)`
  background-image: linear-gradient(to top, var(--tw-gradient-stops));
  /* Setup gradient stops */
  --tw-gradient-from: #2563eb var(--tw-gradient-from-position);
  --tw-gradient-to: rgba(37, 99, 235, 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
  /* Overwrite the final gradient color if needed */
  --tw-gradient-to: #3e7aff var(--tw-gradient-to-position);
  
  padding: 0.375rem 0.75rem;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
  transition: opacity 3s cubic-bezier(0.4, 0, 0.2, 1);

  ${shadowStyles}

  &:hover {
  // background-image: linear-gradient(to top, var(--tw-gradient-stops));
    //  linear to top a little bit whiter
    background-image: linear-gradient(to top, #3e7aff var(--tw-gradient-from-position), #487ef7 var(--tw-gradient-to-position));
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const DefaultButton = styled(Button)`
  background-color: #fff;
  border: 1px solid #e2e8f0;
  color: black;
  padding: 0.375rem 0.75rem;

  ${shadowStyles}
  &:hover {
    border: 0.6px solid #000;
    // background-color: #f0f0f0;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const Spacer = styled(Space)`
  height: 80px;
  @media (max-width: 768px) {
    height: 95px !important;
    min-height: 95px !important;
  };
`;