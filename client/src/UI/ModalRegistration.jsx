import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormModalReg from './FormModalReg';

export default function ModalRegistration({ setRegActive }) {
  return (
    <div
      style={{
        height: '100vh', width: '100%', backgroundColor: '#0000006e', position: 'fixed', top: '0', left: '0', zIndex: '100',
      }}
      onClick={(e) => {
        e.stopPropagation();
        setRegActive(false);
      }}
    >
      <div
        className="modalwindow"
        style={{
          width: '40%', height: '65%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%', border: '3px solid rgba(0, 0, 0, 0.05)', borderRadius: '10px', backgroundColor: 'white', opacity: '1',
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DialogTitle style={{ textAlign: 'center' }}>Регистрация</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <FormModalReg setRegActive={setRegActive} />
          </DialogContentText>
        </DialogContent>
      </div>
    </div>
  );
}
