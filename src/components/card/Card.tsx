import styled from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  width?: string;
}

export default function Card({ children, width = '250px' }: CardProps) {
  return <CardWrapper width={width}>{children}</CardWrapper>;
}

const CardWrapper = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  cursor: pointer;
`;
