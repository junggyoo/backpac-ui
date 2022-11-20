import { useState } from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, CardBottom } from 'components/card';
import { TextareaForm } from 'components/textarea-form';
import {
  HorizontalCard,
  HorizontalCardContent,
  HorizontalCardMedia,
} from 'components/horizontal-card';

export default function App() {
  const [text, setText] = useState('Default 상태입니다.');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  return (
    <AppWrapper>
      <CardUIView>
        <Card>
          <CardMedia src="assets/idus.png" alt="idus" />
          <CardContent label="Card Label" title="Card Title" />
          <CardBottom
            starPoint={3}
            text="Lorem ipsum dolor sit amet consectetur adipisicing"
          />
        </Card>
        <Card>
          <CardMedia src="assets/idus.png" alt="idus" />
          <CardContent label="Card Label" title="Card Title" />
        </Card>
        <HorizontalCard>
          <HorizontalCardMedia src="assets/idus.png" alt="idus" />
          <HorizontalCardContent
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            starPoint={3}
            bottomText="John Doe"
          />
        </HorizontalCard>
      </CardUIView>
      <InputFormUIView>
        <TextareaForm
          placeholder="내용을 입력해주세요."
          value={text}
          maxNumberOfText={500}
          onChange={handleTextChange}
        />
        <TextareaForm
          placeholder="내용을 입력해주세요."
          value="Disabled 상태입니다."
          maxNumberOfText={500}
          disabled
        />
        <TextareaForm
          placeholder="내용을 입력해주세요."
          value="Readonly 상태입니다."
          maxNumberOfText={500}
          readonly
        />
      </InputFormUIView>
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  padding: 50px;
`;

const CardUIView = styled.section`
  display: flex;
  gap: 20px;
`;

const InputFormUIView = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 100px;
`;
