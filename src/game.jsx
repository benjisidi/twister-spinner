import { Link, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useGlobal } from 'reactn';
import EliminateModal from './eliminate-modal';
const LIMBS = {
    leftHand: "Left Hand",
    rightHand: "Right Hand",
    leftFoot: "Left Foot",
    rightFoot: "Right Foot"
}
export default (props) => {
    const [command, setCommand] = useState("Press SPIN to start.")
    const [color, setColor] = useState("")
    const [turn, setTurn] = useState(0)
    const [eliminateOpen, setEliminateOpen] = useState(false)
    const [players, setPlayers] = useGlobal('players')
    const [spinDisabled, setSpinDisabled] = useState(false)
    const spin = () => {
        console.log(turn, players, color, command)
        const [name, player] = Object.entries(players)[turn]
        const [newLimb, newColor] = player.twist()
        setCommand(`${name.toUpperCase()}: ${LIMBS[newLimb]} `)
        setColor(newColor.toUpperCase())
        const nPlayers = Object.keys(players).length
        setTurn((turn + 1) % nPlayers)
    }
    const handleElimination = () => {
        setEliminateOpen(false)
        if (Object.keys(players).length == 1) {
            setCommand(`${Object.keys(players)[0].toUpperCase()} wins!!`)
            setColor("")
            setSpinDisabled(true)
        }
    }
    return (
        <Container component="main" maxWidth="xs">
            {players == undefined && <Navigate to="/"/>}
            <EliminateModal open={eliminateOpen} handleClose={handleElimination}/>
             <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                <Typography>{command}<span style={{color: color.toLowerCase()}}>{color}</span></Typography>
                <Button disabled={ spinDisabled} onClick={() => spin()} size="large">SPIN</Button>
                <Button disabled={spinDisabled} onClick={() => setEliminateOpen(true)} color="error">Eliminate Players</Button>
                {spinDisabled &&
                <Link to="/">New Game</Link>}
            </Box>
            </Container>
    )
}