import React from 'react';

// Ici je crée mon composant Header
const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Movies App</h1>
    </header>
  );
};

// Ici je lui ajoute un style parceque flemme de faire un fichier css :)
const styles = {
    header: {
    background: 'linear-gradient(107deg, rgba(245, 172, 87, 1) 0%, rgba(255, 131, 131, 1) 100%)',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    },
};

// J'exporte le composant pour une utilisation dans d'autres fichiers
export default Header;
