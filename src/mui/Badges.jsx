import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import  Stack  from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Badges() {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
  <Stack spacing={2} direction="row">
    <Badge badgeContent={401} color="primary">
      <MailIcon color="action" />
    </Badge>
    <Badge badgeContent={510} color="secondary">
    <MailIcon color="action" />
    </Badge>
    <Badge badgeContent={618} color="success">
    <MailIcon color="action" />
    </Badge>
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  </Stack>
  );
}