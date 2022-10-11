import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Telega({
  btn, setBtn, name, telega,
}) {
  console.log(name, telega);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setBtn(false);
  };
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={btn}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          Вы хотите написать в Telegram?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {`Вы хотите написать ${name}у в Telegram?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Отменить
          </Button>
          <a style={{ textDecoration: 'none' }} href={`https://t.me/${telega}`}>
            <Button style={{ textDecoration: 'none' }} onClick={handleClose} autoFocus>
              Перейти в телеграм
            </Button>

          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}
