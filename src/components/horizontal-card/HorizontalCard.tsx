import styled from 'styled-components';

interface HorizontalCardProps {
  width?: string;
  children: React.ReactNode;
}

export default function HorizontalCard({
  width = '400px',
  children,
}: HorizontalCardProps) {
  return (
    <HorizontalCardWrapper width={width}>{children}</HorizontalCardWrapper>
  );
}

const HorizontalCardWrapper = styled.div<{ width: string }>`
  display: flex;
  width: ${({ width }) => width};
  height: calc(${({ width }) => width} * 0.4);
  cursor: pointer;
`;
