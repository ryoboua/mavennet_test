import React from 'react'
import { Box } from "grommet"


export default ({ photo }) => (
    <Box
    animation="fadeIn"
    elevation="large"
    width="medium"
    round="medium"
    margin="medium"
    align="center"
    >
        <h1>{photo.title}</h1>
        <p>albumId: {photo.albumId}</p>
        <p>id: {photo.id}</p>
        <img src={photo.url} alt="" height="150" width="150"/>
    </Box>
)