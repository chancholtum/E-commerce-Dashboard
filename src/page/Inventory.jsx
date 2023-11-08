import { Box } from "@mui/material";
import Title from "../ui/Title";
import InventoryTable from "../features/inventory/InventoryTable";

function Inventory() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title title="INVENTORY" subtitle="Your Inventory" />
      </Box>
      <InventoryTable />
    </Box>
  );
}

export default Inventory;
