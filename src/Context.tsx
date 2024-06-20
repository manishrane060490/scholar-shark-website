import React, { createContext, useState } from 'react';

const PlansContext = createContext<any>({});

const PlansProvider = ({ children }: any) => {
  const [plans, setPlans] = useState([]);
  const [answer, setAnswer] = useState(0);
  const [ansCount, setAnsCount] = useState([]);

  return (
    <PlansContext.Provider value={{ plans, setPlans, answer, setAnswer, ansCount, setAnsCount }}>
      {children}
    </PlansContext.Provider>
  );
};

export { PlansContext, PlansProvider };