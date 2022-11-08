import styled from 'styled-components';

interface DividerProps {
  width?: string;
  height?: string;
  betweenMargin?: string;
  vertical?: boolean;
}

export default function Divider({
  width = '100%',
  height = '1px',
  betweenMargin = '10px',
  vertical = false,
}: DividerProps) {
  return (
    <DividerWrapper
      width={width}
      height={height}
      betweenMargin={betweenMargin}
      vertical={vertical}
    />
  );
}

const DividerWrapper = styled.div<DividerProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ betweenMargin, vertical }) =>
    vertical ? `0 ${betweenMargin}` : `${betweenMargin} 0`};
  background-color: lightgray;
`;
