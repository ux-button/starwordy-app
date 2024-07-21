import { useReducer } from 'react';
import { stateMachine, initialState } from './wordsPageSlice';

const useWordsListPage = () => {
  const [state, dispatch] = useReducer(stateMachine, initialState);

  const hanleModalOpen = () => {
    dispatch({
      type: 'openModal',
    });
  };

  const hanleModalClose = () => {
    dispatch({
      type: 'closeModal',
    });
  };

  return { state, hanleModalOpen, hanleModalClose };
};

export { useWordsListPage };
