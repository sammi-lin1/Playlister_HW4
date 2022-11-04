import { useContext, useState } from 'react'
import GlobalStoreContext from '../store';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function MUIEditSongModal() {
    const { store } = useContext(GlobalStoreContext);
    const [ title, setTitle ] = useState(store.currentSong.title);
    const [ artist, setArtist ] = useState(store.currentSong.artist);
    const [ youTubeId, setYouTubeId ] = useState(store.currentSong.youTubeId);

    function handleConfirmEditSong() {
        let newSongData = {
            title: title,
            artist: artist,
            youTubeId: youTubeId
        };
        store.addUpdateSongTransaction(store.currentSongIndex, newSongData);        
    }

    function handleCancelEditSong() {
        store.hideModals();
    }

    function handleUpdateTitle(event) {
        setTitle(event.target.value);
    }

    function handleUpdateArtist(event) {
        setArtist(event.target.value);
    }

    function handleUpdateYouTubeId(event) {
        setYouTubeId(event.target.value);
    }

    return (
        <Modal
            open={store.currentList !== null}
        >
            <Box sx={style}>
                <Grid
                id="edit-song-modal"
                className="modal is-visible"
                data-animation="slideInOutLeft">
                <Box
                    id='edit-song-root'
                    className="modal-root">
                    <Box
                        id="edit-song-modal-header"
                        className="modal-north">Edit Song</Box>
                    <Box
                        id="edit-song-modal-content"
                        className="modal-center">
                        <Box id="title-prompt" className="modal-prompt">Title:</Box>
                        <TextField 
                            id="edit-song-modal-title-textfield" 
                            className='modal-textfield' 
                            type="text" 
                            defaultValue={title} 
                            onChange={handleUpdateTitle} />
                        <Box id="artist-prompt" className="modal-prompt">Artist:</Box>
                        <TextField 
                            id="edit-song-modal-artist-textfield" 
                            className='modal-textfield' 
                            type="text" 
                            defaultValue={artist} 
                            onChange={handleUpdateArtist} />
                        <Box id="you-tube-id-prompt" className="modal-prompt">You Tube Id:</Box>
                        <TextField 
                            id="edit-song-modal-youTubeId-textfield" 
                            className='modal-textfield' 
                            type="text" 
                            defaultValue={youTubeId} 
                            onChange={handleUpdateYouTubeId} />
                    </Box>
                    <Box className="modal-south">
                        <Button
                            variant="contained" 
                            type="button" 
                            padding-right={10}
                            id="edit-song-confirm-button" 
                            className="modal-button" 
                            onClick={handleConfirmEditSong}> Confirm </Button>
                        <Button 
                            variant="outlined"
                            type="button"
                            padding-left={10}
                            id="edit-song-cancel-button" 
                            className="modal-button" 
                            onClick={handleCancelEditSong}> Cancel </Button>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Modal>
    );
}