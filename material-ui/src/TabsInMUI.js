import React, { useState } from "react";
import { Tabs, Tab, AppBar, Toolbar } from "@mui/material";

function TabsInMUI() {
  const [value, setvalue] = useState(0);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Tabs
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setvalue(val)}
          >
            <Tab label="First" />
            <Tab label="second" />
            <Tab label="Third" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TabsInMUI;
