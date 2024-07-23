"use client";
import React, { useState, useEffect } from 'react';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 30 + 16;

  // Defina a data fixa aqui
  const fixedDate = new Date('2024-07-06T20:35:54'); // Altere a data e hora conforme necessário

  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (yesPressed) {
      timer = setInterval(() => {
        const now = new Date();
        const elapsedTime = Math.floor((now.getTime() - fixedDate.getTime()) / 1000);

        const days = Math.floor(elapsedTime / (3600 * 24));
        let remainingTime = elapsedTime % (3600 * 24);
        const hours = Math.floor(remainingTime / 3600);
        remainingTime = remainingTime % 3600;
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;

        setTimeElapsed({ days, hours, minutes, seconds });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [yesPressed]);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Não",
      "Tem certeza?",
      "E se eu pedir com carinho?",
      "Porfavor Porfavorzinho",
      "Eu te faço bóbó",
      "Te faço torta de frango",
      "AO AO AO, SE FALAR NÃO É VIADÃO",
      "NÃO :*(",
      "EU vou morrer",
      "morri",
      "c tá falando com meu fantasma",
      "ei baby, por favor",
      ":((((",
      "Só um pouquinho?",
      "Vai, só dessa vez!",
      "Eu te dou um abraço",
      "Por favorzinho com açúcar",
      "Eu prometo ser legal",
      "Eu lavo a louça",
      "Te faço um cafuné",
      "Pensa bem, hein!",
      "Você vai se arrepender",
      "Agora pode apertar sim :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold text-center">Tô Brincando amor, Feliz 1 mês de namoro, eu te amo mais que tudo ;))</div>
          <div id="timer">
            <b id="d">{timeElapsed.days}</b>...Dias... 
            <b id="h">{timeElapsed.hours.toString().padStart(2, '0')}</b>...Horas...
            <b id="m">{timeElapsed.minutes.toString().padStart(2, '0')}</b>...Minutos...
            <b id="s">{timeElapsed.seconds.toString().padStart(2, '0')}</b>...Segundos.
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl font-bold text-center">Você quer me dar o C*??</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Sim
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Não" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
