import styled from 'styled-components';

interface CardMediaProps {
  src: string;
  alt: string;
}

export default function CardMedia({ src, alt }: CardMediaProps) {
  return <CardMediaWrapper src={src} alt={alt} />;
}

const CardMediaWrapper = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 4 / 4;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
