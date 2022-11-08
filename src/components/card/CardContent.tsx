import styled from 'styled-components';

interface CardContentProps {
  label: string;
  title: string;
}

export default function CardContent({ label, title }: CardContentProps) {
  return (
    <CardContentWrapper>
      <ContentTitleWrapper>
        <Label>{label}</Label>
        <Title>{title}</Title>
      </ContentTitleWrapper>
      <HilightWrapper>
        <Hilight>Hilight</Hilight>
        <HilightText>Cross Out</HilightText>
      </HilightWrapper>
    </CardContentWrapper>
  );
}

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top: none;
  background-color: #f7f7f7;

  &:not(:last-child) {
    border-radius: 0;
    border-bottom: none;
  }
`;

const ContentTitleWrapper = styled.div`
  height: 80px;
`;

const Label = styled.label`
  font-size: 12px;
  color: gray;
`;

const Title = styled.h3`
  margin-top: 7px;
  font-size: 16px;
`;

const HilightWrapper = styled.div``;

const Hilight = styled.span`
  margin-right: 5px;
  font-size: 14px;
  color: red;
`;

const HilightText = styled.span`
  font-size: 10px;
  color: gray;
  text-decoration: line-through;
`;
