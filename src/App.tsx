import { Card, CardContent, CardMedia, CardBottom } from 'components/card';
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
      </CardUIView>
    </AppWrapper>
  );
}

const AppWrapper = styled.main`
  padding: 50px;
`;

const CardUIView = styled.section``;
