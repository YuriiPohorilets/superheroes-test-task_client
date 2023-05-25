export const navList = {
  p: 0,

  display: 'flex',
  gap: '8px',
};

export const navItem = {
  '&.active': { bgcolor: 'primary.main', boxShadow: 3 },

  p: '8px 24px',

  fontWeight: 700,
  fontSize: '18px',
  color: 'primary.light',
  letterSpacing: 1.2,

  border: '1px solid',
  borderColor: 'transparent',
  borderRadius: '8px',
};
