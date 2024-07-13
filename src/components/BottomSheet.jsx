import { Button } from './Button';
import { TitleNavigation } from '../compositions/TitleNavigation';

const BottomSheet = ({ children, title, isLeft, isRight, onClickRight }) => {
  return (
    <>
      <div className="fixed z-40 h-full w-full bg-black opacity-30"></div>
      <div className="w-ful absolute bottom-0 z-50 w-full space-y-6 rounded-t-3xl bg-white p-4 pb-8">
        <div className="space-y-4">
          <div className="py-4">
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
        <Button type="primary" size="large" width="full">
          Save
        </Button>
      </div>
    </>
  );
};

export { BottomSheet };
