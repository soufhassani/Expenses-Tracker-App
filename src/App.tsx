import { useState } from "react";
import ExpenseForm from "./components/NewItem/ExpenseForm";
import ExpenseTable from "./components/Table/ExpenseTable";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import styles from "./App.module.css";

const tableHeader = [
  { _id: "1", name: "Description" },
  { _id: "2", name: "Amount" },
  { _id: "3", name: "Category" },
];

interface PropsObject {
  _id: string;
  description: string;
  amount: number;
  category: string;
}

function App() {
  const [expenses, setExpenses] = useState<any>([
    { _id: "1", description: "Milk", amount: 18, category: "Grocery" },
    { _id: "2", description: "Toy", amount: 6, category: "Entertainment" },
    { _id: "3", description: "Women", amount: 30, category: "Utilities" },
    { _id: "4", description: "Orange", amount: 5, category: "Grocery" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleExpenses = selectedCategory
    ? expenses.filter((item: any) => item.category === selectedCategory)
    : expenses;

  const handleChange = (value: string) => {
    setSelectedCategory(value);
  };

  const addNewItem = (data: PropsObject) => {
    console.log(data);
    let item = {
      ...data,
      _id: Math.random().toString(),
    };
    console.log(item);
    setExpenses([...expenses, item]);
  };

  const handleDelete = (_id: any) => {
    return setExpenses(expenses.filter((item: any) => item._id !== _id));
  };
  return (
    <main className={styles.main}>
      <h1 className={styles.appTitle}>Expenses Tracker App</h1>
      <div className={styles.mainContent}>
        <div className={styles.addNewItemContainer}>
          <ExpenseForm addNewItem={addNewItem} />
        </div>
        <div className={styles.tableContainer}>
          <ExpenseFilter handleChange={handleChange} />
          <ExpenseTable
            elements={tableHeader}
            items={visibleExpenses}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
