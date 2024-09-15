import { createContext, useContext } from "react";

const CamperContext = createContext(null);

export function CamperProvider({ children, camperData }) {
  return (
    <CamperContext.Provider value={camperData}>
      {children}
    </CamperContext.Provider>
  );
}

export function useCamper() {
  return useContext(CamperContext);
}
