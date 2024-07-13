import { BasicIcon } from '../components/BasicIcons';

const TitleNavigation = ({ children, isLeft, isRight, onClickRight }) => {
  return (
    <div className="flex justify-between font-stwSemibold text-t-section">
      <div className="size-6">
        {isLeft && (
          <BasicIcon
            type="arrowLeft"
            style="size-6 fill-none stroke-m stroke-black"
          />
        )}
      </div>
      {children}
      <div onClick={onClickRight} className="size-6">
        {isRight && (
          <BasicIcon
            type="basicCross"
            style="size-6 fill-none stroke-m stroke-black"
          />
        )}
      </div>
    </div>
  );
};

export { TitleNavigation };
