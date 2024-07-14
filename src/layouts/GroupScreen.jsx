import { useReducer } from 'react';
import { stateMachine, initialState } from '../state-machine';
import { Button } from '../components/Button';
import { Icon } from '../components/Icon';
import { BottomSheet } from '../components/BottomSheet';
import { InputText } from '../components/InputText';
import { GroupList } from '../compositions/GroupList';
import { MenuTitle } from '../compositions/MenuTitle';

const GroupScreen = () => {
  const [state, dispatch] = useReducer(stateMachine, initialState);

  const hanleModalOpen = () => {
    dispatch({
      type: 'openModal',
    });
  };

  const hanleModalClose = () => {
    dispatch({
      type: 'closeModal',
    });
  };

  return (
    <div className="h-screen space-y-4 bg-mono-200 pt-4">
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
      <MenuTitle title="Hi, Alex" />
      <section className="flex items-center gap-2 px-4">
        <Button onClick={hanleModalOpen} type="primary" size="main">
          <Icon type="plus" style="size-6" /> Add group
        </Button>
        <Button type="secondary" size="main">
          <Icon type="clover" style="size-6" /> Smart learn
        </Button>
      </section>
      <GroupList groups={state.allGroups} />
    </div>
  );
};

export { GroupScreen };
