import { ReactNode, useEffect, useRef } from "react";
import useModel from "../useModel";

import { Container } from "./styles";

interface ModelSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  // children: ReactNode;
  modelName: string;
  overlayNode: ReactNode;
}

export default function ModelSection({
  children,
  modelName,
  overlayNode,
  ...props
}: ModelSectionProps) {
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      });
    }
  }, []);

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
}
