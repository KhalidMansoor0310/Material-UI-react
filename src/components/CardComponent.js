import React from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid'
function CardComponent() {
    return (
        <div>
            <Grid item xs={10} my={3}>
                <Paper elevation={3}>
                    <Box>
                        {/* <Typography variant="h3" component="h2" mt={5} pt={2}>
                                    Wellcome to Material UI
                                </Typography> */}
                        <img src="https://mui.com/static/images/cards/paella.jpg" className="image" alt="" />
                        <Box sx={{ display: 'flex', alignItems: "center" }} my={3} pl={2}>
                            <Rating readOnly value={4.5} precision={0.5}></Rating>
                            <Typography variant="body3" component="p">
                                (641 reviews)
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h5" component="p" pl={2} pb={2}>
                                Price $340 only
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </div>
    )
}

export default CardComponent
