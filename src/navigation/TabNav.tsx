import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import * as singleSpa from "single-spa";
import { useEffect } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: string;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [page, setPage] = React.useState<string>("/");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setPage(newValue);
  };

  useEffect(() => {
    singleSpa.navigateToUrl(page);
  }, [page]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={page}
          onChange={(e, val) => handleChange(e, val)}
          aria-label="basic tabs example"
        >
          <Tab value="/home" label="Home" {...a11yProps(0)} />
          <Tab value="/cool" label="Cool page" {...a11yProps(1)} />
          <Tab value="/cooler" label="even cooler page" {...a11yProps(1)} />
        </Tabs>
      </Box>
    </Box>
  );
}
