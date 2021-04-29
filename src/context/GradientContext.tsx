import React, {createContext, useState} from 'react';

interface IColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: IColors;
  prevColors: IColors;
  setMainColors: (colors: IColors) => void;
  setPrevMainColors: (colors: IColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<IColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setprevColors] = useState<IColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: IColors) => {
    setColors(colors);
  };

  const setPrevMainColors = (colors: IColors) => {
    setprevColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors,
        prevColors,
        setMainColors,
        setPrevMainColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
