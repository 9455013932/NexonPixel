import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Divider,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar
} from '@mui/material';

const ProductProcess = () => {
  const features = [
    { processItems: '01', title: 'Customization', desc: 'Every modification at your will would be entertained.' },
    { processItems: '02', title: 'Consultation', desc: 'Suggestions regarding best suitability.' },
    { processItems: '03', title: 'Quality', desc: 'Clients satisfaction is of utmost importance to us.' },
    { processItems: '04', title: 'Support', desc: 'We will always be there for you if any mishap occurs.' },
  ];

  return (
    <Container maxWidth={false} sx={{ py: 8, bgcolor: "#091D3E", color: "#FFFFFF" }}>
      <Box sx={{ mb: 6 }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <Typography variant="h5" sx={{ color: "#005AF9" }} gutterBottom>
            Work Process
          </Typography>
          <Typography variant="h4" paragraph>
            Fixing issues before they happen.
          </Typography>
          <Typography variant="body1" paragraph>
            We work closely with our clients to understand their specific needs and provide customized services to help them achieve their goals.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mt: 2, position: 'relative' }}>
          {features.map((feature) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={feature.title}
              sx={{
                p: 3,
                height: '100%',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                color: '#FFFFFF',
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  position: 'relative',
                  overflow: 'visible',
                  textAlign: 'center',
                }}
              >
                {/* Number Circle */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '-25%',  // Adjusted to make it half inside
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bgcolor: 'primary.main',
                    width: 70,  // Increased for better visibility
                    height: 70,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    color: 'white',
                    fontWeight: 'bold',
                    boxShadow: 3, // Adds depth like the reference image
                  }}
                >
                  {feature.processItems}
                </Box>

                {/* Title */}
                <Typography variant="h6" gutterBottom sx={{ mt: 5 }}>
                  {feature.title}
                </Typography>

                {/* Description */}
                <Typography variant="body2" color="text.secondary">
                  {feature.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </Box>




    </Container>
  );
};

export default ProductProcess;