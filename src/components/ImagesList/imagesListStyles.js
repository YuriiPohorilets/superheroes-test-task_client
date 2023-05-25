export const container = {
  maxWidth: '700px',
  height: '500px',

  flex: '1 1 auto',

  borderRadius: '16px',

  overflowY: 'scroll',
};

export const list = {
  display: 'flex',
  justifyContent: { xs: 'center', md: 'flex-start' },
  flexWrap: 'wrap',
};

export const item = {
  position: 'relative',

  // width: "100px",
  maxHeight: '300px',
  flexBasis: 'calc((100% - 16px) / 3)',

  borderRadius: '16px',

  overflow: 'hidden',
  cursor: 'pointer',
};

export const iconWrapper = {
  position: 'absolute',
  top: '8px',
  right: '8px',
};

export const icon = {
  color: 'primary.light',
};
