import Table from "antd/lib/table/Table";
import { ColumnType } from "antd/es/table";
import GlobalTableContainer from "./GlobalTable.style";

interface GlobalTableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
  loading?: boolean;
  rowKeyName?: string; // default is 'key' in antd table, if your data has a different key name, you can set it here.
}

const GlobalTable = <T extends object>({
  data,
  columns,
  loading,
  rowKeyName = "key",
}: GlobalTableProps<T>) => {
  return (
    <GlobalTableContainer>
      <Table
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rowKey={(row: T) => row[rowKeyName as keyof T] as string}
        loading={loading}
        bordered
        columns={columns}
        dataSource={data}
      />
    </GlobalTableContainer>
  );
};

export default GlobalTable;
