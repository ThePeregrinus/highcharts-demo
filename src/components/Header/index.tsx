import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const namePages = ['View mode', 'Settings'];
const PagesConfig = {
  'View mode': 'natlex-task/',
  Settings: 'natlex-task/settings',
};

export const Header = () => {
  return (
    <AppBar position="static" sx={{ mb: 5 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
            {namePages.map((page) => (
              <Button key={page} sx={{ color: 'white', display: 'block' }}>
                <Link
                  to={PagesConfig[page as keyof typeof PagesConfig]}
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
