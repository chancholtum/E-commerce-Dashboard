import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataSaleReport } from "../../data/mockData";

import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";

function SaleReportTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "product",
      headerName: "Product",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1,
    },
    {
      field: "totalprice",
      headerName: "Total Price",
      type: "number",
      flex: 1,
    },
  ];

  return (
    <Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.gray[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataSaleReport}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        ></DataGrid>
      </Box>
    </Box>
  );
}

export default SaleReportTable;
