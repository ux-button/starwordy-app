import { randomWords } from '../../../mocksData';
import { useReducer, useState } from 'react';
import { MenuTitle } from '../../../shared/components/moleculas/MenuTitle';
import { Button } from '../../../shared/components/atoms/Button';
import { Icon } from '../../../shared/components/atoms/icon/Icon';
import { WordList } from '../components/WordList';
import { stateMachine, initialState } from '../../../state-machine';
import { BottomSheet } from '../../../shared/components/moleculas/BottomSheet';
import { InputText } from '../../../shared/components/atoms/input-text/InputText';

const WordsListPage = () => {
  const [words, setWords] = useState(randomWords);
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

  return (
    <div className="h-screen bg-mono-200">
      {state.isModal ? (
        <BottomSheet
          onClickRight={hanleModalClose}
          title="Add new word"
          isLeft={false}
          isRight={true}
        >
          <div className="space-0">
            <InputText title="Word" placeholder="Enter word" />
            <InputText title="Definition" placeholder="Enter definition" />
          </div>
          <section className="flex justify-between">
            <Button type="ghost" size="large" width="full">
              Save
            </Button>
            <Button type="primary" size="large" width="full">
              <Icon type="plus" style="size-6 fill-black" />
              One more
            </Button>
          </section>
        </BottomSheet>
      ) : null}

      <section className="space-y-4 px-4 py-4">
        <MenuTitle title="Travel" />
        <section className="flex items-center gap-2">
          <Button type="secondary" size="main" onClick={hanleModalOpen}>
            <Icon type="plus" style="size-6" /> Add word
          </Button>
          <Button type="ghost" size="main">
            <Icon type="star" style="size-6" /> Add to favorite
          </Button>
        </section>
        <section>
          <Button type="primary" size="large" width="full">
            Learn words
          </Button>
        </section>
      </section>
      <section className="bg-mono-200 px-2">
        <WordList words={words} />
      </section>
    </div>
  );
};

export { WordsListPage };
