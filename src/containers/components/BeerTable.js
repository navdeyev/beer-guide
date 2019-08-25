import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Box from '@material-ui/core/Box';

export const BeerTable = ({beers}) => {
    if (beers.length > 0) {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>First Brewed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {beers.map(beer => (
                        <TableRow key={beer.id}>
                            <TableCell>{beer.name}</TableCell>
                            <TableCell>{beer.description}</TableCell>
                            <TableCell>{beer.first_brewed}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    } else {
        return (
            <Box align="center" data-qa="no-data" color="text.primary">No beers found</Box>
        );
    }
};