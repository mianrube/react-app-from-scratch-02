import { CssBaseline, ThemeProvider } from '@mui/material';

import { darkTheme, lightTheme } from './theme';
import { ThemeModeEnum } from './types';

export const App = () => {
  // Por ahora establecemos el tema de forma "manual"
  // hasta que lo obtengamos del store con un selector
  const themeMode = ThemeModeEnum.LIGHT;

  return (
    <ThemeProvider theme={themeMode === ThemeModeEnum.LIGHT ? lightTheme : darkTheme}>
      <CssBaseline />
      <div>React App From Scratch</div>
    </ThemeProvider>
  );
};
