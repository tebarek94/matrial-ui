import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function ApppBar() {
  return (
    <div>
      <AppBar variant="outlined">
        <Toolbar>
          <Typography>Logo</Typography>
          <Button
            color="warning"
            sx={{ marginLeft: "auto" }}
            variant="contained"
          >
            Call me
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ApppBar;
