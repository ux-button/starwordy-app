import { WordCell } from './WordCell';

const WordList = ({ words }) => {
  return (
    <section>
      <div className="p-3 font-stwRegular text-t-large text-mono-600">
        {words.length} words
      </div>
      <div>
        {words.map((word) => {
          return (
            <WordCell
              key={word.id}
              word={word.word}
              definition={word.definition}
              isRaised={word.isRaised}
              isCompleted={word.isCompleted}
              isStarred={word.isStarred}
            />
          );
        })}
      </div>
    </section>
  );
};

export { WordList };
