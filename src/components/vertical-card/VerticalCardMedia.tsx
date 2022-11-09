import styled from 'styled-components';

interface VerticalCardMedioProps {
  src: string;
  alt: string;
}

export default function VerticalCardMedia({
  src,
  alt,
}: VerticalCardMedioProps) {
  return <VerticalCardMedioWrapper src={src} alt={alt} />;
}

const VerticalCardMedioWrapper = styled.img`
  display: block;
  width: 40%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;
