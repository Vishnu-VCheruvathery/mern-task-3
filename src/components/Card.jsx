import React from 'react'
import {Box, Avatar, Stack, Typography} from '@mui/material'

const Card = ({ user, onClick, selectedUser }) => {
  const isSelected = user === selectedUser;

  return (
    <Box
      onClick={() => onClick(isSelected ? null : user)}
      sx={{
        border: '1px solid black',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '10px',
        backgroundColor: isSelected ? '#cceeff' : 'inherit', // Add background color for selected user
      }}
    >
      <Box>
        <Avatar style={{ width: '100px', height: '100px' }} src={user.avatar} />
      </Box>
      <Stack>
        <div style={{ display: 'flex', gap: '5px' }}>
          <Typography variant='h5'>{user.profile.firstName}</Typography>
          <Typography variant='h5'>{user.profile.lastName}</Typography>
        </div>
        <Typography variant='h6'>{user.jobTitle}</Typography>
        <Typography variant='body2'>{user.Bio}</Typography>
      </Stack>
    </Box>
  );
};

export default Card
