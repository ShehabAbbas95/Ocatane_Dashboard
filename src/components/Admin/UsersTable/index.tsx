import { User } from "../../../types/admin/Users";
import GlobalTable from "../../generic/Table";
import { columns } from "./columns";

interface UsersTableProps {
  usersData: User[];
}

const UsersTable: React.FC<UsersTableProps> = ({ usersData }) => {
  return <GlobalTable data={usersData} columns={columns} />;
};

export default UsersTable;
