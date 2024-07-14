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
    <div className="h-screen bg-mono-200">
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
      <section className="space-y-4 px-4 py-4">
        <MenuTitle title="Hi, Alex" />
        <section className="flex items-center gap-2">
          <Button onClick={hanleModalOpen} type="primary" size="main">
            <Icon type="plus" style="size-6" /> Add group
          </Button>
          <Button type="secondary" size="main">
            <Icon type="clover" style="size-6" /> Smart learn
          </Button>
        </section>
      </section>
      <section className="bg-mono-200 px-2">
        <GroupList groups={state.allGroups} />
      </section>
    </div>
  );
};

export { GroupScreen };
