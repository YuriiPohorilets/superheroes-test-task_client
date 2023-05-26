import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { containedBtn } from 'shared/commonStyles';

export const Home = () => {
  return (
    <Box>
      <Typography component="h1" sx={{ fontSize: '64px', mb: '16px' }}>
        Welcome to Superheroes!
      </Typography>

      <Typography sx={{ fontSize: '20px', mb: '16px' }}>
        This is an interactive platform that allows you to explore the world of superheroes. Here,
        you can find information about the most popular superheroes, add new ones, and edit existing
        ones.
      </Typography>

      <Typography sx={{ fontSize: '24px', fontWeight: 700 }}>Key Features:</Typography>

      <Box component="ul" sx={{ fontSize: '20px', mb: '16px', listStyle: 'square', pl: '28px' }}>
        <Box component="li">
          <Typography component="span" sx={{ fontWeight: 700, fontSize: '20px' }}>
            View Superheroes List:{' '}
          </Typography>
          Learn more about your favorite heroes and discover new ones.
        </Box>
        <Box component="li">
          <Typography component="span" sx={{ fontWeight: 700, fontSize: '20px' }}>
            Add Superheroes:{' '}
          </Typography>
          Create your unique heroes and share them with others.
        </Box>
        <Box component="li">
          <Typography component="span" sx={{ fontWeight: 700, fontSize: '20px' }}>
            Edit Information:{' '}
          </Typography>
          Make changes to existing superheroes to improve their descriptions and images.
        </Box>
      </Box>

      <Typography sx={{ fontSize: '20px' }}>
        Join us and unlock a world of superheroic adventures!
      </Typography>

      <Typography sx={{ fontSize: '20px', fontWeight: 700, mb: '32px' }}>
        We invite you to experience the power of superheroes!
      </Typography>

      <Button
        component={Link}
        to="/heroes"
        variant="conrained"
        sx={{
          ...containedBtn,
          '&:hover': { bgcolor: 'primary.darker' },
          bgcolor: 'neutral.darker',
        }}
      >
        Get Started
      </Button>
    </Box>
  );
};
