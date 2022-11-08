import styled, { css } from 'styled-components';
import CardStarPoint from './CardStarPoint';

interface CardBottomProps {
  starPoint?: number;
  text?: string;
}

export default function CardBottom({ starPoint, text }: CardBottomProps) {
  return (
    <CardBottomWrapper text={text}>
      <CardStarPoint starPoint={starPoint} />
      {text && <BottomText>{text}</BottomText>}
    </CardBottomWrapper>
  );
}

const CardBottomWrapper = styled.div<CardBottomProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  height: 65px;
  border: 1px solid #e5e5e5;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #f7f7f7;

  ${({ text }) =>
    text &&
    css`
      justify-content: space-between;
    `}
`;

const BottomText = styled.p`
  width: 100%;
  font-size: 14px;
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
