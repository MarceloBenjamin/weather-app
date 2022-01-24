import { styled, Modal, Box, Typography, Button } from '@mui/material';

export const ModalStyled = styled(Modal)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingTop: 60,
  outline: 0,
});

export const Container = styled(Box)({
  padding: 20,
  borderRadius: 15,
  backgroundColor: '#fff',
});

export const Title = styled(Typography)({
  fontSize: 20,
});

export const ContainerButtons = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: 30,
});

export const PermissionButton = styled(Button)({
  height: 56,
  borderRadius: 15,
  padding: 0,
});
