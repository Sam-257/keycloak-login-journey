import React,{useState, useEffect} from "react";
import { useKeycloak } from "@react-keycloak/web";
import {AppBar, Toolbar,Grid, Button,ButtonGroup} from '@material-ui/core';
import Logo from './logo.jpg';

import styled from 'styled-components';

  

const Nav = ({realmId,setRealmId}) => {
 const { keycloak } = useKeycloak();
 const types = ['Axiom', 'Axiom1'];
 const [active, setActive] = useState("Axiom");

 useEffect(() => {
    setActive(JSON.parse(window.localStorage.getItem('active')));
    
  }, []);
  
  useEffect(() => {
    window.localStorage.setItem('active', JSON.stringify(active));
  }, [active]);
  

  const changeActive = (type) =>{
    return setActive(type);
  }

  const changeRealmId = (type) => {

      return setRealmId(type);
  }

 const Button1 = styled.button`
background-color: black;
color: white;
font-weight: bold;
font-size: 16px;
padding: 5px 20px;
border-radius: 5px;
margin: 10px;
cursor: pointer;
&:disabled {
  color: grey;
  opacity: 0.7;
  cursor: default;
}
`;
const ButtonToggle = styled(Button1)`
  opacity: 0.6;
  ${({ active }) =>
  active &&
    `
    opacity: 1;
  `}
`;
const ButtonGroup1 = styled.div`
  display: flex;
`;

 //const realmId = realm;
 return (
   <div>
       <AppBar position = 'static' >
            <Toolbar>
                <Grid container>
                    <Grid item xs = {3}>
                        <img src = {Logo} alt = "AxiomIO"  style={{ width: 140, height: 60 }}/>
                    </Grid>
                    <Grid item xs = {2} />
                    <Grid item xs = {3}>    
                        <ButtonGroup variant="text">
                            <Button style={{fontWeight: 'bold',fontSize: 20, color: "#ffffff",marginTop: 10}}  href="/">Home Page</Button>
                            <Button style={{fontWeight: 'bold',fontSize: 20, color: "#ffffff",marginTop: 10}}  href="/secured">Secured Page</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs = {2} >
                        <ButtonGroup1>
                            {types.map(type => (
                            <ButtonToggle
                                key={type}
                                active={active === type}
                                onClick={() => {changeActive(type); changeRealmId(type)}}
                            >
                                {type}
                            </ButtonToggle>
                            ))}
                        </ButtonGroup1>
                    </Grid>
                    <Grid item xs = {2}>
                        {!keycloak.authenticated &&(
                            <Button variant = "contained" style={{backgroundColor : '#ffffff', marginTop: 10,marginLeft:10, fontWeight: 'bold'}} onClick={() => {/*setRealmId("Axiom");*/ keycloak.login()}}>
                                Login
                            </Button>   
                        )}
                        {!!keycloak.authenticated && (
                            <Button variant = "contained" style={{backgroundColor : '#ffffff', marginTop: 10,marginLeft:10, fontWeight: 'bold'}} onClick={() => {/*setRealmId("Axiom");*/ keycloak.logout()}}>
                                Logout
                            </Button>
                        )}
                        {/* {!keycloak.authenticated &&(
                            <Button variant = "contained" style={{backgroundColor : '#ffffff', marginTop: 10,marginLeft:10, fontWeight: 'bold'}} onClick={() => {setRealmId("Axiom1"); keycloak.login()}}>
                                Login 1
                            </Button>   
                        )}
                        {!!keycloak.authenticated && (
                            <Button variant = "contained" style={{backgroundColor : '#ffffff', marginTop: 10,marginLeft:10, fontWeight: 'bold'}} onClick={() => {setRealmId("Axiom1"); keycloak.logout()}}>
                                Logout 1
                            </Button>
                        )} */}
                        
                        <Button variant = "contained" style={{backgroundColor : '#ffffff', marginTop: 10,marginLeft:10, fontWeight: 'bold'}} href = "/register">
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
     
   </div>
 );
};

export default Nav;
