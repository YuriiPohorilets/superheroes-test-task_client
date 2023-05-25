export const title = {
  fontSize: '40px',
  textAlign: { xs: 'center', md: 'left' },
};

export const toolsWrapper = {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '16px',

  alignItems: 'center',
};

export const container = {
  mt: '32px',
  mb: '40px',

  display: 'flex',
  gap: '32px',
  flexWrap: 'wrap',
};

export const mediaWrapper = {
  width: '100%',

  display: 'flex',
  gap: '16px',
  flexDirection: { xs: 'column', md: 'row' },
};

export const imgWrapper = {
  maxWidth: '360px',
  maxHeight: '500px',

  flex: '1 0 auto',

  boxShadow: 3,
  borderRadius: '16px',

  overflow: 'hidden',
};

export const previewImg = {
  maxWidth: '365px',
  minWidth: '100%',
  height: '500px',

  objectFit: 'cover',
};

export const contentContainer = {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: { xs: '32px', md: '16px' },
};

export const subtitle = {
  width: '190px',

  fontSize: '22px',
  fontWeight: 700,
  textTransform: 'uppercase',
};

export const text = {
  fontSize: '22px',
  fontWeight: 300,
  textTransform: 'none',
};

export const input = {
  '& .MuiInput-underline:before': { borderBottomColor: 'neutral.light' },
  '& .MuiInput-underline': { color: '#fff', fontSize: '20px' },
  '& .MuiInputBase-input.Mui-disabled': { WebkitTextFillColor: '#fff', fontSize: '20px' },

  width: '100%',
};

export const inputEditing = {
  '& .MuiInput-underline:before': { borderBottomColor: 'neutral.light' },
  '& .MuiInput-underline': { color: '#fff', fontSize: '20px', bgcolor: 'neutral.light' },
  '& .MuiInputBase-input.Mui-disabled': { WebkitTextFillColor: '#fff', fontSize: '20px' },

  width: '100%',
};

export const textFieldWrapper = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: { xs: '16px', md: '54px' },
  flexDirection: { xs: 'column', md: 'row' },
};

export const modal = {
  position: 'absolute',
  top: '50%',
  left: '50%',

  transform: 'translate(-50%, -50%)',

  p: '16px',
  width: 400,

  bgcolor: 'primary.light',
  boxShadow: 24,
  borderRadius: '16px',
};
