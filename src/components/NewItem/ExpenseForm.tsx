import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import categories from "../categories";
import styles from "./ExpenseForm.module.css";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters." }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0)
    .positive(),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

console.log(schema);

type formData = z.infer<typeof schema>;

interface Props {
  addNewItem: (data: any) => void;
}

const ExpenseForm = ({ addNewItem }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<formData>({ mode: "onChange", resolver: zodResolver(schema) });

  const onSubmit = (data: formData) => {
    addNewItem(data);
    reset();
  };

  return (
    <>
      <h3>Add New Expense</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formContainer}>
          <label htmlFor="description" className={styles.formLabel}>
            Description
          </label>
          <input
            {...register("description")}
            id="description"
            type="text"
            className={styles.formInput}
          />
          {errors.description && (
            <p className={styles.fieldErrors}>{errors.description.message}</p>
          )}
        </div>
        <div className={styles.formContainer}>
          <label htmlFor="amount" className={styles.formLabel}>
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className={styles.formInput}
          />
          {errors.amount && (
            <p className={styles.fieldErrors}>{errors.amount.message}</p>
          )}
        </div>
        <div className={styles.formContainer}>
          <label htmlFor="category" className={styles.formLabel}>
            Category
          </label>
          <select
            {...register("category")}
            id="category"
            className={styles.formInput}
            defaultValue=""
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button disabled={!isValid} className={styles.formSubmit} type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
