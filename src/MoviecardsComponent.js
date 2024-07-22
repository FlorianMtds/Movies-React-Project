import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importation de FontAwesome pour les icônes - Pas oublié le npm install
import './Moviecards.css'; // Importation des styles CSS pour le composant

// Ci dessous on créer les cards pour les films comme si on était dans du HTML mais on y insère les infos stockées dans Components.js
export default function MovieCard({ movie }) {
  return (
    <div className="card">
      {/* Conteneur de l'image avec le bouton de lecture */}
      <div className="imageContainer">
        {/* Affichage de l'image du film */}
        <img src={movie.thumbnail_url} alt={movie.title} className="thumbnail" />
        {/* Bouton de lecture superposé sur l'image */}
        <a
          href={movie.teaser_url} 
          target="_blank" 
          className="playButton"
        >
          {/* Icône de lecture */}
          <i className="fas fa-play"></i>
        </a>
      </div>
      {/* Titre du film */}
      <h2>{movie.title}</h2>
      {/* Informations sur l'année de sortie */}
      <p><strong>Release Year:</strong> {movie.release_year}</p>
      {/* Informations sur les revenus du film */}
      <p><strong>Revenues:</strong> ${movie.revenues} million</p>
      {/* Liste des réalisateurs */}
      <p><strong>Directors:</strong> {movie.directors.join(', ')}</p> 
      {/* Les joins servent à concatener le tableau et donc à ajouter une virgule après chaque élément */}
      {/* Liste des producteurs */}
      <p><strong>Producers:</strong> {movie.productors.join(', ')}</p>
      {/* Liste des catégories */}
      <p><strong>Categories:</strong> {movie.categories.join(', ')}</p>
    </div>
  );
}
