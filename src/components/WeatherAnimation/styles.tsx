import { styled, Box } from '@mui/material';

export const Container = styled(Box)({
  width: 90,
  height: 90,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Shadow = styled(Box)({
  position: 'absolute',
  width: 20,
  height: 20,
  borderRadius: 10,
  boxShadow: '0 0 80px 45px rgba(0,0,0,0.2)',
});
