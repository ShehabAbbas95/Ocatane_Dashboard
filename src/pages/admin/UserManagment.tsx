import UsersTable from "../../components/Admin/UsersTable";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../store/users/userApi";

const UserManagement = () => {
  const { data: userRes } = useGetUsersQuery({});
  const users = userRes?.data;
  return (
    <>
      <Link to="/orders">Orders</Link>
      <UsersTable usersData={users} />
    </>
  );
};

export default UserManagement;
