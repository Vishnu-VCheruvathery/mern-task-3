import { Avatar, Typography } from '@mui/material'
import React from 'react'

const Person = ({ user}) => {
    if (!user || !user.profile) return null;

    const fallbackImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png';
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid black',
          height: '500px',
          padding: '5px'
        }}

      >
        <div>
        <Avatar style={{ width: '100px', height: '100px' }} src={user.avatar} />
        </div>
        <div style={{ display: 'flex', gap: '5px' }}>
          <Typography variant='h5'>{user.profile.firstName}</Typography>
          <Typography variant='h5'>{user.profile.lastName}</Typography>
        </div>
       
        <div style={{display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant='subtitle1' style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center'}}>{user.jobTitle}</Typography>
          <Typography>{user.profile.username}</Typography>
          <Typography>{user.profile.email}</Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center'}}>
          <Typography variant='subtitle1'>Bio:</Typography>
          <Typography variant="body2" style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center'}}> {user.Bio}</Typography>
        </div>
      </div>
    );
  };

export default Person
