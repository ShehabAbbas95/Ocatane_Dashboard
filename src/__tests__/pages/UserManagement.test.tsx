import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import { api } from "../../store/api";
import { UserManagement } from "../../pages";
import { User } from "../../types/admin/Users";
import userEvent from "@testing-library/user-event";
import { Spin } from "antd";

// Mock the RTK Query hooks first
const useGetUsersQuery = vi.fn();
const useGetUserByIdQuery = vi.fn();

// Update these mocks at the top of the file
const updateUser = vi.fn().mockImplementation((data) => ({
  unwrap: () => Promise.resolve(data),
}));
// First, update the mock at the top of the file
const deleteUser = vi.fn().mockImplementation((id) => ({
  unwrap: () => Promise.resolve({ success: true, id }),
}));

const useUpdateUserMutation = vi.fn(() => [updateUser, { isLoading: false }]);

vi.mock("../../store/users/userApi", async () => ({
  useGetUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useDeleteUserMutation: () => [deleteUser, { isLoading: false }],
  // useDeleteUserMutation: vi.fn(),
  api: {
    reducerPath: "users",
    reducer: vi.fn(),
    middleware: vi.fn(),
  },
}));
vi.mock("../../components/Admin/Users/UsersTable/index.tsx", () => ({
  default: ({
    usersData,
    handleOpenModal,
    handleUserIdChange,
    handleDeleteUser,
  }) => {
    console.log("UsersTable data:", usersData); // Log the data
    return (
      <div>
        <button data-testid="edit-btn-1" onClick={() => handleOpenModal(true)}>
          Edit
        </button>
        <button onClick={() => handleUserIdChange("1")}>Set User ID</button>
        <button onClick={() => handleDeleteUser("1")}>Delete User</button>
        {usersData.map((user: User) => (
          <div key={user?.id}>{user.name}</div>
        ))}
        {/* {loading && <div>Loading...</div>} */}
        {/* {deleting && <div>Deleting...</div>} */}
      </div>
    );
  },
}));

// Mock the Modal component
vi.mock("../../components/generic/Modal", () => ({
  default: ({ title, open, handleClose, children }) => (
    <div>
      {open && (
        <div>
          <h2>{title}</h2>
          {children}
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  ),
}));

// Mock the UserForm component
vi.mock("../../components/Admin/Users/Forms/UserForm", () => ({
  default: ({ isLoading, onSubmit, close }) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({
          id: "1",
          name: "Updated Users",
          email: "test@gmail.com",
          role: "admin",
          active: true,
        });
      }}
    >
      {isLoading && <Spin />}
      <button type="submit">Update</button>
      <button type="button" onClick={close}>
        Cancel
      </button>
    </form>
  ),
}));

describe("UserManagement Component", () => {
  const mockStore = configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

  const renderComponent = () =>
    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <UserManagement />
        </MemoryRouter>
      </Provider>
    );

  it("renders the UsersTable component with users data", async () => {
    const usersData = [
      {
        id: "1",
        name: "John",
        email: "john@example.com",
        role: "admin",
        active: true,
      },
    ];
    const userData = [{ id: "1", name: "John", email: "john@example.com" }];
    useGetUsersQuery.mockReturnValue({
      data: usersData,
      isLoading: false,
      isFetching: false,
      isError: false,
    });
    useGetUserByIdQuery.mockReturnValue({
      data: userData,
      isLoading: false,
      isFetching: false,
      isError: false,
    });
    renderComponent();

    // Check if the user data is rendered in the table
    const userElement = await screen.findByText("John");
    expect(userElement).toBeInTheDocument();
  });
  it("renders the UserManagement component with a link to orders", () => {
    renderComponent();
    expect(screen.getByText("Orders")).toBeInTheDocument();
  });
  it("opens the modal when the Open Modal button is clicked", async () => {
    const usersData = [
      {
        id: "1",
        name: "John",
        email: "john@example.com",
        role: "admin",
        active: true,
      },
    ];
    useGetUsersQuery.mockReturnValue({
      data: usersData,
      isLoading: false,
      isFetching: false,
      isError: false,
    });

    renderComponent();
    const openModalButton = screen.getByTestId("edit-btn-1");
    await userEvent.click(openModalButton);

    expect(screen.getByText("Update User")).toBeInTheDocument();
  });

  it("calls handleUpdateUser when the form is submitted", async () => {
    const usersData = [
      {
        id: "1",
        name: "John",
        email: "john@example.com",
        role: "admin",
        active: true,
      },
    ];

    useGetUsersQuery.mockReturnValue({
      data: usersData,
      isLoading: false,
      isFetching: false,
      isError: false,
    });

    useGetUserByIdQuery.mockReturnValue({
      data: usersData,
      isLoading: false,
      isFetching: false,
      isError: false,
    });

    renderComponent();

    const openModalButton = screen.getByTestId("edit-btn-1");
    await userEvent.click(openModalButton);

    const submitButton = screen.getByText("Update");
    expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(updateUser).toHaveBeenCalledWith({
        id: "1",
        name: "Updated Users",
        email: "test@gmail.com",
        role: "admin",
        active: true,
      });
    });

    // Add verification that the mock was actually called
    expect(updateUser).toHaveBeenCalled();
  });
  it("deletes a user and updates the UI", async () => {
    const usersData = [
      {
        id: "1",
        name: "John",
        email: "john@example.com",
        role: "admin",
        active: true,
      },
      {
        id: "3",
        name: "Jane",
        email: "jane@example.com",
        role: "admin",
        active: true,
      },
    ];

    useGetUsersQuery.mockReturnValue({
      data: usersData,
      isLoading: false,
      isFetching: false,
      isError: false,
    });

    renderComponent();
    // Simulate delete mutation and remove user from mock data
    await userEvent.click(screen.getByText("Delete User"));
    await waitFor(() => expect(deleteUser).toHaveBeenCalledWith("1"));
    cleanup();
    // Update mock data
    usersData.shift(); // Remove the first user
    renderComponent();
    // expect(
    //   numberOfUsersBeforeDelete != numberOfUsersAfterDelete
    // ).toBeTruthy();
    expect(screen.queryByText("John")).not.toBeInTheDocument();
    expect(screen.getByText("Jane")).toBeInTheDocument();
  });
});
