import React from 'react';
import pageNotFound from '../../src/404/404.jpg'
import '../404/404.css'
import { Link } from 'react-router-dom';
export const ErrorPage = () => {
  return (
    <div className="container-404 ">
      <img
        className="container-404__image img-fluid"
        src={pageNotFound}
        alt="page 404"
      />
      <p className="container-404__paragraphe">
        Page non trouvée. Retourner à l' <Link to='/'>accueil</Link>
      </p>
    </div>
  );
}
