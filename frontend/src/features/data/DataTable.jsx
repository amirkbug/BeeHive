import Table from "../../ui/organs/Table";

import { useThemeContext } from "../../contexts/ThemeContext";

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
