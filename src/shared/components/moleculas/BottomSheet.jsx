import { TitleNavigation } from './TitleNavigation';

const BottomSheet = ({ children, title, isLeft, isRight, onClickRight }) => {
  return (
    <>
      <div className="fixed z-40 h-full w-full bg-black opacity-30"></div>
      <div className="absolute bottom-0 z-50 w-full space-y-6 rounded-t-3xl bg-white p-4 pb-8">
        <div className="space-y-4">
          <TitleNavigation
            isLeft={isLeft}
            isRight={isRight}
            onClickRight={onClickRight}
          >
            {title}
          </TitleNavigation>
        </div>
        {children}
      </div>
    </>
  );
};

export { BottomSheet };
