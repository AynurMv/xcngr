import React from 'react';
import ModalAddProd from '../../UI/ModalAddProd';
import ModalLog from '../../UI/ModalLog';
import ModalRegistration from '../../UI/ModalRegistration';

export default function Page404({
  setAddProdActive, addProdActive, regActive, setRegActive, logActive, setLogActive,
}) {
  return (
    <>
      <div className="fourfour">
        <></>
      </div>
      {addProdActive === true ? (
        <ModalAddProd setAddProdActive={setAddProdActive} />
      ) : (
        <></>
      )}
      {regActive === true ? (
        <ModalRegistration setRegActive={setRegActive} />
      ) : (
        <></>
      )}
      {logActive === true ? (
        <ModalLog setLogActive={setLogActive} />
      ) : (
        <></>
      )}

    </>
  );
}
