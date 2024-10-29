import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Usertable = () => {
  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">ghf</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      

            <TableRow >
              <TableCell component="th" scope="row">
                fgff
              </TableCell>
              <TableCell align="right">jfh</TableCell>
              <TableCell align="right">dsg</TableCell>
              <TableCell align="right">hfv</TableCell>
              <TableCell align="right">bbhnf</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                gdtt
              </TableCell>
              <TableCell align="right">jfh</TableCell>
              <TableCell align="right">dsg</TableCell>
              <TableCell align="right">hfv</TableCell>
              <TableCell align="right">bbhnf</TableCell>
            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
                gffd
              </TableCell>
              <TableCell align="right">jfh</TableCell>
              <TableCell align="right">dsg</TableCell>
              <TableCell align="right">hfv</TableCell>
              <TableCell align="right">bbhnf</TableCell>
            </TableRow>
            
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Usertable