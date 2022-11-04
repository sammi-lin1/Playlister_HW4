import React, {useContext} from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Alert } from '@mui/material';
import AuthContext from '../auth';

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

export default function MUIErrorModal() {
    const { auth } = useContext(AuthContext);

    function handleCloseModal() {
        auth.closeErrorModal();
    }

    return (
        <Modal className="testmodal"
            open={auth.err}
        >
            <Box sx={style}
            textAlign='center'>
            {<Alert severity="error"> {auth.errMsg}</Alert>  }
                    <Button variant="contained"
                    onClick={handleCloseModal}> Close </Button>
                </Box>
        </Modal>
    );
}