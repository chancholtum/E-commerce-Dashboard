import { Box, IconButton } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataInventory } from "../../data/mockData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { useTheme } from "@emotion/react";
import { Typography } from "antd";
import { tokens } from "../../theme";

function InventoryTable() {
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
      field: "category",
      headerName: "Category",
      flex: 1,
    },
    {
      field: "stock",
      headerName: "Stock",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      headerAlign: "left",
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="60%"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "In Stock"
                ? colors.greenAccent[600]
                : status === "Low Stock"
                ? colors.greenAccent[700]
                : colors.greenAccent[800]
            }
            borderRadius="4px"
          >
            <Typography color={colors.gray[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "options",
      headerName: "Options",
      renderCell: () => {
        return (
          <Box
            width="60%"
            p="5px"
            display="flex"
            justifyContent="center"
            borderRadius="4px"
            m="0 auto"
          >
            <IconButton type="button">
              <EditIcon />
            </IconButton>
            <IconButton type="button">
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
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
          rows={mockDataInventory}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        ></DataGrid>
      </Box>
    </Box>
  );
}

export default InventoryTable;
