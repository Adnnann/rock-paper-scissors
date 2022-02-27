import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { getModal, openModal } from '../features/gameSlice';
import { useDispatch, useSelector } from 'react-redux';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:'90%',
  height:'90%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 20,
  p: 4,
};

const RulesModal = () => {

  const dispatch = useDispatch()
  const modalStatus = useSelector(getModal)
  
  const handleClose = () => dispatch(openModal(false));
  
  //modal window with game rules
  return (
    <div>
    
      <Modal
        open={modalStatus}
        aria-labelledby="Rules"
        aria-describedby="rules"
      >
    
        <Box sx={style}>
        
        <CancelPresentationIcon style={{marginLeft:"95%"}} onClick={handleClose}/>

          <Typography id="modal-modal-title" variant="h4" style={{textDecoration:"underline"}}>
            Game Rules
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }} variant='h6' style={{paddingLeft:'2%'}}>
            Rock breaks scissors and therefore rock wins over scissors. 
            Rock loses against paper
          </Typography>
  
          <Typography id="modal-modal-description" sx={{ mt: 2 }} variant='h6' style={{paddingLeft:'2%'}}>
            Scissors cut paper therefore scissors win over paper. Scissors lose against rock 
            Scissors lose against rock
          </Typography>
     
          <Typography id="modal-modal-description" sx={{ mt: 2 }} variant='h6' style={{paddingLeft:'2%'}}>
           Paper covers rock therefore paper wins over rock. 
           Paper loses against scissors 
          </Typography>
       
          <Typography id="modal-modal-description" sx={{ mt: 2 }} variant='h6' style={{paddingLeft:'2%'}}>
            If the player and computer make the same selection, there is a tie.
          </Typography>
       
        </Box>

      </Modal>
    </div>
  );
}

export default RulesModal