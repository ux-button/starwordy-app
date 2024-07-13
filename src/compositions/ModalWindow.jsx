import { BottomSheet } from '../components/BottomSheet';
import { Input } from '../components/InputText';

const ModalWindow = ({ onClickRight }) => {
  return (
    <>
      <BottomSheet
        onClickRight={onClickRight}
        title="Add new word"
        isLeft={false}
        isRight={true}
      >
        <div className="space-y-0">
          <Input title="Word" placeholder="Enter word" />
          <Input title="Definition" placeholder="Enter definition" />
        </div>
      </BottomSheet>
    </>
  );
};

export { ModalWindow };
