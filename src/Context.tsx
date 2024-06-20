import React, { createContext, useState } from 'react';

const PlansContext = createContext<any>({});

const PlansProvider = ({ children }: any) => {
  const [plans, setPlans] = useState([]);

  return (
    <PlansContext.Provider value={{ plans, setPlans }}>
      {children}
    </PlansContext.Provider>
  );
};

export { PlansContext, PlansProvider };