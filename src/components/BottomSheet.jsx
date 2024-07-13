import { Input } from './Input';
import { Button } from './Button';
import { TitleNavigation } from '../compositions/TitleNavigation';

const BottomSheet = ({ children, title, isBack, isClose }) => {
  return (
    <div className="w-full space-y-6 rounded-t-3xl bg-white p-4 pb-8">
      <div className="space-y-4">
        <div className="py-4">
          <TitleNavigation isBack={isBack} isClose={isClose}>
            {title}
          </TitleNavigation>
        </div>
        <div className="space-y-0">
          <Input title="Word" placeholder="Enter word" />
          <Input title="Definition" placeholder="Enter definition" />
        </div>
      </div>
      <Button type="primary" size="large" width="full">
        Save
      </Button>
    </div>
  );
};

export { BottomSheet };
