import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Card, Avatar, Typography, Button } from '@mui/material';

const UserProfile = () => {
  const { user, logout } = useAuth();

  return (
    <Card sx={{ p: 3, textAlign: 'center' }}>
      <Avatar
        src={user?.photoURL}
        alt={user?.displayName || 'User'}
        sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }}
      />
      <Typography variant="h6">{user?.displayName || 'Guest'}</Typography>
      <Typography variant="body2" color="textSecondary">
        {user?.email || 'No email available'}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        sx={{ mt: 2 }}
        onClick={logout}
      >
        Logout
      </Button>
    </Card>
  );
};

export default UserProfile;
