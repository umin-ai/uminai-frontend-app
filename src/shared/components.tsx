import { Text } from "@ap/app/public-library/components/styled";
import { FlexColumn, FlexRow, PrimaryButton } from "@ap/components/general";
import { useAskUAgentLLM } from "@ap/hooks/api-product.hooks";
import { useEffect, useState } from "react";
import styled from "styled-components";
/**
 * TypewriterText component that types out the given text character by character.
 * @param {string} text - The text to type out
 * @param {number} slowSpeed - The speed at which to type out the text initially
 * @param {number} fastSpeed - The speed at which to type out the text after slowDuration
 * @param {number} slowDuration - The duration to type out the text initially
 * @returns {JSX.Element}
 * **/
export const TypewriterText = ({ text, slowSpeed = 100, fastSpeed = 10, slowDuration = 2000 }: {
  text: string,
  slowSpeed?: number,
  fastSpeed?: number,
  slowDuration?: number
}) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    let slowIntervalId: NodeJS.Timeout;
    let fastIntervalId: NodeJS.Timeout;

    // Reset displayed text whenever the text prop changes
    setDisplayedText('');

    // Slow typing phase: update one character at a time
    slowIntervalId = setInterval(() => {
      if (i < text.length) {
        // Instead of concatenating single character which might cause race issues,
        // update the text using slice
        setDisplayedText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(slowIntervalId);
      }
    }, slowSpeed);

    // After slowDuration, switch to fast typing for the remainder
    const timeoutId = setTimeout(() => {
      clearInterval(slowIntervalId);
      fastIntervalId = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(fastIntervalId);
        }
      }, fastSpeed);
    }, slowDuration);

    // Cleanup intervals and timeout on unmount or when text changes
    return () => {
      clearInterval(slowIntervalId);
      clearInterval(fastIntervalId);
      clearTimeout(timeoutId);
    };
  }, [text, slowSpeed, fastSpeed, slowDuration]);

  return <span>{displayedText}</span>;
};

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

export const AskUAgentComponent = () => {
  const [question, setQuestion] = useState('');
  const { askUAgentLLMResult, onAskUAgentLLM, askUAgentLLMState } = useAskUAgentLLM();
  return (
    <FlexColumn className="w-full">
      <StyledOpenAIResponseTextArea className="mb-4">
        {askUAgentLLMState.isLoading && <Text>Loading...</Text>}
        {askUAgentLLMState.error && <Text>Error: {'Unable to create response'}</Text>}
        {askUAgentLLMState.isSuccess && askUAgentLLMResult ?
          <Text>
            <TypewriterText text={askUAgentLLMResult} />
          </Text> :
          <Text>{!askUAgentLLMState.isLoading && 'Results will appear here.'}</Text>
        }
      </StyledOpenAIResponseTextArea>
      <Text>Start query</Text>
      <FlexRow className="gap-2 w-full">
        <StyledLLMInput placeholder="Ask something"
          value={question}
          className="w-[90%]"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <PrimaryButton
          disabled={question.length === 0 || askUAgentLLMState.isLoading}
          className="w-[10%] text-sm text-center flex items-center justify-center"
          onClick={() => onAskUAgentLLM(question)}
        >Send</PrimaryButton>
      </FlexRow>
    </FlexColumn>
  )
}