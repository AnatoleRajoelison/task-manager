import { useEffect, useState } from 'react';

const useLocalStorage = () => {
  const [value, setValue] = useState(() => {
    // C'est pour récupérer la valeur depuis le Local Storage ici
  });

  useEffect(() => {
    // C'est pour mettre à jour la valeur dans le Local Storage ici
  }, [value]);

  return [value, setValue];
};

export { useLocalStorage };

