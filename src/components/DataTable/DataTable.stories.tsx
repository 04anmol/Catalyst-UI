import type { Meta, StoryObj } from "@storybook/react-vite";
import { DataTable, type Column } from "./index";

interface UserData {
  id: number;
  name: string;
  email: string;
  age: number;
}

const meta: Meta<typeof DataTable<UserData>> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DataTable<UserData>>;

const columns: Column<UserData>[] = [
  { key: "name", title: "Name", sortable: true },
  { key: "email", title: "Email" },
  { key: "age", title: "Age", sortable: true },
];

const data: UserData[] = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 32 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 28 },
  { id: 3, name: "Sam Green", email: "sam@example.com", age: 45 },
  { id: 4, name: "Alice Brown", email: "alice@example.com", age: 24 },
];

export const Default: Story = {
  args: {
    columns,
    data,
  },
};

export const Selectable: Story = {
  args: {
    ...Default.args,
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    columns,
    data: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
  },
};
