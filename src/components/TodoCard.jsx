import { Button, Divider, Typography } from '@mui/material'
import { Stack } from '@mui/material'
import React from 'react'

const TodoCard = () => {
  return (
    <Stack spacing={2}>
        <Typography variant='h4'>Planifier la semaine</Typography>
        <Typography variant="body">Janvier 3, 2023</Typography>
        <Stack direction="row" spacing={2} >
            <Button sx={{color: "#444", fontWeight: "bold", bgcolor:"#F2F0F0", borderRadius:"50px", px:3}}>Done</Button>
            <Button sx={{color: "#444", fontWeight: "bold", bgcolor:"#F2F0F0", borderRadius:"50px", px:3}}>Delete</Button>
        </Stack>
        <Divider/>
    </Stack>
  )
}

export default TodoCard