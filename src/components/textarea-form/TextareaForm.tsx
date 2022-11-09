import { useRef, useState } from 'react';
import styled from 'styled-components';

interface TextareaFormProps {
  value: string;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextareaForm({
  value,
  placeholder,
  disabled,
  readonly,
  onChange,
}: TextareaFormProps) {
  const initialValue = useRef<string>(value);
  const [isChangedInitialValue, setIsChangedInitialValue] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
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
          onChange={handleChange}
        />
        <TextCount>{value?.length || 0}</TextCount>
      </TextareaWrapper>
      {isChangedInitialValue && <SaveButton type="button">Save</SaveButton>}
    </TextareaFormWrapper>
  );
}

const TextareaFormWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  resize: none;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  outline-color: #7de5ed;
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
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
`;
