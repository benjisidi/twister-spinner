import React, {useState} from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";
import { useGlobal } from 'reactn';
import { useNavigate } from "react-router-dom";

import Player from "./player"

export default (props) => {
    let navigate = useNavigate();
        const {register, handleSubmit} = useForm()
    const [nPlayers, setNPlayers] = useState(1)
    const [players, setPlayers] = useGlobal('players')
    const updatePlayers = (e) => {
        let val = parseInt(e.target.value)
        if (isNaN(val) || val < 0) { val = 0 }
        if (val > 10) {val = 10}
        setNPlayers(val)
    }
    const onSubmit = (data) => {
        console.log(data)
        const newPlayers = {}
        Object.values(data).forEach(name => {
            newPlayers[name] = new Player(name)
        })
        setPlayers(newPlayers)
        navigate("/play", {replace:true})
    }
    return (
        <Container component="main" maxWidth="xs">
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Typography component="h1">
            Game Setup
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
          id="n-players"
          key="n-players"
          label="Number of Players"
                    value={nPlayers}
                   type="number"
                    onChange={e => updatePlayers(e)}
                />
                    {Array(nPlayers).fill(0).map((x, i) => <TextField id={`player-${i}`} key={`player-${i}`} {...register(`player-${i}`)} label={`Player ${i + 1} name`} inputProps={{ required: true }}/>)}
                <Button type="submit">Play!</Button>
                </form>
        </Box>
    </Container>
)
}