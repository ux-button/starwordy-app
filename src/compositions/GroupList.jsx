import { GroupCell } from '../components/GroupCell';

const GroupList = ({ groups }) => {
  return (
    <section className="px-2">
      <div className="p-3 font-stwRegular text-t-large text-mono-600">
        {groups.length} groups
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 md:grid-cols-4">
        {groups.map((group) => {
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
    </section>
  );
};

export { GroupList };
