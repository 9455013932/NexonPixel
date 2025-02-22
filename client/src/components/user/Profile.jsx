import React, { useEffect, useState } from "react";
import { Container, Card, CardContent, Typography, TextField, Button, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { fetchUser } from "../../redux/authSlice.js";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ name: "", email: "" });
  const { user, status } = useSelector((state) => state.auth);
  const handleEdit = () => setEditMode(!editMode);
  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser());
    } else {
      setUpdatedUser(user);
    }
  }, [dispatch, user]);
  return (

    <div className="bg-[#EEEEEE] h-screen ">
      {/* <UserNavbar /> */}
    <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Card sx={{ width: "100%", p: 3 }}>
        <CardContent>
          <Typography variant="h5">Profile</Typography>
          <Typography variant="body2" color="textSecondary">Manage your personal information</Typography>
          <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
            {editMode ? (
              <TextField name="name" value={user.name} onChange={handleChange} fullWidth />
            ) : (
              <Typography variant="h6">{user.name}</Typography>
            )}
            <IconButton onClick={handleEdit}><EditIcon /></IconButton>
          </div>
          <Typography variant="body1" sx={{ mt: 2 }}>{user.email}</Typography>
        </CardContent>
      </Card>
    </Container>

          {/* <Addresses/> */}
    </div>
  );
};

export default Profile;
