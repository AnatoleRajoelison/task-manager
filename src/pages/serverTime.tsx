import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';

const ServerTimePage: NextPage<{ serverTime: number }> = ({ serverTime }) => {
    const [timeDiff, setTimeDiff] = useState<number>(0);
  
    useEffect(() => {
      const browserTime = new Date().getTime();
      const diff = browserTime - serverTime;
      setTimeDiff(diff);
    }, [serverTime]);
  
    // Fonction pour formater la différence en jours, heures, minutes et secondes
    const formatTimeDiff = (diff: number): string => {
      // Calculs pour les jours, heures, minutes et secondes
      const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
      const heures = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      // Formatage de la chaîne de résultat donner
      let result = '';
      if (jours > 0) {
        result += `${jours} jour(s), `;
      }
      if (heures > 0) {
        result += `${heures} heure(s), `;
      }
      if (minutes > 0) {
        result += `${minutes} minute(s), `;
      }
      result += `${seconds} seconde(s)`;
  
      return result;
    };
  
    return (
      <div>
        <h1>Heure du serveur et différence avec l'heure du navigateur</h1>
        <p>Heure du serveur : {new Date(serverTime).toLocaleString()}</p>
        <p>Différence : {formatTimeDiff(timeDiff)}</p>
      </div>
    );
  };
  
  export default ServerTimePage;
  