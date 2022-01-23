import { styled, Box, Typography } from '@mui/material';

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  width: '100%',
  marginTop: 60,
  marginBottom: 120,
});

export const ContainerInfo = styled(Box)({
  width: 180,
  height: 210,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 15,
  marginLeft: 20,
  marginRight: 20,
  backgroundColor: '#fff',
  padding: 10,
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const ContainerTitle = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const Title = styled(Typography)({});

export const ContainerValue = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

export const BoxValue = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
});

export const TempValue = styled(Typography)({
  fontSize: 50,
});

export const TempType = styled(Typography)({
  fontSize: 20,
  marginTop: 14,
});
