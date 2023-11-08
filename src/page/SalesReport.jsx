import { Box } from "@mui/material";
import Title from "../ui/Title";
import SaleReportTable from "../features/salereport/SaleReport";

function SalesReport() {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title title="SALES REPORT" subtitle="Your Report" />
      </Box>
      <SaleReportTable />
    </Box>
  );
}

export default SalesReport;
