import { Box } from "@mui/material";
import Title from "../ui/Title";
import CustomerTable from "../features/customer/CustomerTable";

function Customer() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title title="CUSTOMER" subtitle="Your Customers" />
      </Box>
      <CustomerTable />
    </Box>
  );
}

export default Customer;
