import React, { useEffect } from 'react';

function AdminDash() {
  var arr = [{
    name: 'Nikhil',
    speciality: 'NPH'
  }]

  var staff = [{
    name: 'Katie Holms',
    shift: 'Morning'
  }
  ];

  var branch = ['Oncology', 'CVRM'];

  //localStorage.setItem('doctorinfo',JSON.stringify(arr))

  const docSubmitHandler = async (e) => {
    e.preventDefault();
    var docName = document.getElementById('name').value
    var docSpec = document.getElementById('branch').value
    let temp = arr;
    temp = JSON.parse(localStorage.getItem('doctorinfo'))
    temp.push({ name: docName, speciality: docSpec })
    localStorage.setItem('doctorinfo', JSON.stringify(temp))
    //console.log(JSON.parse(localStorage.getItem('doctorinfo')))
    await updateDoc();
  }

  const staffSubmitHandler = async (e) => {
    e.preventDefault();
    var staffName = document.getElementById('staffName').value
    var staffShift = document.getElementById('staffShift').value
    let temp = staff;
    if (localStorage.getItem('staffinfo') !== null) {
      temp = JSON.parse(localStorage.getItem('staffinfo'))
    }
    console.log(temp)
    temp.push({ name: staffName, shift: staffShift })
    localStorage.setItem('staffinfo', JSON.stringify(temp))
    console.log(JSON.parse(localStorage.getItem('staffinfo')))
    updateStaff()

  }

  function updateDoc() {
    let s = '';
    var docinfo = document.getElementById('tableBody');
    if (localStorage.getItem('doctorinfo').length !== 0) {
      var arr2 = JSON.parse(localStorage.getItem('doctorinfo'));
      arr2.map(e => (
        s += `<tr>
        <th scope="row">${e.name}</th>
        <td>${e.speciality}</td>
         </tr>`
      ));
      //console.log(arr2[0].name)
      docinfo.innerHTML = s;
    }
  }

    function updateStaff() {
      let s = '';
      var docinfo = document.getElementById('stafftableBody')
      if (localStorage.getItem('staffinfo').length !== 0) {
        var arr2 = JSON.parse(localStorage.getItem('staffinfo'))
        arr2.map(e => (
          s += `<tr>
        <th scope="row">${e.name}</th>
        <td>${e.shift}</td>
         </tr>`
        ))
        //console.log(arr2[0].name)
        docinfo.innerHTML = s;
      }

      document.getElementById('close1').click();
      //console.log(document.getElementById('branch').value)
    }



    const branchUpdate = () => {
      let s = '';
      branch.map(e => (
        s += `
      <option defaultValue="${e}">${e}</option>
      `
      ))
      //console.log(s)
      document.getElementById('branch').innerHTML = s;
    }


    const branchSubmitHandler = (e) => {
      e.preventDefault();
      branch.push(document.getElementById('newBranch').value)
      document.getElementById('close2').click();
      branchUpdate();
    };

    useEffect(() => {
      updateDoc()
      branchUpdate()
      updateStaff()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return <div>
      <div className="container my-4">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" >Create Doctor</button>

          </div>
          <div className="col">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop2">Create Branch</button>
          </div>
          <div className="col">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop3">Create Staff</button>
          </div>
        </div>
      </div>


      <div className='container d-flex row m-auto' id='doctorinfo' style={{border: 'grey medium solid'}}>
        <h3>Doctor's Info</h3>
        <table className="table"  >
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Speciality</th>
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
      <br />
      <div className='container d-flex row m-auto' id='staffinfo' style={{border: 'grey medium solid'}}>
        <h3>Staff's Info</h3>
        <table className="table"  >
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Shift</th>
            </tr>
          </thead>
          <tbody id="stafftableBody">
            <tr>
              <th scope="row">1</th>
              <td>Get some Coffee</td>
              <td><button className="btn btn-sm btn-primary" >Delete</button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel1" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel1">Register a Doctor</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='d-flex m-auto' onSubmit={docSubmitHandler} style={{ width: '70%' }}>
                <div className="col">
                  <div className="" style={{ boxSizing: 'border-box' }}>
                    <input className='form-control' type="text" name="email" id="name" placeholder='Name' required/><br />
                  </div>
                  <div className="">
                    <select className="form-select" aria-label="Default select example" id='branch' defaultValue="Oncology">
                      <option >Select a Branch</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select><br />
                    <input className='btn btn-primary' type="submit" value="Submit" id='submit' />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id='close1'>Close</button>
            </div>
          </div>
        </div>
      </div>




      <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel2">Add a new Branch</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='d-flex m-auto' onSubmit={branchSubmitHandler} style={{ width: '70%' }}>
                <div className="col">
                  <div className="" style={{ boxSizing: 'border-box' }}>
                    <input className='form-control' type="text" name="newBranch" id="newBranch" placeholder='Enter a Branch Name' /><br />
                    <input className='btn btn-primary' type="submit" value="Submit" id='submit' />

                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id='close2'>Close</button>
            </div>
          </div>
        </div>
      </div>





      <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel3" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel3">Staff's Registration</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='d-flex m-auto' onSubmit={staffSubmitHandler} style={{ width: '70%' }}>
                <div className="col">
                  <div className="" style={{ boxSizing: 'border-box' }}>
                    <input className='form-control' type="text" name="staffName" id="staffName" placeholder="Enter the Staff's name" /><br />
                  </div>
                  <div className="">
                    <select className="form-select" aria-label="Default select example" id='staffShift' defaultValue="Morning">
                      <option value = "Morning">Select a Shift</option>
                      <option value="Morning">Morning</option>
                      <option value="Evening">Evening</option>
                      <option value="Night">Night</option>
                    </select><br />
                    <input className='btn btn-primary' type="submit" value="Submit" id='staffSubmit' />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="close3">Close</button>
            </div>
          </div>
        </div>
      </div>


    </div>;
  }

  export default AdminDash;