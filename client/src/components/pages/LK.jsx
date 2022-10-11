import React from 'react';
import { Link } from 'react-router-dom';

export default function LK() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '30rem' }}>
        <div className="photo">
          <img
            src="https://www.learnrussianineu.com/wp-content/uploads/2018/08/Cheburashka-ru.jpg"
            alt=""
            className="avatarImg"
          />
          <div style={{ marginLeft: '1rem' }}><h4>Чебурашка Алексеевич</h4></div>
          <div>
            <h5 style={{ marginLeft: '1rem' }}>Rate: 5.0</h5>
          </div>
        </div>
        <div className="linkList" style={{ margin: '1rem' }}>
          <div><Link to="/">Мои товары</Link></div>
          <div><Link to="/1">Мои отзывы</Link></div>
          <div><Link to="/1">Любимое</Link></div>
          <div><Link to="/1">Мои сообщения</Link></div>
        </div>
      </div>
      <div style={{ width: '100%', margin: '1rem' }}>
        <nav className="navbar navbar-expand-lg bg-light">
          <div
            className="navbar-nav"
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Link className="nav-link" to="/">Active</Link>
            <Link className="nav-link" to="/">Archive</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
