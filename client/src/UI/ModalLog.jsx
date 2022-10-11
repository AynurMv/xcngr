/* eslint-disable no-undef */
import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormModalLog from './FormModalLog';
import './index.css';
// eslint-disable-next-line import/order

export default function ModalLog({ setLogActive }) {
  // style={night === true ? ({ backgroundColor: 'white', color: 'white', height: '100vh' }) : ({ backgroundColor: '#202124', color: 'white', height: '100vh' })}
  return (
    <div
      className="opasiti"

      // eslint-disable-next-line react/jsx-props-no-multi-spaces
      onClick={(e) => {
        e.stopPropagation();
        setLogActive(false);
      }}
    >
      <div
        className="modalwindow"
        style={{
          width: '40%', height: '60%', marginLeft: 'auto', marginRight: 'auto', marginTop: '10%', border: '3px solid rgba(0, 0, 0, 0.05)', borderRadius: '10px', backgroundColor: 'white',
        }}
        onClick={(e) => {
          e.stopPropagation();
          setModel(true);
        }}
      >
        <DialogTitle style={{ textAlign: 'center' }}>Авторизация</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <FormModalLog setLogActive={setLogActive} />
          </DialogContentText>
        </DialogContent>
      </div>
    </div>
  );
}
