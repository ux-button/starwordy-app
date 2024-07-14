import { randomWords } from '../mocksData';
import { useState } from 'react';
import { MenuTitle } from '../compositions/MenuTitle';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { WordCell } from '../components/WordCell';

const WordsInGroupScreen = () => {
  const [words, setWords] = useState(randomWords);

  return (
    <div className="h-screen space-y-4 bg-mono-200 pt-4">
      <MenuTitle title="Travel" />
      <section className="flex items-center gap-2 px-4">
        <Button type="secondary" size="main">
          <Icon type="plus" style="size-6" /> Add word
        </Button>
        <Button type="ghost" size="main">
          <Icon type="star" style="size-6" /> Add to favorite
        </Button>
      </section>
      <section className="px-2">
        <WordCell
          word="Presentation"
          definition="Презентация"
          isRaised={false}
          isCompleted={false}
          isStarred={false}
        />
        <WordCell
          word="Presentation"
          definition="Презентация"
          isRaised={true}
          isCompleted={false}
          isStarred={false}
        />
        <WordCell
          word="Presentation"
          definition="Презентация"
          isRaised={false}
          isCompleted={true}
          isStarred={false}
        />
        <WordCell
          word="Presentation"
          definition="Презентация"
          isRaised={false}
          isCompleted={false}
          isStarred={true}
        />
      </section>
    </div>
  );
};

export { WordsInGroupScreen };
