import { useCallback } from "react";
import { User } from "../../../types/admin/Users";
import GlobalTable from "../../generic/Table";
import { columns } from "./columns";

interface UsersTableProps {
  usersData: User[];
  handleUserIdChange: (id: string) => void;
  handleOpenModal: (isOpen: boolean) => void;
}

const UsersTable: React.FC<UsersTableProps> = ({
  usersData,
  handleOpenModal,
  handleUserIdChange,
}) => {
  const onEdit = useCallback(
    (record: User) => {
      handleOpenModal(true);
      handleUserIdChange(record.id);
    },
    [handleOpenModal, handleUserIdChange]
  );
  const handleClick = useCallback(
    (record: User) => () => {
      onEdit(record);
    },
    [onEdit]
  );

  const actions = [
    {
      title: "Actions",
      dataIndex: "action",
      render: (_: unknown, record: User) => (
        <div className="table_action_btn">
          <div onClick={handleClick(record)}>Edit</div>
        </div>
      ),
    },
  ];
  return <GlobalTable data={usersData} columns={[...columns, ...actions]} />;
};

export default UsersTable;
