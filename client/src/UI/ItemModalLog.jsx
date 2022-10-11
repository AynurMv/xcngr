import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ItemFormModalLog from './ItemFormModalLog';

export default function ItemModalLog({ setItemlog, setRent }) {
  return (
    <div
      style={{
        height: '100vh', width: '100%', backgroundColor: '#00000099', position: 'fixed', top: '0', left: '0', zIndex: '100',
      }}
      onClick={(e) => {
        e.stopPropagation();
        setItemlog(false);
      }}
    >
      <div
        className="modalwindow"
        style={{
          width: '40%', height: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%', border: '3px solid rgba(0, 0, 0, 0.05)', borderRadius: '10px', backgroundColor: 'white',
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <DialogTitle style={{ textAlign: 'center' }}>Авторизация</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ItemFormModalLog setItemlog={setItemlog} setRent={setRent} />
          </DialogContentText>
        </DialogContent>
      </div>
    </div>
  );
}
