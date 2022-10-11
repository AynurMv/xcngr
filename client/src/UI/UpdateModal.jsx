import * as React from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './index.css';
import UpdateFormModal from './UpdateFormModal';

export default function UpdateModal({ setUpdate, argProduct }) {
  return (
    <div
      className="opasiti"

      // eslint-disable-next-line react/jsx-props-no-multi-spaces
      onClick={(e) => {
        e.stopPropagation();
        setUpdate(false);
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
        <DialogTitle style={{ textAlign: 'center' }}>Изменение товара</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <UpdateFormModal setUpdate={setUpdate} argProduct={argProduct} />
          </DialogContentText>
        </DialogContent>
      </div>
    </div>
  );
}
