let dailyHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm",
"4pm", "5pm", "6pm", "7pm"];

class CookieStore {
  constructor(name, minCust, maxCust, avgSales) {
    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSales = avgSales;
    this.totalCustomers = [];
    this.cookiesSold = [];
    this.total = 0;
  }

  // calculates the number of customers visited
  // per daily hour using a random number
  calculateTotalCustomers() {
    for (let i =0; i < dailyHours.length; i++) {
      this.totalCustomers.push(this.getRandomCustomerCount(this.minCust, this.maxCust));
      // get random # here
    }
  }

  // calculates a random # of customers given
  // the min and max customer values of our CookieStore
  getRandomCustomerCount(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}

export default function CookieDisplay() {
  let seattleData = new CookieStore("Seattle", 23, 65, 6.5);
  // let tokyoData ...
  
  // seattleData.name + seattleData.cookiesSold + seattleData.total

  // after preparing CookieStores for each city
  // make a table with Material UI
  // https://mui.com/material-ui/react-table/
  // where each CookieStore represents a row in the table with <TableRow>
  
  return (<>
        </>);
}