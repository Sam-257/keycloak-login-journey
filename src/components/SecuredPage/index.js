import React from 'react';
import { Card, CardContent,Grid} from '@mui/material';


const secure = (props) => {

 return (
    <Grid container style={{marginTop: 20}}> 
        <Grid item sm={3} />
        <Grid item sm={6}>
            <Card align = "center">
                <CardContent>
                    <h1>SECURED PAGE </h1>
                    <br />
                    <h3>Only {props.organization} Registered Users Can View This.</h3>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
   
 );
};

export default secure;