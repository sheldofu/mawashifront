import data from '../data/sumo.json';
import style from './app.css';

var ctx = document.getElementById('myChart');

console.log(data);

// const fullMap = data.reduce((acc, curVal, index) => {
//     const currentYear = curVal['tournament year'];
//     console.log(currentYear);
//     acc['year'] = { currentYear };
//     return acc;
// }, {});

// console.log(fullMap);

// const years = data.reduce((acc, curVal, index) => {
//     const currentYear = curVal['tournament year'];
//     if (!acc.includes(currentYear)) {
//         acc.push(currentYear);
//     }
//     return acc;
// }, []);

// const months = data[2006].reduce((acc, curVal, index) => {
//     const currentMonth = curVal['tournament month'];
//     if (!acc.includes(currentMonth)) {
//         acc.push(currentMonth);
//     }
//     return acc;
// }, []);

// console.log(months);
// console.log(data);

function produceSets() {
  const byYear = [];
  let yearsWins = [];
  const months = data['2006'].map(row => row.month)
  Object.keys(data).forEach((year) => {
    data[year].forEach((row) => {
      yearsWins.push(row.wins);
    });
    console.log(year, yearsWins);
    let randomNumber = Math.random() * 255;
    let randomNumber2 = Math.random() * 255;
    let randomNumber3 = Math.random() * 255;
    byYear.push({
      label: year,
      data: yearsWins,
      fill: true,
      backgroundColor: `rgba(${randomNumber2}, ${randomNumber}, ${randomNumber3}, 0.2)`,
      borderColor: `rgb(${randomNumber}, ${randomNumber2}, ${randomNumber3})`,
      pointBackgroundColor: `rgb(${randomNumber3}, ${randomNumber}, ${randomNumber2})`,
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
      hidden: true,
    })
    yearsWins = [];
  });
  console.log(months);
  byYear[14].hidden = false;
  byYear[15].hidden = false;
  return {
    labels: months,
    datasets: byYear
  }
}

var myChart = new Chart(ctx, {
    responsive:true,
    maintainAspectRatio: false,
    type: 'radar',
    data: produceSets(),
    options: {
      elements: {
        line: {
          borderWidth: 3
        }
      },
      scale: {
        min: 0,
        max: 15,
      }
    }
});