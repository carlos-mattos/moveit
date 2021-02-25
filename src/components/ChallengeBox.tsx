import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import { CountdownContext } from '../contexts/CountdownContext';
import style from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { completeChallenge, activeChallenge, resetChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSuceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <div className={style.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={style.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              onClick={handleChallengeFailed}
              className={style.challengeFailedButton}
            >
              Falhei
            </button>
            <button
              type="button"
              onClick={handleChallengeSuceeded}
              className={style.challengeSucceededButton}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={style.challengeNotActive}>
          <strong>Finalize um ciclo para receber um defafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
