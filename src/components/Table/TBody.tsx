import styles from "./css/table.module.css";

interface Props {
  elements: PropsObject[];
  handleDelete: (_id: string) => void;
}

interface PropsObject {
  _id: string;
  description: string;
  amount: number;
  category: string;
}

const TBody = ({ elements, handleDelete }: Props) => {
  const getTotal = elements.map((elm) => elm.amount);
  const total = () => {
    let sum = 0;
    for (let i = 0; i < getTotal.length; i += 1) {
      sum += getTotal[i];
    }
    return sum;
  };

  return (
    <tbody>
      {elements.map((elm) => (
        <tr className={styles.tr} key={elm._id}>
          <td>{elm.description}</td>
          <td>{elm.amount}</td>
          <td>{elm.category}</td>
          <td>
            <button
              data-name={elm.description}
              onClick={() => handleDelete(elm._id)}
            >
              delete
            </button>
          </td>
        </tr>
      ))}
      <tr className={styles.tr}>
        <td>
          <strong>Total</strong>
        </td>
        <td>
          <strong>{total()}</strong>
        </td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  );
};

export default TBody;
