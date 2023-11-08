import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import StatBox from "../../ui/StatBox";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import MessageIcon from "@mui/icons-material/Message";
import { DownloadDoneOutlined } from "@mui/icons-material";
import LineChart from "../../ui/LineChart";

function OverviewLayout() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12,1fr)"
      gridAutoRows="140px"
      gap="20px"
      marginTop="40px"
    >
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="120,343"
          subtitle="Sales"
          progress="0.75"
          increase="+13%"
          icon={
            <AttachMoneyIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="1,463"
          subtitle="Quantity"
          progress="0.53"
          increase="+10%"
          icon={
            <ShoppingCartIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="345"
          subtitle="New Clients"
          progress="0.90"
          increase="+30%"
          icon={
            <FiberNewIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 3"
        backgroundColor={colors.primary[400]}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <StatBox
          title="32"
          subtitle="Complain"
          progress="0.04"
          increase="-40%"
          icon={
            <MessageIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Box>
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Box
          mt="25px"
          p="0 30px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography variant="h5" fontWeight="600" color={colors.gray[100]}>
              Revenue Generated
            </Typography>
            <Typography
              variant="h3"
              fontWeight="500"
              color={colors.greenAccent[500]}
            >
              $153,035(Nov)
            </Typography>
          </Box>

          <Box>
            <IconButton>
              <DownloadDoneOutlined
                sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
              />
            </IconButton>
          </Box>
        </Box>
        <Box mt="10px" p="0 30px">
          <LineChart />
        </Box>
      </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
        overflow="auto"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.gray[100]}
          p="15px"
        >
          <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
            Top 5 Our Products
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
          >
            1.LIV-H-2019
          </Typography>
          <Typography color={colors.gray[100]}>3,630 pcs</Typography>
          <Typography color={colors.gray[100]}>$ 350,235</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
          >
            2.ARS-H-2003
          </Typography>
          <Typography color={colors.gray[100]}>2,630 pcs</Typography>
          <Typography color={colors.gray[100]}>$ 300,235</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
          >
            3.MUN-H-1999
          </Typography>
          <Typography color={colors.gray[100]}>2,840 pcs</Typography>
          <Typography color={colors.gray[100]}>$ 289,235</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
          >
            4.LIV-H-2023
          </Typography>
          <Typography color={colors.gray[100]}>2,030 pcs</Typography>
          <Typography color={colors.gray[100]}>$ 225,525</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >
          <Typography
            color={colors.greenAccent[500]}
            variant="h5"
            fontWeight="600"
          >
            5.MUN-H-1993
          </Typography>
          <Typography color={colors.gray[100]}>1,930 pcs</Typography>
          <Typography color={colors.gray[100]}>$ 210,235</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default OverviewLayout;
