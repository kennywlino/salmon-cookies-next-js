import React, { useState, useEffect } from 'react';

const dailyHours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function getRandomCus(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CookieStore(name, minCust, maxCust, avgSales) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSales = avgSales;
  this.customerNumber = [];
  this.purchedCookie = [];
  this.total = 0;
  CookieStore.all.push(this);
}

CookieStore.prototype.caculateCustomerNumber = function () {
  for (let i = 0; i < dailyHours.length; i++) {
    this.customerNumber.push(getRandomCus(this.maxCust, this.minCust));
  }
};

CookieStore.prototype.caculatePurchedCookie = function () {
  this.caculateCustomerNumber();
  for (let i = 0; i < dailyHours.length; i++) {
    let onTheHour = Math.ceil(this.customerNumber[i] * this.avgSales);
    this.purchedCookie.push(onTheHour);
    this.total += onTheHour;
  }
};

function createTableRow(data) {
  const row = document.createElement("tr");
  data.forEach(datum => {
    const cell = document.createElement("td");
    cell.textContent = datum;
    row.appendChild(cell);
  });
  return row;
};

function createTableHeader(text) {
  const header = document.createElement("th");
  header.textContent = text;
  return header;
};

CookieStore.prototype.render = function () {
  this.caculatePurchedCookie();
  const tableRow = createTableRow([this.name, ...this.purchedCookie, this.total]);
  tableElm.appendChild(tableRow);
};




