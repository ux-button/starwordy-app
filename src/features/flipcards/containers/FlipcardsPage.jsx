import { TitleNavigation } from '../../../shared/components/moleculas/TitleNavigation';

const FlipcardsPage = ({ groupName }) => {
  return (
    <div className="h-screen bg-mono-200">
      <TitleNavigation isLeft={true} isRight={true}>
        Travel
      </TitleNavigation>
    </div>
  );
};

export { FlipcardsPage };
