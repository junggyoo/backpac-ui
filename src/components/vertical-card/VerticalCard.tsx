import styled from 'styled-components';

interface VerticalCardProps {
  width?: string;
  children: React.ReactNode;
}

export default function VerticalCard({
  width = '400px',
  children,
}: VerticalCardProps) {
  return <VerticalCardWrapper width={width}>{children}</VerticalCardWrapper>;
}

const VerticalCardWrapper = styled.div<{ width: string }>`
  display: flex;
  width: ${({ width }) => width};
  height: calc(${({ width }) => width} * 0.4);
`;
