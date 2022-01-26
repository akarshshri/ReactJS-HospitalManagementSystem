import React, { useEffect } from 'react';
import { Pie ,Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

var data1 = 0;
var data2 = 0;
var Apos = 0;
var Aneg = 0;
var Bpos = 0;
var Bneg = 0;
var Opos = 0;
var Oneg = 0;
var patinfo = JSON.parse(localStorage.getItem('patinfo'));
const chart1 = () => {
  patinfo.forEach(e => {
    if (e.covid === 'Yes') data1++
    else data2++;
  });
  // console.log(data2 , data1)
}
const chart2 = () => {
  patinfo.forEach(e => {
    if (e.bg === 'A+') Apos++
    else if(e.bg=== 'A-') Aneg++;
    else if(e.bg=== 'B+') Bpos++;
    else if(e.bg=== 'B-') Bneg++;
    else if(e.bg=== 'O+') Opos++;
    else if(e.bg=== 'O-') Oneg++;
  });
  //console.log(Apos , Bpos , Opos, Aneg, Bneg, Oneg)
}

chart1();
chart2();
export const data = {
  labels: ['Covid +ve', 'Covid -ve'],
  datasets: [
    {
      label: '# of Votes',
      data: [data2, data1],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};

const labels = ['Blood Group'];
export const BGdata = {
  labels,
  datasets: [
    {
      label: 'A+ ',
      data: [Apos],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'A- ',
      data: [Aneg],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'B+ ',
      data: [Bpos],
      backgroundColor: 'rgba(255, 206, 86, 0.5)',
    },
    {
      label: 'B- ',
      data: [Bneg],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'O+ ',
      data: [Opos],
      backgroundColor: 'rgba(153, 102, 255, 0.5)',
    },
    {
      label: 'O- ',
      data: [Oneg],
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
    },
  ],
};


const patUpdate = () => {
    
  let s = '';
  var patinfo = document.getElementById('tableBody');
  if (localStorage.getItem('patinfo') !== '[]' ) {
    var arr2 = JSON.parse(localStorage.getItem('patinfo'))
    arr2.map((e,index) => (
      s += `<tr>
    <th scope="row">${e.name}</th>
    <td>${e.age}</td>
    <td>${e.address}</td>
    <td>${e.city}</td>
    <td>${e.bg}</td>
    <td>${e.covid}</td>
     </tr>
     `
    ))
    document.getElementById('tableBody').innerHTML = s;
  }else{
    patinfo = document.getElementById('doctorinfo')
    patinfo.innerHTML = '<h4 style="color: red; margin-top: 1rem; margin-bottom: 1rem">No Patient at this moment</h4>';
  }
  //console.log(document.getElementById('branch').value)
}


function DoctorDash() {
  useEffect(() => {
    patUpdate()
  }, []);
  

  return <div className="container">
    <div className="row my-4">
      <div className="col-sm-6 col-md-6 col-lg-6 col-xxl-6">
        <Pie data={data} />
      </div>
      <div className="col-sm-6 col-md-6 col-lg-6 col-xxl-6">
      <Bar options={options} data={BGdata} height={300}/>
      </div>
    </div>
    <h3>Patients's Info</h3>
            <table className="table" id='table' >
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Address</th>
                  <th scope="col">City</th>
                  <th scope="col">Blood Group</th>
                  <th scope="col">Covid</th>
                </tr>
              </thead>
              <tbody id="tableBody">
                <tr>
                  <th scope="row">1</th>
                  <td>Get some Coffee</td>
                  <td><button className="btn btn-sm btn-primary" >Delete</button></td>
                </tr>
              </tbody>
            </table>
  </div>
}

export default DoctorDash;
