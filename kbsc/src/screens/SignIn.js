import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const SignIn = () => {

  const handleSubmit = (event) => {
    //window.location.href="/"
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email=data.get('email');
    const password = data.get('password')
    console.log(email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <TextField 
      margin = "normal"
      label="Email Address" 
      required 
      fullWidth 
      name = "email" 
      autoComplete="email"
      autoFocus
      />
      <TextField 
      margin = "normal"
      label="Password" 
      type="password" 
      required 
      fullWidth 
      name = "password" 
      autoComplete="current-password"
      />
      <Button type="submit" fullWidth
      variant="contained" sx={{mt:3, mb:2}}> Sign in </Button>

      <Grid container>
        <Grid item>
          <Link href="/SignUp" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
      </Box>
      </Box>
    </Container>
  );
}

export default SignIn