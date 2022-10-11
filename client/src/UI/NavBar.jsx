import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserAsync } from '../redux/actions/userAction';
import './index.css';

export default function Navbar({
  setLogActive, setRegActive, setAddProdActive, setNight, night,
}) {
  const user = useSelector((state) => state.user);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const dispatch = useDispatch();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const checkLog = () => {
    setLogActive(true);
    setRegActive(false);
  };

  const checkReg = () => {
    setLogActive(false);
    setRegActive(true);
  };
  return (
    <>
      <AppBar style={night === true ? ({ borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem', backgroundColor: '#08233c' }) : ({ borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' })} position="sticky" color="">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AllInclusiveIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#3277ff' }} />
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography
                className="logoText"
                // style={{ textDecoration: 'none', color: '#17494D' }}
                variant="h6"
                noWrap
                component="a"
                // link="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  letterSpacing: '.3rem',
                  textDecoration: 'none',
                }}
              >
                ExChanger.
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem>
                  <Typography textAlign="center">Main</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {/* <AllInclusiveIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#3277ff' }} /> */}
            </Typography>
            {!user.id ? (
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  sx={{ my: 2, color: '#3277ff;', display: 'block' }}
                  onClick={checkReg}
                >
                  Регистрация
                </Button>
                <Button
                  sx={{ my: 2, color: '#3277ff', display: 'block' }}
                  onClick={checkLog}
                >
                  Авторизация
                </Button>
                <Link className="lint-prodyct" to="/allproducts">
                  <Button
                    sx={{ my: 2, color: '#3277ff', display: 'block' }}
                  >
                    Все товары
                  </Button>
                </Link>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  sx={{ my: 2, color: '#3277ff', display: 'block' }}
                  onClick={() => setAddProdActive(true)}
                >
                  Добавить объявление
                </Button>
                <Link className="lint-prodyct" to="/allproducts">
                  <Button
                    sx={{ my: 2, color: '#3277ff', display: 'block' }}
                  >
                    Все товары
                  </Button>
                </Link>
              </Box>
            ) }
            {night === true ? (
              <Button
                sx={{ my: 2, display: 'block' }}
                onClick={() => setNight(false)}
                s
              >
                <img style={{ width: '2rem' }} src="../img/17_icon-icons.com_73808.svg" alt="..." />
              </Button>
            ) : (
              <Button
                sx={{ my: 2, display: 'block' }}
                onClick={() => setNight(true)}
                s
              >
                <img style={{ width: '2rem' }} src="../img/sun_102839.svg" alt="..." />
              </Button>
            )}
            {user.id ? (
              <>
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={`http://localhost:3001/images/${user.photo}`} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <Link to="/profile" style={{ textDecoration: 'none', color: '#3277ff' }}>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Личный кабинет</Typography>
                      </MenuItem>
                    </Link>
                    <Link to="/settings" style={{ textDecoration: 'none', color: '#3277ff' }}>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" value="1">Настройки профиля</Typography>
                      </MenuItem>
                    </Link>
                    <Link to="/" onClick={() => dispatch(logoutUserAsync())} style={{ textDecoration: 'none', color: '#3277ff' }}>
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">Выйти</Typography>
                      </MenuItem>
                    </Link>
                  </Menu>
                </Box>
              </>
            ) : (
              <Box sx={{ flexGrow: 0 }} />
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
