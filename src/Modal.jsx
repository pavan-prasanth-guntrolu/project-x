import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 600px;
  max-width: 100%;
  max-height: 90vh; /* Ensures modal content doesn't exceed viewport height */
  overflow-y: auto; /* Enables scrolling for content if it exceeds modal height */
  text-align: center;
`;

const CloseButton = styled.button`
  background: #f44;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
`;

const OptionList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const OptionItem = styled.li`
  margin: 10px 0;
  background: #eee;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #ddd;
  }
`;

const Answer = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

const CodeBlock = styled.pre`
  background: #f5f5f5;
  padding: 15px;
  border-radius: 5px;
  text-align: left;
  font-size: 14px;
  overflow-x: auto;
  white-space: pre-wrap;
  code {
    font-family: "Courier New", Courier, monospace;
    color: #333;
  }
`;

// eslint-disable-next-line react/prop-types
const Modal = ({
  isOpen,
  onClose,
  question,
  options,
  answer,
  codeSnippet = undefined,
}) => {
  if (!isOpen) return null;

  // Split the question text for proper rendering of the main question and code separately
  const [mainQuestion, code] = question.split("\n\n");

  return (
    <ModalOverlay>
      <ModalContent>
        {/* Display the main part of the question */}
        <h2>{mainQuestion}</h2>

        {/* Display the code snippet if provided */}
        {codeSnippet && (
          <CodeBlock>
            <code>{codeSnippet}</code>
          </CodeBlock>
        )}

        {/* Render the options or the answer */}
        <OptionList>
          {options && options.length > 0
            ? options.map((option, index) => (
                <OptionItem key={index}>
                  <p
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    {option}
                  </p>
                </OptionItem>
              ))
            : ""}
        </OptionList>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
