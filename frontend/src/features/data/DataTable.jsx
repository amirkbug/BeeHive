import { useThemeContext } from "../../contexts/ThemeContext";
import Table from "../../ui/organs/Table";

function DataTable() {
  const { type } = useThemeContext();
  return (
    <Table type={type}>
      <Table.TableHeader />
      <Table.TableBody />
    </Table>
  );
}

export default DataTable;
