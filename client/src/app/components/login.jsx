import { useContext } from 'react';
import { DialogContext } from '../context/context.jsx';
import '../styles/app.css';
import { Chip } from '@mui/material';

export const Login = () => {
    const { setDialogOpen, connected, setConnected, setBalance } = useContext(DialogContext);

    return (
        <Chip label={ connected === true ? "Logout" : "Login"} className="chip" color="white" style={{ marginRight: 'auto' }} onClick={() => {
            if (connected) {
                setConnected(false);
                setBalance(null);
            } else {
                setDialogOpen(prev => !prev)
            }
        }}/>
    )
}