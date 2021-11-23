import React from 'react';
import { useMediaQuery } from '@mui/material';

interface UIContextType {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  toggleDarkMode: () => void;
}

export const UIContext = React.createContext<UIContextType | null>(null);

interface Props {
  children?: React.ReactNode;
}

export const UIProvider = (props: Props) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = React.useState(prefersDarkMode);

  React.useEffect(() => {
    setDarkMode(prefersDarkMode);
  }, [prefersDarkMode]);

  const toggleDarkMode = React.useCallback(() => {
    setDarkMode(!darkMode);
  }, [darkMode]);

  return (
    <UIContext.Provider
      value={{
        setDarkMode,
        darkMode,
        toggleDarkMode,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};
