import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Ucant({
  cheker, setChecker, argProduct, setItemreg, setItemlog,
}) {
  const { name } = argProduct;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setChecker(false);
  };
  const regOpen = () => {
    setChecker(false);
    setItemreg(true);
  };
  const logOpen = () => {
    setChecker(false);
    setItemlog(true);
  };
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={cheker}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {`Хотите взять в аренду ${name}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Аренда доступна только зарегестрированым или авторизированым пользователям.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={logOpen}>
            Войти
          </Button>
          <Button style={{ textDecoration: 'none' }} onClick={regOpen} autoFocus>
            Зарегистрироваться
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
