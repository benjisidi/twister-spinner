import React, {useGlobal} from 'reactn';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default (props) => {
    const [players, setPlayers] = useGlobal("players")
    const eliminate = (player) => {
        delete players[player]
        props.handleClose()
    }
    return (
      <Modal
        open={props.open}
        onClose={props.handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Eliminate Players
                </Typography>
                
            {players && Object.keys(players).map(name => {
                return <Button key={name} sx={{ mt: 2 }} onClick={ ()=>eliminate(name)} color="warning">
            {name}
          </Button>
          })}
        </Box>
      </Modal>
  );
}