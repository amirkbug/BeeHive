import Table from "../../ui/organs/Table";

import { useThemeContext } from "../../contexts/ThemeContext";
import { useSelector } from "react-redux";

function DataTable() {
  const { type } = useThemeContext();
  const data = useSelector((state) => state.data.data);
  return (
    <Table data={data} type={type}>
      <Table.TableHeader />
      <Table.TableBody />
    </Table>
  );
}

export default DataTable;
