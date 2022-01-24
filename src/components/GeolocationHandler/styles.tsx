import { Box, Button, styled, Typography } from '@mui/material';

export const Container = styled(Box)({
  flexGrow: 1,
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  paddingLeft: 60,
  paddingRight: 60,
  paddingBottom: 30,
});

export const Row = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Info = styled(Typography)({
  fontSize: 15,
});

export const ErrorText = styled(Typography)({
  fontSize: 15,
  color: '#652727',
});

export const PermissionButton = styled(Button)({
  height: 36,
  borderRadius: 15,
  padding: 0,
});
