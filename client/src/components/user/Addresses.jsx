import React, { useState } from "react";
import { Container, Card, CardContent, Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";
// import UserNavbar from "./UserNavbar";

const Addresses = () => {
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState("");

  const addAddress = () => {
    if (newAddress) setAddresses([...addresses, newAddress]);
    setNewAddress("");
  };

  return (
    <div className="bg-[#EEEEEE] h-screen ">

    <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ width: "100%", p: 3 }}>
        <CardContent>
          <Typography variant="h5">Manage Addresses</Typography>
          <TextField label="Add New Address" fullWidth sx={{ mt: 2 }} value={newAddress} onChange={(e) => setNewAddress(e.target.value)} />
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={addAddress}>Add</Button>
          <List sx={{ mt: 2 }}>
            {addresses.map((address, index) => (
              <ListItem key={index}>
                <ListItemText primary={address} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
    </div>
  );
};

export default Addresses;
