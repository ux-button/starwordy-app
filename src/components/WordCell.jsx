import { Icon } from './Icon';

const WordCell = ({ word, definition, isStarred, isRaised, isCompleted }) => {
  return (
    <div
      className={
        !isRaised && !isCompleted && !isStarred
          ? 'rounded-3xl bg-white px-4 py-5'
          : isRaised && !isCompleted && !isStarred
            ? 'rounded-3xl bg-lime-200 px-4 py-5'
            : !isRaised && isCompleted && !isStarred
              ? 'rounded-3xl bg-canary-300 px-4 py-5'
              : !isRaised && !isCompleted && isStarred
                ? 'rounded-3xl bg-daisy-200 px-4 py-5'
                : null
      }
    >
      <div className="flex justify-between">
        <section>
          <div className="font-stwRegular text-t-default text-whisper-900 opacity-70">
            {definition}
          </div>
          <div className="font-stwSemibold text-t-subsection text-black">
            {word}
          </div>
        </section>
        <section className="flex items-center justify-between gap-3">
          {!isRaised && !isCompleted && !isStarred ? (
            <>
              <Icon type="rise" style="size-8 fill-whisper-900 opacity-20" />
              <Icon type="trash" style="size-8 fill-whisper-900 opacity-10" />
            </>
          ) : isRaised && !isCompleted && !isStarred ? (
            <>
              <Icon
                type="decrease"
                style="size-8 fill-whisper-900 opacity-20"
              />
              <Icon type="trash" style="size-8 fill-whisper-900 opacity-10" />
            </>
          ) : !isRaised && isCompleted && !isStarred ? (
            <>
              <Icon type="tick" style="size-8 fill-lime-500" />
              <Icon type="trash" style="size-8 fill-whisper-900 opacity-10" />
            </>
          ) : !isRaised && !isCompleted && isStarred ? (
            <>
              <Icon type="star" style="size-8 fill-daisy-400" />
              <Icon type="trash" style="size-8 fill-whisper-900 opacity-10" />
            </>
          ) : null}
        </section>
      </div>
    </div>
  );
};

export { WordCell };
