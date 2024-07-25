import React, { createContext, useState } from 'react';

const PlansContext = createContext<any>({});

const PlansProvider = ({ children }: any) => {
  const [plans, setPlans] = useState([]);
  const [answer, setAnswer] = useState(0);
  const [ansCount, setAnsCount] = useState([]);
  const [info, setInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  return (
    <PlansContext.Provider value={{ plans, setPlans, answer, setAnswer, ansCount, setAnsCount, info, setInfo, userInfo, setUserInfo }}>
      {children}
    </PlansContext.Provider>
  );
};

export { PlansContext, PlansProvider };