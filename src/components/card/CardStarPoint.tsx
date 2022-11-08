import styled from 'styled-components';

interface CardStarPointProps {
  starPoint?: number;
}

export default function CardStarPoint({ starPoint = 0 }: CardStarPointProps) {
  const starPointArray = Array.from(
    { length: 5 },
    () => starPoint >= 1 && starPoint--
  );

  return (
    <CardStarPointWrapper>
      {starPointArray.map((point, idx) => (
        <StarPoint key={idx} isPoint={point} />
      ))}
    </CardStarPointWrapper>
  );
}

const CardStarPointWrapper = styled.div``;

const StarPoint = styled.span<{ isPoint: number | boolean }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ isPoint }) => (isPoint ? 'orange' : 'lightgray')};

  &:not(:last-child) {
    margin-right: 5px;
  }
`;
