import React from 'react';
import MovieCard from './MoviecardsComponent.js'; // Assurez-vous que le chemin est correct
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importation des icônes
import './Moviecards.css'; // Assurez-vous que le fichier CSS est correct

// Composant fonctionnel pour afficher une liste de films
export default function MainComponent({ movies }) {
  // Debugging: vérifier les données reçues
  console.log('Movies prop:', movies);

  // Vérifie si 'movies' est un tableau car j'ai eu un bug qui ne m'afffichait rien à cause de ça
  if (!Array.isArray(movies) || movies.length === 0) {
    return <p>No movies available</p>; // Affiche un message si aucun film n'est disponible
  }

  return (
    <main style={styles.main}>
      {movies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </main>
  );
}

const styles = {
  main: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    gap: '20px',
    boxSizing: 'border-box',
  },
};
