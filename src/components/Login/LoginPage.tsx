import React from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import {NavigateFunction, useNavigate} from "react-router-dom";
import "./LoginPage.scss";

interface LoginPageProps {
    navigate: NavigateFunction;
}

interface LoginPageState {
    username: string;
    password: string;
}

function withNavigation(Component: any): (props: any) => JSX.Element {
    return (props) => <Component {...props} navigate={useNavigate()}/>;
}

class LoginPage extends React.Component<LoginPageProps, LoginPageState> {
    constructor(props: LoginPageProps) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    isSubmitDisabled = () => !(this.state.username && this.state.password);

    handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({username: event.target.value});
    };

    handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({password: event.target.value});
    };

    handleSubmit = (
        ev: React.MouseEvent<HTMLAnchorElement> | React.MouseEvent<HTMLButtonElement>
    ) => {
        ev.preventDefault();
        this.props.navigate("/dashboard");
    };

    render() {
        return (
            <Box className="container">
                <Typography className="title" variant="h4">
                    Login Page
                </Typography>
                <Typography className="subtitle" variant="subtitle1">
                    Please enter your username and password.
                </Typography>
                <TextField
                    className="input"
                    label="Username"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                />
                <TextField
                    className="input"
                    label="Password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                <Button
                    className="button"
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={this.isSubmitDisabled()}
                    onClick={(ev) => this.handleSubmit(ev)}
                >
                    Submit
                </Button>
            </Box>
        );
    }
}

export default withNavigation(LoginPage);
