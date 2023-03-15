import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import LoginPage from "./components/Login/LoginPage";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Dashboard from "./components/Dashboard/DashboardPage";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>,
        errorElement: <ErrorPage/>
    }
]);

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                <RouterProvider router={router}/>
            </div>
        );
    }
}

export default App;
