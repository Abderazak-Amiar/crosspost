'use client';
import {
  Box,
  Button,
  Grid,
  IconButton,
  Popover,
  Typography,
  styled,
} from '@mui/material';
import { poppins, sfPro_regular } from './fonts';

export const GridSideMenuContainer = styled(Grid)(() => ({
  flexDirection: 'column',
  height: '100vh',
  justifyContent: 'space-around',
  fontFamily: sfPro_regular.style.fontFamily,
  borderRight: 'solid 1px #DBDBDB',
}));

export const GridMenuContainer = styled(Grid)(() => ({
  alignItems: 'center',
  justifyContent: 'space-around',
}));

export const GridContentContainer = styled(Grid)(() => ({
  flexDirection: 'column',
}));

export const GridSideMenuLogo = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '48px',
}));

export const BoxLinksContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBlock: '24px',
}));
export const GridHomeContainer = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}));
export const GridHomeContent = styled(Grid)(() => ({
  flexDirection: 'column',
  width: '80% !important',
  margin: 'auto',
  height: '100vh',
}));
export const GridHeaderContainer = styled(Grid)(() => ({
  flexDirection: 'column',
}));
export const GridHeaderPicture = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'end',
}));

export const TypographyPoppins = styled(Typography)(() => ({
  fontFamily: poppins.style.fontFamily,
  paddingLeft: '8px',
}));
export const TypographyMenuItems = styled(Typography)(() => ({
  paddingLeft: '8px',
}));

export const ButtonUpload = styled(Button)(() => ({
  background: 'black',
  color: 'white',
  borderRadius: '44px',
  width: '163px',
  height: '49px',
  marginInline: '8px',
  '&:hover': {
    background: '#00000095',
  },
}));
export const ButtonUploadDisabled = styled(Button)(() => ({
  background: '#00000050',
  color: 'white',
  borderRadius: '44px',
  width: '163px',
  height: '49px',
  marginInline: '8px',
  '&:hover': {
    background: '#00000050',
  },
}));
export const ButtonDone = styled(Button)(() => ({
  background: '#EFEFEF',
  color: 'black',
  borderRadius: '44px',
  width: '163px',
  height: '49px',
  marginInline: '8px',
}));
export const CoverTypographyTitle = styled(Typography)(() => ({
  color: '#737373',
  wordWrap: 'break-word',
  width: '50%',
  margin: 'auto',
  textAlign: 'center',
}));
export const HeaderGridRoute = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));
export const ImageCoverGrid = styled(Grid)(() => ({
  background: 'blue',
  borderRadius: '18px',
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  marginBlock: '32px',
  boxShadow: '-15px 19px 31px -13px rgba(0,0,0,0.4)',
}));
export const SelectedImageGrid = styled(Grid)(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginBlock: '16px',
}));

export const CustomPopover = styled(Popover)(() => ({
  width: '100vw',
  height: '100vh',
  background: '#D9D9D973',
  backdropFilter: 'blur(3px)',
}));
export const CustomIconButton = styled(Button)(() => ({
  position: 'relative',
  width: 'auto',
  height: '0%',
  left: '105px',
  top: '2px',
  color: 'orange',
  border: 'solid 1px black',
}));
export const ButtonsGrid = styled(Grid)(() => ({
  textAlign: 'center',
}));
export const CoverGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));
export const SelectedImageBox = styled(Box)(() => ({
  width: '220px',
  height: '330px',
  borderRadius: '28px',
  border: 'solid 1px #00000026',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const ImagesListBox = styled(Box)(() => ({
  position: 'relative',
}));
export const SelectImageBox = styled(Box)(() => ({
  cursor: 'pointer',
  boxSizing: 'inherit',
}));
export const CoverImageComponent = styled(Grid)(() => ({
  zIndex: 10,
  position: 'relative',
  transition: 'transform 0.7s ease-out',
  '&:hover': {
    border: 'solid 4px #0095F6',
    borderRadius: '8px',
    transform: 'scale(1.2)',
    transition: 'transform 0.2s ease-in, border 0.1s ease-in',
    background: '#0095F6',
    width: '90px',
    zIndex: 20,
  },
}));
export const LayerBox = styled(Box)(() => ({
  backgroundColor: '#EDEDED73',
  transition: 'background-color 500ms linear',
  width: '100%',
  height: '100%',
  position: 'absolute',
  '&:hover': {
    backgroundColor: 'transparent',
    transition: 'background-color 500ms linear',
  },
}));
// export const  = styled()(() => ({

// }));
