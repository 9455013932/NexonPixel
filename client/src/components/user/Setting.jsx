import React, { useState } from "react";
import { Container, Card, CardContent, Typography, TextField, Button, Switch, FormControlLabel } from "@mui/material";
// import UserNavbar from "./UserNavbar";

const Settings = () => {
  const [password, setPassword] = useState("");
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="bg-[#EEEEEE] h-screen ">
      {/* <UserNavbar /> */}

    <Container maxWidth="sm">
      <Card sx={{ mt: 5, p: 3 }}>
        <CardContent>
          <Typography variant="h5">Account Settings</Typography>
          <TextField label="New Password" type="password" fullWidth sx={{ mt: 2 }} value={password} onChange={(e) => setPassword(e.target.value)} />
          <FormControlLabel control={<Switch checked={notifications} onChange={() => setNotifications(!notifications)} />} label="Enable Notifications" sx={{ mt: 2 }} />
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>Save Changes</Button>
        </CardContent>
      </Card>
    </Container>
    </div>
  );
};

export default Settings;
