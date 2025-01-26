import { Input } from "antd";
import { ChangeEvent } from "react";

import SearchContainer from "./TableSearchInput.styles";

type SearchInputProps = {
  searchQuery: string;
  serachHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TableSearchInput = ({ searchQuery, serachHandler }: SearchInputProps) => {
  return (
    <SearchContainer>
      <div className="searchInputWrapper">
        <Input
          className="searchInput"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => serachHandler(e)}
          allowClear={true}
        />
      </div>
    </SearchContainer>
  );
};

export default TableSearchInput;
