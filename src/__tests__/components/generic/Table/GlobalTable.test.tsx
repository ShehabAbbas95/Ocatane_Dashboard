import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import GlobalTable from "../../../../components/generic/Table";

describe("GlobalTable Component", () => {
  it("renders the GlobalTable component with data and columns", () => {
    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Age", dataIndex: "age", key: "age" },
    ];
    const data = [
      { id: 1, name: "John Doe", age: 30 },
      { id: 2, name: "Jane Doe", age: 25 },
    ];

    render(<GlobalTable columns={columns} data={data} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  it("handles search input change and filters data", () => {
    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Age", dataIndex: "age", key: "age" },
    ];
    const data = [
      { id: 1, name: "John Doe", age: 30 },
      { id: 2, name: "Jane Doe", age: 25 },
    ];

    render(<GlobalTable columns={columns} data={data} withSearch />);

    const input = screen.getByPlaceholderText("Search");
    fireEvent.change(input, { target: { value: "Jane" } });

    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  it("displays loading spinner when isLoading is true", () => {
    const columns = [
      { title: "Name", dataIndex: "name", key: "name" },
      { title: "Age", dataIndex: "age", key: "age" },
    ];

    const { container } = render(
      <GlobalTable columns={columns} data={[]} loading />
    );

    expect(container.querySelector(".ant-spin")).toBeInTheDocument();
  });
});
