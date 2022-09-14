import TextField from '@mui/material/TextField';
import { Container, Form, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const CustomerLogin = () => {
  const history = useHistory();
  return (
    <Container className="d-flex justify-content-center align-items-center"
    >

    <Card style={{width: 600}} className="p-5">
      <h2 className="m-auto">Welcome to PartyMaker</h2>
      <h4 className="m-auto mt-3">Register your new customer account</h4>
      <Form 
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          className="d-flex flex-column">

        <TextField
        className="mt-3"
        required
        label="Email" 
        variant="standard"
      />
        <TextField
        className="mt-3"
        required
        label="UserName" 
        variant="standard"
      />
        <TextField
        className="mt-3"
        required
        type="password"
        label="Password" 
        variant="standard"
      />
        <TextField
        className="mt-3"
        required
        type="password"
        label="ConfirmPassword" 
        variant="standard"
      />
      <Button 
      color="success" 
      className="mt-4" 
      variant="contained">Sign up
      </Button>
      <Link onClick={()=>history.push("/")}  className="m-auto mt-3" underline="hover">
        {'Account is already exist'}
      </Link>
      </Form> 
    </Card>
  </Container>
  )
}

export default CustomerLogin;