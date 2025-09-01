import { InputField } from "./components/InputField/InputField";
import { DataTable, type Column } from "./components/DataTable";

interface UserData {
  id: number;
  name: string;
  email: string;
  age: number;
}
const columns: Column<UserData>[] = [
  { key: "name", title: "Name", sortable: true },
  { key: "email", title: "Email" },
  { key: "age", title: "Age", sortable: true },
];
const data: UserData[] = [
  { id: 1, name: "John Doe", email: "john@example.com", age: 32 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", age: 28 },
  { id: 3, name: "Sam Green", email: "sam@example.com", age: 45 },
];

function App() {
  return (
    <div className="p-8 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">Catalyst UI - Component Demo</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">InputField Component</h2>
        <InputField label="Name" placeholder="Enter your name" />
        <InputField
          label="Email"
          placeholder="Invalid field"
          invalid
          errorMessage="Please enter a valid email."
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">DataTable Component</h2>
        <DataTable columns={columns} data={data} selectable />
      </div>
    </div>
  );
}
export default App;
