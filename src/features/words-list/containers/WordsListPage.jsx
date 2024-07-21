// Shared components
import { MenuTitle } from '../../../shared/components/moleculas/MenuTitle';
import { Button } from '../../../shared/components/atoms/Button';
import { Icon } from '../../../shared/components/atoms/icon/Icon';

// Words objects
import { WordList } from '../components/WordList';
import { WordAddModal } from '../components/WordAddModal';
import { useWordsListPage } from './useWordsListPage';

const WordsListPage = () => {
  const { state, hanleModalOpen, hanleModalClose } = useWordsListPage();

  return (
    <div className="h-screen bg-mono-200">
      <WordAddModal state={state} hanleModalClose={hanleModalClose} />
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
        <WordList words={state.words} />
      </section>
    </div>
  );
};

export { WordsListPage };
