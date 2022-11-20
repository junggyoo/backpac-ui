import styled from 'styled-components';

interface HorizontalCardMedioProps {
  src: string;
  alt: string;
}

export default function HorizontalCardMedia({
  src,
  alt,
}: HorizontalCardMedioProps) {
  return <HorizontalCardMedioWrapper src={src} alt={alt} />;
}

const HorizontalCardMedioWrapper = styled.img`
  display: block;
  width: 40%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
