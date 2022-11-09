import { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

interface TextareaFormProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  maxNumberOfText?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSave?: () => void;
}

export default function TextareaForm({
  value = '',
  placeholder,
  disabled = false,
  readonly = false,
  maxNumberOfText = 100,
  onSave,
  onChange,
}: TextareaFormProps) {
  const initialValue = useRef<string>(value);

  const [isChangedInitialValue, setIsChangedInitialValue] = useState(false);
  const [restNumberOfText, setRestNumberOfText] = useState(
    maxNumberOfText - value.length
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
      setRestNumberOfText(maxNumberOfText - e.target.value.length);
      if (initialValue && initialValue.current !== e.target.value) {
        setIsChangedInitialValue(true);
      } else {
        setIsChangedInitialValue(false);
      }
    }
  };
  return (
    <TextareaFormWrapper>
      <TextareaWrapper>
        <Textarea
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          maxLength={maxNumberOfText}
          onChange={handleChange}
        />
        <TextCount>{restNumberOfText}</TextCount>
      </TextareaWrapper>
      {isChangedInitialValue && (
        <SaveButton type="button" onClick={onSave}>
          Save
        </SaveButton>
      )}
    </TextareaFormWrapper>
  );
}

const TextareaFormWrapper = styled.form`
  display: flex;
  width: 100%;
`;

const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Textarea = styled.textarea<{ disabled: boolean; readOnly: boolean }>`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 15px;
  border: 1px solid lightgray;
  border-radius: 3px;
  outline-color: #81c6e8;
  resize: none;

  ${({ disabled }) =>
    disabled &&
    css`
      color: #ff7d7d;
      border: 1px solid lightgray;
      opacity: 0.7;
    `}

  ${({ readOnly }) =>
    readOnly &&
    css`
      outline: none;
      border: 1px solid black;
    `}
`;

const TextCount = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 12px;
  color: lightgray;
`;

const SaveButton = styled.button`
  width: 100px;
  height: 100px;
  margin-left: 5px;
  padding: 5px 10px;
  font-size: 14px;
  color: #81c6e8;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 5px;
  cursor: pointer;
`;
