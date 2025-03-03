import { useState } from "react";
import CustomTable from "./CustomTable";
import SelectDropdown from "./SelectDropdown";
import Modal from "./Model";

function App() {
  const [formData, setFormData] = useState({
    transactionGroup: "",
    transactionType: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    console.log(`Updated ${name}:`, value);
  };

  const inputColumns = ["title", "priority", "notes"];
  const fixedColumns = ["userId", "id", "priorityLevel", "feedback"];

  const transactionGroups = ["Group 1", "Group 2", "Group 3"];
  const transactionTypes = ["Type 1", "Type 2", "Type 3"];
  return (
    <div>
      <div className="transaction-form">
        {/* Select Dropdowns using Reusable Component */}
        <div className="select-container">
          <SelectDropdown
            label="Transaction Group"
            name="transactionGroup"
            options={transactionGroups}
            value={formData.transactionGroup}
            onChange={handleChange}
          />
          <SelectDropdown
            label="Transaction Type"
            name="transactionType"
            options={transactionTypes}
            value={formData.transactionType}
            onChange={handleChange}
          />
        </div>

        <div className="button-container">
          <button
            onClick={() => setIsModalOpen(true)}
            className="custom-button"
          >
            Create
          </button>
        </div>
      </div>
      <CustomTable
        data={data}
        // inputColumns={inputColumns}
        fixedColumns={fixedColumns}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CustomTable
          data={data}
          inputColumns={inputColumns}
          fixedColumns={fixedColumns}
        />
        <div>
          <button>Save</button>
          <button>Submit</button>
          <button>Cancel Request</button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
