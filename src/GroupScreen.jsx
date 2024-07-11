import { useReducer } from "react";
import { stateMachine, initialState } from "./state-machine";
import { Button } from "./components/Button";
import { Icon } from "./components/Icon";
import { GroupCell } from "./components/GroupCell";
import { BottomSheet } from "./components/BottomSheet";

const GroupScreen = () => {
  const [state, dispatch] = useReducer(stateMachine, initialState);

  return (
    <div className="space-y-4 bg-mono-200 py-4">
      <div className="flex items-center justify-between px-4">
        <h1 className="font-stwSemibold text-t-screen">Hi, Alex</h1>
        <div className="size-12 rounded-full bg-[url('./assets/mock-avatar.png')] bg-cover"></div>
      </div>
      <div className="flex items-center gap-2 px-4">
        <Button type="primary" size="main">
          <Icon type="plus" style="size-6" /> Add group
        </Button>
        <Button type="secondary" size="main">
          <Icon type="clover" style="size-6" /> Smart learn
        </Button>
      </div>
      <div className="px-2">
        <div className="p-3 font-stwRegular text-t-large text-mono-600">
          {state.length} groups
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 md:grid-cols-4">
          {state.map((group) => {
            return (
              <GroupCell
                key={group.id}
                groupName={group.groupName}
                words={group.words}
                learningCurve={group.learningCurve}
                isStarred={group.isStarred}
                isRaised={group.isRaised}
              />
            );
          })}
        </div>
      </div>
      <BottomSheet
        title="Add new word"
        isBack={false}
        isClose={true}
      ></BottomSheet>
    </div>
  );
};

export { GroupScreen };
