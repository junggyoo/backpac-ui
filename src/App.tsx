import { useState } from 'react';
import styled from 'styled-components';
import { Card, CardContent, CardMedia, CardBottom } from 'components/card';
import { TextareaForm } from 'components/textarea-form';
import {
  VerticalCard,
  VerticalCardContent,
  VerticalCardMedia,
} from 'components/vertical-card';

export default function App() {
  const [text, setText] = useState('초기값이 있을 수 있습니다.');

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
        <VerticalCard>
          <VerticalCardMedia src="assets/idus.png" alt="idus" />
          <VerticalCardContent
            title="Lorem ipsum dolor sit amet"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            starPoint={3}
            bottomText="John Doe"
          />
        </VerticalCard>
      </CardUIView>
      <InputFormUIView>
        <TextareaForm
          placeholder="내용을 입력해주세요."
          value={text}
          maxNumberOfText={500}
          onChange={handleTextChange}
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

const InputFormUIView = styled(CardUIView)`
  margin-top: 100px;
`;
