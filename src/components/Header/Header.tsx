import './Header.scss';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import contilioLogo from '../../assets/contilio_logo.png';

class Header extends React.Component {
    render() {
        return (
            <AppBar className="header" position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <img width={60} height={60} src={contilioLogo} alt="My Logo"/>
                        <Typography
                            className="header-title"
                            marginLeft={2}
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                        >
                            Contilio
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
}

export default Header;