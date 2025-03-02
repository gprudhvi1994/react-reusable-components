import CustomTable from "./CustomTable";
import DynamicTable from "./DynamicTable";

function App() {
  const data = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
      priority: "High",
      assignedTo: "John",
      createdAt: "2024-02-28",
      updatedAt: "2024-02-29",
      status: "Pending",
      category: "Work",
      dueDate: "2024-03-05",
      progress: "50%",
      notes: "Requires review",
      tags: "urgent, important",
      estimatedTime: "4h",
      actualTime: "2h",
      client: "ABC Corp",
      location: "Remote",
      reviewer: "Alice",
      feedback: "Needs changes",
      priorityLevel: 3,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
      priority: "Medium",
      assignedTo: "Jane",
      createdAt: "2024-02-25",
      updatedAt: "2024-02-27",
      status: "In Progress",
      category: "Personal",
      dueDate: "2024-03-10",
      progress: "30%",
      notes: "Follow up needed",
      tags: "important",
      estimatedTime: "2h",
      actualTime: "1h",
      client: "XYZ Ltd",
      location: "Office",
      reviewer: "Bob",
      feedback: "Looks good",
      priorityLevel: 2,
    },
  ];

  const inputColumns = ["title", "priority", "notes"];
  const fixedColumns = ["userId", "id", "priorityLevel", "feedback"];
  return (
    <div>
      {/* <DynamicTable
        fixedColumns={["Column 1", "Column 2", "Column 3", "Column 20"]}
      /> */}
      <CustomTable
        data={data}
        inputColumns={inputColumns}
        fixedColumns={fixedColumns}
      />
    </div>
  );
}

export default App;
