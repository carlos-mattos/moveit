import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import style from '../styles/components/LevelUpModal.module.css';

export default function levelUpModal() {
  const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <header>{level}</header>
        <strong>Pababéns!</strong>
        <p>Você alcançou um novo level.</p>
        <button type="button" onClick={closeLevelUpModal}>
          <img src="/icons/close.svg" alt="fechar modal" />
        </button>
      </div>
    </div>
  );
}
