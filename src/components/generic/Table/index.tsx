import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import GlobalTableContainer from "./GlobalTable.style";

interface GlobalTableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
}

const GlobalTable = <T extends object>({
  data,
  columns,
}: GlobalTableProps<T>) => {
  return (
    <GlobalTableContainer>
      <Table bordered columns={columns} dataSource={data} />
    </GlobalTableContainer>
  );
};

export default GlobalTable;
