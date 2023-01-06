import { ReactNode } from "react";

import { ModelsWrapper, ModelSection } from "../Model";
import { DefaultOverlayContent } from "../DefaultOverlayContent";

import { Container } from "./styles";

interface PageProps {
  children: ReactNode;
}

export function Page({ children }: PageProps) {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Model One",
            // "Model Two",
            // "Model Three",
            // "Model Four",
            // "Model Five",
            // "Model Six",
            // "Model Seven",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  );
}
