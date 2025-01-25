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
  const { data: usersData, isFetching: loadingUsers } = useGetUsersQuery({});
  const users = usersData;
  const { data: userData, isFetching: fetchingUser } = useGetUserByIdQuery(
    userId,
    { skip: !userId }
  );

  const [updateUser, { isLoading: updating }] = useUpdateUserMutation();
  const [deleteUser, { isLoading: deleting }] = useDeleteUserMutation();
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

      <UsersTable
        handleOpenModal={setOpenModal}
        usersData={users}
        handleUserIdChange={setUserId}
        handleDeleteUser={handleDeleteUser}
        loading={loadingUsers}
        deleting={deleting}
      />

      <GlobalModal
        title="Update User"
        open={openModal}
        handleClose={handleCloseModal}
      >
        <UserForm
          userData={userData}
          isLoading={updating}
          onSubmit={handleUpdateUser}
          close={handleCloseModal}
          fetchingUser={fetchingUser}
        />
      </GlobalModal>
    </>
  );
};

export default UserManagement;
