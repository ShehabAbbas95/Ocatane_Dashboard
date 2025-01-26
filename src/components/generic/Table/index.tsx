import Table from "antd/lib/table/Table";
import { ColumnType } from "antd/es/table";
import GlobalTableContainer from "./GlobalTable.style";
import { useState } from "react";
import TableSearchInput from "./TableSearchInput";

interface GlobalTableProps<T> {
  data: T[];
  columns: ColumnType<T>[];
  loading?: boolean;
  rowKeyName?: string; // default is 'key' in antd table, if your data has a different key name, you can set it here.
  withSearch?: boolean;
}

const GlobalTable = <T extends object>({
  data,
  columns,
  loading,
  rowKeyName = "key",
  withSearch = false,
}: GlobalTableProps<T>) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<typeof data>([]);
  const searchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const searchInObject = (obj: any): boolean => {
      return Object.values(obj).some((value) => {
        if (typeof value === "object" && value !== null) {
          return searchInObject(value);
        }
        return (value as string)?.toString().toLowerCase().includes(query);
      });
    };

    const filteredData = data?.filter((row) => searchInObject(row));
    setFilteredData(filteredData);
  };
  return (
    <GlobalTableContainer>
      {withSearch && (
        <TableSearchInput
          searchQuery={searchQuery}
          serachHandler={searchHandler}
        />
      )}
      <Table
        rowKey={(row: T) => row[rowKeyName as keyof T] as string}
        loading={loading}
        bordered
        columns={columns}
        dataSource={searchQuery ? filteredData : data}
        pagination={{
          pageSize: 10,
          total: searchQuery ? filteredData?.length : data?.length,
        }}
      />
    </GlobalTableContainer>
  );
};

export default GlobalTable;
