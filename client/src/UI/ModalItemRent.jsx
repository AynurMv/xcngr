import * as React from 'react';
import { DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ItemFormModal from './ItemFormModal';

export default function ModalItemRent({ input, setRent, setSend }) {
  return (
    <div
      style={{
        height: '100vh', width: '100%', backgroundColor: '#0000007e', position: 'fixed', top: '0', left: '0', zIndex: '100',
      }}
      onClick={(e) => {
        e.stopPropagation();
        setRent(false);
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
        <DialogTitle style={{ textAlign: 'center' }}>Заполните Заявку</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <ItemFormModal setRent={setRent} input={input} setSend={setSend} />
          </DialogContentText>
        </DialogContent>
      </div>
    </div>
  );
}
