import { styled, Box, Button } from '@mui/material';

export const Container = styled(Box)({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: 60,
  paddingRight: 60,
});

export const ContainerInput = styled(Box)({
  width: '100%',
  height: 'fit-content',
  display: 'flex',
  flexDirection: 'row',
  marginTop: 120,
});

export const SearchButton = styled(Button)({
  height: 56,
  marginLeft: 15,
  borderRadius: 15,
  padding: 0,
});
