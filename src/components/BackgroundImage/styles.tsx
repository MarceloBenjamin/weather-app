import { styled, Box } from '@mui/material';

export const Container = styled(Box)({
  position: 'fixed',
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  opacity: 0.35,
});

export const Img = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export const Source = styled('source')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
