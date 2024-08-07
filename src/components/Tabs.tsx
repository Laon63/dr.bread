"use client";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { useRouter, usePathname } from "next/navigation";

export default function LabTabs() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = React.useState(pathname.replace("/", ""));

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(newValue);
    setValue(newValue);
    router.push(`/${newValue}`);
  };

  useEffect(() => {
    setValue(pathname.replace("/", ""));
  }, [pathname]);

  const TAB_ITEMS = ["about", "research", "publication", "CV", "blog"];

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        display: "flex",
        flexFlow: "row-reverse",
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            {TAB_ITEMS.map((item, index) => (
              <Tab key={index} label={item} value={item} />
            ))}
          </TabList>
        </Box>
      </TabContext>
    </Box>
  );
}
