import { CardStarPoint } from 'components/card';
import Divider from 'components/divider';
import styled from 'styled-components';

interface VerticalCardContentProps {
  title: string;
  description: string;
  starPoint?: number;
  bottomText?: string;
}

export default function VerticalCardContent({
  title,
  description,
  starPoint,
  bottomText,
}: VerticalCardContentProps) {
  return (
    <VerticalCardContentWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <BottomWrapper>
        <CardStarPoint starPoint={starPoint} />
        {bottomText && (
          <>
            <Divider width="2px" height="100%" vertical />
            <BottomText>{bottomText}</BottomText>
          </>
        )}
      </BottomWrapper>
    </VerticalCardContentWrapper>
  );
}

const VerticalCardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  padding: 20px;
  background-color: #f7f7f7;
`;

const Title = styled.h3`
  width: 100%;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Description = styled.p`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  color: gray;
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BottomText = styled.span`
  color: gray;
  font-size: 14px;
`;
