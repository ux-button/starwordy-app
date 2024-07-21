import { BottomSheet } from '../../../shared/components/moleculas/BottomSheet';
import { Button } from '../../../shared/components/atoms/Button';
import { InputText } from '../../../shared/components/atoms/input-text/InputText';
import { Icon } from '../../../shared/components/atoms/icon/Icon';

const WordAddModal = ({ state, hanleModalClose }) => {
  return (
    <>
      {state.isModal ? (
        <BottomSheet
          onClickRight={hanleModalClose}
          title="Add new word"
          isLeft={false}
          isRight={true}
        >
          <div className="space-0">
            <InputText title="Word" placeholder="Enter word" />
            <InputText title="Definition" placeholder="Enter definition" />
          </div>
          <section className="flex justify-between">
            <Button type="ghost" size="large" width="full">
              Save
            </Button>
            <Button type="primary" size="large" width="full">
              <Icon type="plus" style="size-6 fill-black" />
              One more
            </Button>
          </section>
        </BottomSheet>
      ) : null}
    </>
  );
};

export { WordAddModal };
