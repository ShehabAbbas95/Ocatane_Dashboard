import styled from "styled-components";

const GlobalTableContainer = styled.div`
  margin-top: 20px;
  .ant-table {
    scrollbar-width: thin;
    scrollbar-color: #f1f1f1;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: white;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-track {
      background: #f1f1f1 !important;
    }
  }

  .ant-table-thead .ant-table-cell {
    background-color: black !important;
    color: white;
    font-size: 14px;
    padding: 5px !important;
    text-align: center;
    font-weight: 300;
  }

  .ant-table-tbody > tr > td {
    font-size: 12px !important;
    padding: 7px !important;
    text-align: center;
  }

  & .ant-table-filter-trigger {
    color: white;
  }

  & .ant-table-filter-trigger:hover {
    color: white;
  }

  & .ant-table-tbody > tr.ant-table-row:hover > td {
    background: none !important;
  }
`;

export default GlobalTableContainer;
