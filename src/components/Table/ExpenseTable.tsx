import TableHeader from "./TableHeader";
import TBody from "./TBody";
import styles from "./css/table.module.css";

interface Props {
  elements: HeadersObject[];
  items: BodyObject[];
  onDelete: (_id: string) => void;
}

interface HeadersObject {
  _id: string;
  name: string;
}
interface BodyObject {
  _id: string;
  description: string;
  amount: number;
  category: string;
}

const Table = ({ elements, items, onDelete }: Props) => {
  if (items.length === 0) return <p>You don't have expenses</p>;

  return (
    <table className={styles.table}>
      <TableHeader elements={elements} />
      <TBody elements={items} handleDelete={onDelete} />
    </table>
  );
};

export default Table;
