import { ReactNode, useCallback, useRef, useState } from "react";
import ModelsContext, { CarModel } from "../ModelsContext";

import { Container, OverlaysRoot, ModelOverlay } from "./styles";

interface ModelsWrapperProps {
  children: ReactNode;
}

export default function ModelsWrapper({ children }: ModelsWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [registeredModels, setRegisteredModels] = useState<CarModel[]>([]);
  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModels((state) => [...state, model]);
  }, []);
  const unregisterModel = useCallback((modelName: string) => {
    setRegisteredModels((state) =>
      state.filter((model) => model.modelName !== modelName)
    );
  }, []);
  const getModelByName = useCallback((modelName: string) => {
    return (
      registeredModels.find((item) => item.modelName === modelName) || null
    );
  }, []);

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map((item) => (
            <ModelOverlay key={item.modelName}>{item.overlayNode}</ModelOverlay>
          ))}
        </OverlaysRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  );
}
