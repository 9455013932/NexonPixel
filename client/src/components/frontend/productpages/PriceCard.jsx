import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Box
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function PricingCard({Product}) {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <Card sx={{ maxWidth: 400, margin: '0 auto' }}>
      {/* Tabs for Basic / Standard / Premium */}
      <Tabs value={tabIndex} onChange={handleTabChange} variant="fullWidth">
        <Tab label="Basic" />
        <Tab label="Standard" />
        <Tab label="Premium" />
      </Tabs>

      <CardContent>
        {/* BASIC TAB CONTENT */}
        {tabIndex === 0 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Basic AR Solutions
            </Typography>
            <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', mb: 2 }}>
              ₹7,277
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Get started with a basic AR experience for your mobile app or website.
            </Typography>

            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
              5-day delivery • 1 Revision
            </Typography>

            <List dense>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Functional game" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="1 level" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="1 plugin" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Source code" />
              </ListItem>
            </List>

            <Button variant="contained" sx={{ mt: 2 }} fullWidth>
              Continue
            </Button>
          </Box>
        )}

        {/* STANDARD TAB CONTENT */}
        {tabIndex === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Standard AR Solutions
            </Typography>
            <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', mb: 2 }}>
              ₹10,000
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              A more advanced AR experience with additional features.
            </Typography>

            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
              7-day delivery • 2 Revisions
            </Typography>

            <List dense>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Functional game + advanced features" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="3 levels" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="2 plugins" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Source code & documentation" />
              </ListItem>
            </List>

            <Button variant="contained" sx={{ mt: 2 }} fullWidth>
              Continue
            </Button>
          </Box>
        )}

        {/* PREMIUM TAB CONTENT */}
        {tabIndex === 2 && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Premium AR Solutions
            </Typography>
            <Typography variant="h4" component="p" sx={{ fontWeight: 'bold', mb: 2 }}>
              ₹15,000
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              A fully customized AR solution with premium support.
            </Typography>

            <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
              10-day delivery • Unlimited Revisions
            </Typography>

            <List dense>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Fully customized AR game" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Multiple levels & expansions" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Multiple plugins" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <CheckIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Source code & dedicated support" />
              </ListItem>
            </List>

            <Button variant="contained" sx={{ mt: 2 }} fullWidth>
              Continue
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
