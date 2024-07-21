// Shared components
import { Button } from '../../../../shared/components/atoms/Button';
import { Icon } from '../../../../shared/components/atoms/icon/Icon';
import { MenuTitle } from '../../../../shared/components/moleculas/MenuTitle';

// Groups objects
import { GroupList } from '../../components/GroupList';
import { GroupAddModal } from '../../components/GroupAddModal';
import { useGroupListPage } from './useGroupListPage';

const GroupsListPage = () => {
  const { state, hanleModalOpen, hanleModalClose } = useGroupListPage();

  return (
    <div className="h-screen bg-mono-200">
      <GroupAddModal state={state} hanleModalClose={hanleModalClose} />
      <section className="space-y-4 px-4 py-4">
        <MenuTitle title="Hi, Alex" />
        <div className="flex items-center gap-2">
          <Button onClick={hanleModalOpen} type="primary" size="main">
            <Icon type="plus" style="size-6" /> Add group
          </Button>
          <Button type="secondary" size="main">
            <Icon type="clover" style="size-6" /> Smart learn
          </Button>
        </div>
      </section>
      <section className="bg-mono-200 px-2">
        <GroupList groups={state.allGroups} />
      </section>
    </div>
  );
};

export { GroupsListPage };
