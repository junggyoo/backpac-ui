import styled from 'styled-components';

interface DividerProps {
  width?: string;
  height?: string;
  betweenMargin?: string;
  Horizontal?: boolean;
}

export default function Divider({
  width = '100%',
  height = '1px',
  betweenMargin = '10px',
  Horizontal = false,
}: DividerProps) {
  return (
    <DividerWrapper
      width={width}
      height={height}
      betweenMargin={betweenMargin}
      Horizontal={Horizontal}
    />
  );
}

const DividerWrapper = styled.div<DividerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ betweenMargin, Horizontal }) =>
    Horizontal ? `0 ${betweenMargin}` : `${betweenMargin} 0`};
  background-color: lightgray;
`;
