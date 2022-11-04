import { useContext } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 100,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIRemoveSongModal() {
    const { store } = useContext(GlobalStoreContext);

    function handleConfirmRemoveSong () {
        store.addRemoveSongTransaction();
    }

    function handleCancelRemoveSong () {
        store.hideModals();
    }
    
    let modalClass = "modal";
    if (store.isRemoveSongModalOpen()) {
        modalClass += " is-visible";
    }
    let songTitle = "";
    if (store.currentSong) {
        songTitle = store.currentSong.title;
    }

    return (
        <Modal
            open={store.currentSong}>
            <Box sx={style}>
                <Grid
                    id="remove-song-modal"
                    className={modalClass}
                    data-animation="slideInOutLeft">
                    <Grid className="modal-root" id='verify-remove-song-root'>
                        <Typography variant="h6" component="h2" className="modal-north">
                            Remove {songTitle}?
                        </Typography>
                            <Grid className="modal-center">
                                <Grid className="modal-center-content">
                                    Are you sure you wish to permanently remove {songTitle} from the playlist?
                                </Grid>
                            </Grid>
                            <Grid className="modal-south">
                                <Button type="button"
                                    variant='contained'
                                    id="remove-song-confirm-button" 
                                    className="modal-button" 
                                    onClick={handleConfirmRemoveSong}> Confirm </Button>
                                <Button 
                                    variant='outlined'
                                    type="button" 
                                    id="remove-song-cancel-button" 
                                    className="modal-button" 
                                    onClick={handleCancelRemoveSong}> Cancel </Button>
                            </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
}