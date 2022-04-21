import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Grid} from '@mui/material';

const Register = ({ keycloak }) =>{
    const [firstName,setfirstName] = useState("");
    const [lastName,setlastName] = useState("");
    const [email,setemail] = useState("");
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    
    const signUp = () =>{
        let user = {
            "firstname": firstName,
            "lastName": lastName,
            "email": email,
            "enabled": "true",
            "username": username,
            "credentials":[{"type":"password", "value": password, "temporary":"false" }]
        };
        // console.warn(user);
        // let body = {
        //     "username":"admin",
        //     "password":"admin",
        //     "grant_type":"password",
        //     "client-id":"admin-cli",
        //     "client_secret":"jyCb2HihEXSUh7Yhem5peFa1ojG7UImQ"
        // };
         let headers = {
            //'Access-Control-Allow-Origin': '*' ,
            // 'Content-Type': "application/x-www-form-urlencoded",
             "Authorization": 'Bearer '+ keycloak.token
        };

        console.log(headers);
        console.log(user);
        axios.post('https://cors-anywhere-herokuapp.com/http://localhost:8080/auth/admin/realms/Axiom/users',
        JSON.stringify(user),JSON.stringify(headers))
        .then((result) =>{console.log(result);})
        .catch((err) => {console.log(err)})
    }



    // const getData = async () =>{
    //     try{
    //         const res = await fetch("https://api.publicapis.org/entries");
    //         const actualData = await res.json();
    //         console.log(actualData);
 
    //     }catch(e){
    //         console.log(e);
    //     }
    // }

    // useEffect(() => {
    //     getData();
    // },[]);

    return(
        <>
            <Grid container style={{marginTop: 20}}> 
                <Grid item sm={3} />
                <Grid item sm={6}>
                    <Card>
                        <CardContent align = 'center'>
                            <Typography sx={{ fontSize: 50,marginBottom: 3, textAlign: 'Center', fontFamily: "Subscribe", textDecoration: "underline", textDecorationStyle: 'double', textDecorationThickness:'from-font'}}>
                                REGISTER
                            </Typography>
                            <input type='text' className='form-control' placeholder='First Name' name = 'firstName' value={firstName} onChange={(e)=>setfirstName(e.target.value)} />
                            <br />
                            <input type='text' className='form-control' placeholder='Last Name' name = 'lastName' value={lastName} onChange={(e)=>setlastName(e.target.value)} />
                            <br />
                            <input type='text' className='form-control' placeholder='Email' name = 'email' value={email} onChange={(e)=>setemail(e.target.value)} />
                            <br />
                            <input type='text' className='form-control' placeholder='Username' name = 'username' value={username} onChange={(e)=>setusername(e.target.value)} />
                            <br />
                            <input type='password' className='form-control' placeholder='Password'  name = 'password' value={password}  onChange={(e)=>setpassword(e.target.value)}/>
                            <br />
                            <input type='password' className='form-control' placeholder='Confirm Password' />
                            <br />
                            <Button variant='contained' size="large" style = {{backgroundColor: "#3f51b5"}} onClick={signUp}>Sign Up</Button>
                        </CardContent>
                    </Card> 
                </Grid>
            </Grid>
        </>
    );
};

export default Register;