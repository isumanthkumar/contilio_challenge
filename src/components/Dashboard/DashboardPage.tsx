import React, { Component } from 'react';
import { Container, Typography, Table, TableHead, TableRow, TableCell,
    TableBody,
    Paper,
    Slider,
} from '@mui/material';

import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer,} from 'recharts';

import './DashboardPage.scss';

interface Attribute {
    name: string;
    value: number;
    unit: string;
}

interface Item {
    title: string;
    attributes: Attribute[];
}

interface DashboardProps {}

interface DashboardState {
    data: Item[];
    currentItemIndex: number;
}

class Dashboard extends Component<DashboardProps, DashboardState> {
    constructor(props: DashboardProps) {
        super(props);
        this.state = {
            data: [],
            currentItemIndex: 0,
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        try {
            fetch('data.json')
                .then((response) => response.json())
                .then((data) => this.setState({ data }));
        } catch (error) {
            console.error(error);
        }
    };

    handleSliderChange = (event: any, value: number | number[]) => {
        this.setState({ currentItemIndex: value as number });
    };

    render() {
        const { data, currentItemIndex } = this.state;
        const currentItem = data[currentItemIndex];

        return (
            <Container className="root">
                <Typography variant="h5" gutterBottom>
                    {currentItem?.title}
                </Typography>
                <div className="content">
                    <Paper className="table">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Value</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {currentItem?.attributes.map((attribute: Attribute, index: number) => (
                                    <TableRow key={index}>
                                        <TableCell>{attribute.name}</TableCell>
                                        <TableCell>{`${attribute.value} ${attribute.unit}`}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>

                    <Paper className="chart">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={currentItem?.attributes}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </Paper>
                </div>
                <Slider
                    className="slider"
                    value={currentItemIndex}
                    min={0}
                    max={data.length - 1}
                    onChange={this.handleSliderChange}
                    aria-labelledby="item-slider"
                />
            </Container>
        );
    }
}

export default Dashboard;
