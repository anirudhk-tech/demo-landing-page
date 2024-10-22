import { useContext } from 'react';
import { DialogContext } from '../context/context.jsx';
import '../styles/app.css';
import { Chip } from '@mui/material';

export const Login = () => {
    const { setDialogOpen, connected, setConnected, setBalance } = useContext(DialogContext);

    return (
        <Chip color="inherit" label={ connected === true ? "Logout" : "Login"} className="chip" onClick={() => {
            if (connected) {
                setConnected(false);
                setBalance(null);
            } else {
                setDialogOpen(prev => !prev)
            }
        }}/>
    )
}