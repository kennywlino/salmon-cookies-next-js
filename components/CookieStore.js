import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

let dailyHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm",
"4pm", "5pm", "6pm", "7pm"];

class CookieStore {
  constructor(name, minCust, maxCust, avgSales) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSales = avgSales;
    this.totalCustomers = this.calculateTotalCustomers();
    this.cookiesSold = this.calculateCookiesSold();
    this.totalCookiesSold = this.calculateTotalCookiesSold();
  }

  // calculates the number of customers visited per daily hour using a random number and stores it within the totalCustomers array
  calculateTotalCustomers() {
    let totalCustomers = [];
    for (let i =0; i < dailyHours.length; i++) {
      totalCustomers.push(this.getRandomCustomerCount(this.minCust, this.maxCust));
    }
    return totalCustomers;
  }

  // calculates a random # of customers given the min and max customer
  // values of our CookieStore
  getRandomCustomerCount(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // calculates the # of cookies sold per hour given the total customers
  // that hour and the average sales
  calculateCookiesSold() {
    let cookiesSold = [];
    for (let i = 0; i < dailyHours.length; i++) {
      let currentHourSales = Math.ceil(this.totalCustomers[i] * this.avgSales);
      cookiesSold.push(currentHourSales);
    }
    return cookiesSold;
  }

  // calculates the total # of cookies sold in a day using the
  // cookiesSoldArray
  calculateTotalCookiesSold() {
    return this.cookiesSold.reduce((accumulator, value) => accumulator + value, 0);
  }
}

export default function CookieDisplay() {
  let seattleData = new CookieStore("Seattle", 23, 65, 6.5);
  let dubaiData = new CookieStore("Dubai", 11, 38, 3.7);
  let tokyoData = new CookieStore("Tokyo", 3, 24, 1.2);
  let parisData = new CookieStore("Paris", 20, 38, 3.7);
  let limaData = new CookieStore("Lima", 2, 16, 4.6);

  let allCookieStores = [seattleData, dubaiData, tokyoData, parisData, limaData];
  
  let dailyHoursTableCells = dailyHours.map(hour => {
    return <TableCell key={hour}>{hour}</TableCell>
  });

  let cookieStoresTableRows = allCookieStores.map(store => {
    return (
      <TableRow
        key={store.name}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {store.name}
        </TableCell>
        {store.cookiesSold.map((hour, index) => 
          <TableCell key={`${store.name}-${dailyHours[index]}`} align="right">{hour}</TableCell>
        )}
        <TableCell align="right">{store.totalCookiesSold}</TableCell>
      </TableRow>
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="cookie-sales">
        <TableHead>
          <TableRow>
            <TableCell>Locations</TableCell>
            {dailyHoursTableCells}
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cookieStoresTableRows}
        </TableBody>
      </Table>
    </TableContainer>
  );
}