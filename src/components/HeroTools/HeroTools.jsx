import { Box, Button } from '@mui/material';
import { outlinedBtn } from 'shared/commonStyles';

export const HeroTools = ({ handleClickOpenDialog, isEditing, handleEdit }) => {
  return (
    <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {isEditing ? (
        <>
          <Button onClick={handleClickOpenDialog} variant="outlined" sx={outlinedBtn}>
            Delete hero
          </Button>

          <Button
            autoFocus
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
