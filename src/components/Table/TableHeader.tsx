import styles from "./css/table.module.css";

interface Props {
  elements: PropsObject[];
}

interface PropsObject {
  _id: string;
  name: string;
}

const TableHeader = ({ elements }: Props) => {
  return (
    <thead>
      <tr>
        {elements.map((header) => (
          <th className={styles.th} key={header._id}>
            {header.name}
          </th>
        ))}
        <th className={styles.th}></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
