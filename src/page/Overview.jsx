import { Box, useTheme, Button } from "@mui/material";
import Title from "../ui/Title";
import OverviewLayout from "../features/overview/overviewLayout";
import { tokens } from "../theme";
import DownloadIcon from "@mui/icons-material/Download";

function Overview() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Title title="OVERVIEW" subtitle="Welcome to your dashbard" />
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.gray[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadIcon sx={{ mr: "10px" }} />
          Dowload Reports
        </Button>
      </Box>

      <OverviewLayout />
    </Box>
  );
}

export default Overview;
