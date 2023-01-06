import { ReactNode } from "react";

import { Container, Heading, Buttons } from "./styles";

interface DefaultOverlayContentProps {
  // children: ReactNode;
  label: string;
  description: string;
}

export function DefaultOverlayContent({
  // children,
  label,
  description,
}: DefaultOverlayContentProps) {
  return (
    <Container>
      <Heading>
        <h1>{label}</h1>
        <h2>{description}</h2>
      </Heading>

      <Buttons>
        <button>Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  );
}
