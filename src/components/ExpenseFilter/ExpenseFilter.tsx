import categories from "../categories";
import styles from "./expenseFilter.module.css";

interface Props {
  handleChange: (e: string) => void;
}

const ExpenseFilter = ({ handleChange }: Props) => {
  return (
    <div className={styles.filterContainer}>
      <h3>Filter By Category</h3>
      <select onChange={(e) => handleChange(e.target.value)}>
        <option value="">View All</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
