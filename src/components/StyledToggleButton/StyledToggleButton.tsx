
import { ToggleButton } from '@mui/material';
import { styled } from '@mui/material/styles';
export const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textTransform: 'none',
  padding: theme.spacing(1.5),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  '& img': {
    width: 80,
    height: 80,
    objectFit: 'contain',
    marginBottom: theme.spacing(1),
  },
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.light,
    borderColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));