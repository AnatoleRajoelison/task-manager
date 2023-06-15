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
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
      // Formatage de la chaîne de résultat donner
      let result = '';
      if (days > 0) {
        result += `${days} jour(s), `;
      }
      if (hours > 0) {
        result += `${hours} heure(s), `;
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
  