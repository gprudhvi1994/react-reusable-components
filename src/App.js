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
      docType: "CR",
      condType: "INV",
      condValue: "FDT",
      careerBand: "OB",
      categoury: "CR",
      tnxGroup: "ARIBA REQUISITION",
      tnxTypeDescription:
        "Ariba Requesition - General Authority and Nonconsulting",
      priority: 1,
      amount: 300000000,
      currency: "USD",
      doaComments: "-",
      activeIndicator: "",
    },
    {
      docType: "CR",
      condType: "INV",
      condValue: "FDT",
      careerBand: "OB",
      categoury: "CR",
      tnxGroup: "ARIBA REQUISITION",
      tnxTypeDescription:
        "Ariba Requesition - General Authority and Nonconsulting",
      priority: 1,
      amount: 300000000,
      currency: "USD",
      doaComments: "-",
      activeIndicator: "",
    },
    {
      docType: "CR",
      condType: "INV",
      condValue: "FDT",
      careerBand: "OB",
      categoury: "CR",
      tnxGroup: "ARIBA REQUISITION",
      tnxTypeDescription:
        "Ariba Requesition - General Authority and Nonconsulting",
      priority: 1,
      amount: 300000000,
      currency: "USD",
      doaComments: "-",
      activeIndicator: "",
    },
    {
      docType: "CR",
      condType: "INV",
      condValue: "FDT",
      careerBand: "OB",
      categoury: "CR",
      tnxGroup: "ARIBA REQUISITION",
      tnxTypeDescription:
        "Ariba Requesition - General Authority and Nonconsulting",
      priority: 1,
      amount: 300000000,
      currency: "USD",
      doaComments: "-",
      activeIndicator: "",
    },
    {
      docType: "CR",
      condType: "INV",
      condValue: "FDT",
      careerBand: "OB",
      categoury: "CR",
      tnxGroup: "ARIBA REQUISITION",
      tnxTypeDescription:
        "Ariba Requesition - General Authority and Nonconsulting",
      priority: 1,
      amount: 300000000,
      currency: "USD",
      doaComments: "-",
      activeIndicator: "",
    },
    {
      docType: "CR",
      condType: "INV",
      condValue: "FDT",
      careerBand: "OB",
      categoury: "CR",
      tnxGroup: "ARIBA REQUISITION",
      tnxTypeDescription:
        "Ariba Requesition - General Authority and Nonconsulting",
      priority: 1,
      amount: 300000000,
      currency: "USD",
      doaComments: "-",
      activeIndicator: "",
    },
    {
      docType: "CR",
      condType: "INV",
      condValue: "FDT",
      careerBand: "OB",
      categoury: "CR",
      tnxGroup: "ARIBA REQUISITION",
      tnxTypeDescription:
        "Ariba Requesition - General Authority and Nonconsulting",
      priority: 1,
      amount: 300000000,
      currency: "USD",
      doaComments: "-",
      activeIndicator: "",
    },
    {
      docType: "CR",
      condType: "INV",
      condValue: "FDT",
      careerBand: "OB",
      categoury: "CR",
      tnxGroup: "ARIBA REQUISITION",
      tnxTypeDescription:
        "Ariba Requesition - General Authority and Nonconsulting",
      priority: 1,
      amount: 300000000,
      currency: "USD",
      doaComments: "-",
      activeIndicator: "",
    },
    {
      docType: "CR",
      condType: "INV",
      condValue: "FDT",
      careerBand: "OB",
      categoury: "CR",
      tnxGroup: "ARIBA REQUISITION",
      tnxTypeDescription:
        "Ariba Requesition - General Authority and Nonconsulting",
      priority: 1,
      amount: 300000000,
      currency: "USD",
      doaComments: "-",
      activeIndicator: "",
    },
    {
      docType: "CR",
      condType: "INV",
      condValue: "FDT",
      careerBand: "OB",
      categoury: "CR",
      tnxGroup: "ARIBA REQUISITION",
      tnxTypeDescription:
        "Ariba Requesition - General Authority and Nonconsulting",
      priority: 1,
      amount: 300000000,
      currency: "USD",
      doaComments: "-",
      activeIndicator: "",
    },
    {
      docType: "CR",
      condType: "INV",
      condValue: "FDT",
      careerBand: "OB",
      categoury: "CR",
      tnxGroup: "ARIBA REQUISITION",
      tnxTypeDescription:
        "Ariba Requesition - General Authority and Nonconsulting",
      priority: 1,
      amount: 300000000,
      currency: "USD",
      doaComments: "-",
      activeIndicator: "",
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

  const fixedColumns = [
    "docType",
    "condType",
    "condValue",
    "careerBand",
    "activeIndicator",
  ];
  const headers = [
    { key: "docType", label: "Doc Type" },
    { key: "condType", label: "Cond Type" },
    { key: "condValue", label: "Cond Value" },
    { key: "careerBand", label: "Career Band" },
    { key: "categoury", label: "Categoury" },
    { key: "tnxGroup", label: "Tnx Group" },
    { key: "tnxTypeDescription", label: "Tnx Type Description" },
    { key: "priority", label: "Priority" },
    { key: "amount", label: "Amount" },
    { key: "currency", label: "Currency" },
    { key: "doaComments", label: "DOA Comments" },
    { key: "activeIndicator", label: "Active Indicator" },
  ];

  const inputColumns = ["amount"];

  const transactionGroups = ["Group 1", "Group 2", "Group 3"];
  const transactionTypes = ["Type 1", "Type 2", "Type 3"];
  return (
    <div>
      <div className="transaction-form">
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

      <CustomTable data={data} headers={headers} fixedColumns={fixedColumns} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CustomTable
          data={data}
          headers={headers}
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
