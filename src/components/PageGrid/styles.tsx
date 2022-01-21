import { styled, Box, Grid } from '@mui/material';

export const Container = styled(Box)({
  position: 'absolute',
  display: 'flex',
  width: '100%',
  height: '100%',
});

export const ContainerGrid = styled(Grid)({
  flexGrow: 1,
});
