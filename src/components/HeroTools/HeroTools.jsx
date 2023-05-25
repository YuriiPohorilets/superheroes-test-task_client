import { Box, Button } from '@mui/material';
import { outlinedBtn } from 'shared/commonStyles';

export const HeroTools = ({ handleClickOpenDialog, isEditing, handleEdit, openModal }) => {
  return (
    <Box sx={{ display: 'flex', gap: '8px', mb: '24px' }}>
      {isEditing ? (
        <>
          <Box sx={{ ml: '24px' }}>
            <Button
              onClick={openModal}
              variant="outlined"
              sx={{
                ...outlinedBtn,
                '&:hover': {
                  bgcolor: 'neutral.darker',
                  borderColor: 'primary.darker',
                  boxShadow: 3,
                },
                mr: '8px',
              }}
            >
              Add image
            </Button>

            <Button onClick={handleClickOpenDialog} variant="outlined" sx={outlinedBtn}>
              Delete hero
            </Button>
          </Box>

          <Button
            type="submit"
            variant="outlined"
            sx={{
              ...outlinedBtn,
              '&:hover': {
                bgcolor: 'neutral.darker',
                borderColor: 'primary.darker',
                boxShadow: 3,
              },
            }}
          >
            Save
          </Button>

          <Button onClick={handleEdit} variant="outlined" sx={outlinedBtn}>
            Cancel
          </Button>
        </>
      ) : (
        <Button
          onClick={handleEdit}
          variant="outlined"
          sx={{
            ...outlinedBtn,
            '&:hover': {
              bgcolor: 'neutral.darker',
              borderColor: 'primary.darker',
              boxShadow: 3,
            },
          }}
        >
          Edit hero
        </Button>
      )}
    </Box>
  );
};
