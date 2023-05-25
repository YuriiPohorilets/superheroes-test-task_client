export const title = {
  fontSize: '40px',
  textAlign: { xs: 'center', md: 'left' },
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
  // justifyContent: "space-between",
  // flexWrap: "wrap",
  gap: '16px',
};

export const imgWrapper = {
  minWidth: '360px',
  height: '500px',

  boxShadow: 3,
  borderRadius: '16px',

  overflow: 'hidden',
};

export const previewImg = {
  width: '365px',
  height: '500px',

  objectFit: 'cover',
};

export const contentContainer = {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
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

export const textFieldWrapper = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '54px',
  justifyContent: 'space-between',
};
