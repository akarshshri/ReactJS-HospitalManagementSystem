import React, { useEffect } from 'react';

const deleted = (e)=>{
      
  console.log(e)
  //return 'deleted()';
 //  let temp2 = []
 //  temp2 = JSON.parse(localStorage.getItem('patinfo'));
 //  temp2.splice(index,1);
 //  localStorage.setItem('patinfo', JSON.stringify(temp2));
 //  patUpdate();
  
  }

function StaffDash() {

  var patient = [{
    name: 'Akarsh Shrivastava',
    age: '23',
    address: '408-CE, AB Road',
    city: 'Bhopal',
    bg: 'B+',
    covid: 'No'
  }, {
    name: 'Dhamendra Kumar',
    age: '30',
    address: 'Log out mahal, VIP Road',
    city: 'Mohali',
    bg: 'A+',
    covid: 'Yes'
  }
  ];

  const patSubmitHandler = (e) => {
    e.preventDefault();
    var name = document.getElementById('name').value
    var age = document.getElementById('age').value
    var address = document.getElementById('address').value
    var city = document.getElementById('city').value
    var patBG = document.getElementById('patBG').value
    var patCovid = document.getElementById('patCovid').value
    let temp = patient;
    if (localStorage.getItem('patinfo') !== null) {
      temp = JSON.parse(localStorage.getItem('patinfo'))
    }
    console.log(temp)
    temp.push({ name: name, age: age, address: address, city: city, bg: patBG, covid: patCovid })
    localStorage.setItem('patinfo', JSON.stringify(temp))
    console.log(JSON.parse(localStorage.getItem('patinfo')))
    document.getElementById('close3').click();
    patUpdate()
  }



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
      <td><button class="deletebtn btn btn-sm btn-danger" id="${index}" onclick="deleted(${index})">Delete</button></td>
       </tr>
       `
      ))
      console.log(document.getElementById('tableBody'))
      document.getElementById('tableBody').innerHTML = s;
    }else{
      patinfo = document.getElementById('doctorinfo')
      patinfo.innerHTML = '<h4 style="color: red; margin-top: 1rem; margin-bottom: 1rem">No Patient at this moment</h4>';
    }
    
    
    //console.log(document.getElementById('branch').value)
  }

 
  
  
  useEffect(() => {
    deleted()
    patUpdate()
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);



  return <div>
    <div className="container my-4">
      <div className="row">
        <div className="col ">
          <h3>New Patient? Click below to Register them into the System</h3>
          <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" style={{marginTop: '1rem'}} >Create Patient</button><br /><br />
          <div className='container d-flex row m-auto' id='doctorinfo' style={{ border: 'grey medium solid' }}>
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
                  <th scope="col">Action</th>
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
        </div>
      </div>
    </div>




    <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel1">Register a Doctor</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className='d-flex m-auto' onSubmit={patSubmitHandler} style={{ width: '70%' }}>
              <div className="col">
                <div className="" style={{ boxSizing: 'border-box' }}>
                  <input className='form-control' type="text" name="name" id="name" placeholder='Name' /><br />
                  <input className='form-control' type="number" name="age" id="age" placeholder='Age' /><br />
                  <input className='form-control' type="text" name="address" id="address" placeholder='Address' /><br />
                  <input className='form-control' type="text" name="city" id="city" placeholder='City' /><br />
                </div>
                <div className="">
                  <select className="form-select" aria-label="Default select example" id='patBG' defaultValue="null">
                    <option >Patient's Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select><br />
                  <select className="form-select" aria-label="Default select example" id='patCovid' defaultValue="No">
                    <option > Is patient Covid Positive</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </select><br />
                  <input className='btn btn-primary' type="submit" value="Submit" id='submit' />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id='close3'>Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default StaffDash;
