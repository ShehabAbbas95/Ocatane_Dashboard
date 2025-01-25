import { useState } from "react";
import { Link } from "react-router-dom";

import UsersTable from "../../components/Admin/UsersTable";
import {
  useDeleteUserMutation,
  useGetUserByIdQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
} from "../../store/users/userApi";
import GlobalModal from "../../components/generic/Modal";
import { User } from "../../types/admin/Users";
import UserForm from "../../components/Admin/Forms/UserForm";

const UserManagement = () => {
  const [userId, setUserId] = useState<string>();
  const [openModal, setOpenModal] = useState(false);
  const { data: usersData } = useGetUsersQuery({});
  const users = usersData;
  const { data: userData } = useGetUserByIdQuery(userId, { skip: !userId });

  const [updateUser] = useUpdateUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const handleUpdateUser = (values: User) => {
    updateUser({ ...values })
      .unwrap()
      .then(() => {
        setOpenModal(false);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };
  const handleDeleteUser = (id: string) => {
    deleteUser(id)
      .unwrap()
      .then(() => {
        // setOpenModal(false);
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Link to="/orders">Orders</Link>
      {users && (
        <UsersTable
          handleOpenModal={setOpenModal}
          usersData={users}
          handleUserIdChange={setUserId}
          handleDeleteUser={handleDeleteUser}
        />
      )}
      <GlobalModal
        title="Update User"
        open={openModal}
        handleClose={handleCloseModal}
      >
        <UserForm
          userData={userData}
          isLoading={false}
          onSubmit={handleUpdateUser}
          close={handleCloseModal}
        />
      </GlobalModal>
    </>
  );
};

export default UserManagement;
