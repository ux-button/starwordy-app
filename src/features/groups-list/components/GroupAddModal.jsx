import { BottomSheet } from '../../../shared/components/moleculas/BottomSheet';
import { Button } from '../../../shared/components/atoms/Button';
import { InputText } from '../../../shared/components/atoms/input-text/InputText';

const GroupAddModal = ({ state, hanleModalClose }) => {
  return (
    <>
      {state.isModal ? (
        <BottomSheet
          onClickRight={hanleModalClose}
          title="Add group"
          isLeft={false}
          isRight={true}
        >
          <InputText title="Group" placeholder="Enter group name" />
          <Button type="primary" size="large" width="full">
            Save
          </Button>
        </BottomSheet>
      ) : null}
    </>
  );
};

export { GroupAddModal };
