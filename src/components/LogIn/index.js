import React from 'react';

import { Card, CardContent, Typography, CardActions, Button, Grid  } from '@mui/material';

const Login = () =>{
    return(
        <>
            <Grid container alignItems="center" style={{marginTop: 20}}> 
                <Grid item sm={3} />
                <Grid item sm={6}>
                    <Card>
                        <CardContent>
                            <Typography sx={{ fontSize: 60, textAlign: 'Center', fontFamily: "Subscribe Shadow", textDecoration: "underline", textDecorationStyle: 'double'}}>
                                LOGIN
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                adjective
                            </Typography>
                            <Typography variant="body2">
                                well meaning and kindly.
                            <br />
                            {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>    
                    </Card> 
                </Grid>
                
            </Grid>
            
           
        </>
    );
};

export default Login;