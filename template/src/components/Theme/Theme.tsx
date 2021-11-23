import React from 'react';
import { useUI } from 'components/UIContext/uiHooks';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

/* eslint-disable-next-line */
export interface ThemeProps {
  children: React.ReactNode;
}

export function Theme(props: ThemeProps) {
  const mode = useUI().darkMode ? 'dark' : 'light';

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

export default Theme;
