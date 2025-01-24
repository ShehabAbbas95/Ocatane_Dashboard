import UsersTable from "../../components/Admin/UsersTable";
import { Link } from "react-router-dom";

const UserManagement = () => {
  return (
    <>
      <Link to="/orders">Orders</Link>
      <UsersTable usersData={[]} />
    </>
  );
};

export default UserManagement;
