import { useCallback } from "react";
import { User } from "../../../types/admin/Users";
import GlobalTable from "../../generic/Table";
import { columns } from "./columns";

interface UsersTableProps {
  usersData: User[];
  handleUserIdChange: (id: string) => void;
  handleOpenModal: (isOpen: boolean) => void;
  handleDeleteUser: (id: string) => void;
  loading: boolean;
  deleting: boolean;
}

const UsersTable: React.FC<UsersTableProps> = ({
  usersData,
  handleOpenModal,
  handleUserIdChange,
  handleDeleteUser,
  loading,
  deleting,
}) => {
  const handleEdit = useCallback(
    (record: User) => () => {
      handleOpenModal(true);
      handleUserIdChange(record.id);
      // onEdit(record);
    },
    [handleOpenModal, handleUserIdChange]
  );
  const onDelete = useCallback(
    (id: string) => () => {
      handleDeleteUser(id);
    },
    [handleDeleteUser]
  );

  const actions = [
    {
      title: "Actions",
      dataIndex: "edit",
      render: (_: unknown, record: User) => (
        <div className="table_action_btn">
          <span
            style={{ color: "green", cursor: "pointer" }}
            onClick={handleEdit(record)}
          >
            Edit
          </span>

          <span
            style={{ color: "red", marginLeft: "5px", cursor: "pointer" }}
            onClick={onDelete(record.id)}
          >
            Delete
          </span>
        </div>
      ),
    },
  ];
  return (
    <GlobalTable
      rowKeyName="id"
      loading={loading || deleting}
      data={usersData}
      columns={[...columns, ...actions]}
    />
  );
};

export default UsersTable;
