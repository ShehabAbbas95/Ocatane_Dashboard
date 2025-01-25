import { useState } from "react";
import { Link } from "react-router-dom";

import UsersTable from "../../components/Admin/UsersTable";
import {
  useGetUserByIdQuery,
  useGetUsersQuery,
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
  console.log(userId);
  const handleUpdateUser = (values: User) => {};
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
      />
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
