import React from 'react';
import { Card, CardContent,Grid} from '@mui/material';

const Home = () => {

 return (
    <Grid container style={{marginTop: 20}}> 
        <Grid item sm={3} />
        <Grid item sm={6}>
            <Card align = "center">
                <CardContent>
                    <h1>HOME PAGE </h1>
                    <br />
                    <h3>Visible To All.</h3>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
 );
};

export default Home;