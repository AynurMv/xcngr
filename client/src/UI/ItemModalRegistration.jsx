import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ItemFormModalReg from './ItemFormModalReg';

export default function ItemModalRegistration({ setItemreg, setRent }) {
  return (
    <div
      style={{
        height: '100vh', width: '100%', backgroundColor: '#00000099', position: 'fixed', top: '0', left: '0', zIndex: '100',
      }}
      onClick={(e) => {
        e.stopPropagation();
        setItemreg(false);
      }}
    >
      <div
        className="modalwindow"
        style={{
          width: '40%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%', border: '3px solid rgba(0, 0, 0, 0.05)', borderRadius: '10px', backgroundColor: 'white', opacity: '1',
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DialogTitle style={{ textAlign: 'center' }}>Регистрация</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ItemFormModalReg setItemreg={setItemreg} setRent={setRent} />
          </DialogContentText>
        </DialogContent>
      </div>
    </div>
  );
}
