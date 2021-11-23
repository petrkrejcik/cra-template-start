import { routes } from 'components/Router/routes';
import { useUI } from 'components/UIContext/uiHooks';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useUI();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Link to={routes.homepage} style={{ textDecoration: 'none', color: 'inherit' }}>
          <Typography variant="h6" color="inherit">
            My App
          </Typography>
        </Link>
        <Box flexGrow={1} />
        <IconButton sx={{ color: darkMode ? 'text.primary' : 'text.primary' }} onClick={toggleDarkMode}>
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
