import { styled, Box, Button, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: 60,
  paddingRight: 60,
  [theme.breakpoints.up('xs')]: { paddingTop: '60px' },
  [theme.breakpoints.up('lg')]: { paddingTop: '120px' },
}));

export const ContainerTop = styled(Box)({
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
});

export const UpdateButton = styled(Button)({
  height: 56,
  borderRadius: 15,
  marginRight: 15,
});

export const ContainerInfo = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 15,
  [theme.breakpoints.up('xs')]: { flexDirection: 'column' },
  [theme.breakpoints.up('lg')]: { flexDirection: 'row' },
}));

export const ContainerDetails = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const Title = styled(Typography)({
  fontSize: 42,
  marginLeft: -4,
});

export const Subtitle = styled(Typography)({
  textTransform: 'capitalize',
});

export const ContainerWind = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('xs')]: { marginTop: '0px' },
  [theme.breakpoints.up('lg')]: { marginTop: '120px' },
}));

export const ContainerTemp = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  height: '100%',
  alignItems: 'center',
});

export const ContainerValues = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
});

export const TempValue = styled(Typography)({
  fontSize: 102,
});

export const TempType = styled(Typography)({
  fontSize: 42,
  marginTop: 26,
});

export const ContainerAnimation = styled(Box)({
  marginLeft: 15,
});

export const Text = styled(Typography)({});
