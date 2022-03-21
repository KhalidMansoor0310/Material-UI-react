import React from 'react'
import '../App.css'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'
import CardComponent from './CardComponent';
function Container_section() {
    return (
        <div>

            <Container>
                <Grid container my={5}>
                   <CardComponent/>
                   <CardComponent/>
                   <CardComponent/>
                   <CardComponent/>
                   <CardComponent/>
                   <CardComponent/>
                   <CardComponent/>
                   <CardComponent/>
                </Grid>
            </Container>
        </div>
    )
}

export default Container_section
