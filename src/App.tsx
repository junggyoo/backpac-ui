import { Card, CardContent, CardMedia, CardBottom } from 'components/card';
import {
  VerticalCard,
  VerticalCardContent,
  VerticalCardMedia,
} from 'components/vertical-card';
import styled from 'styled-components';

export default function App() {
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
