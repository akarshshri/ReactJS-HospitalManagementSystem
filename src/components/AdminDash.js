import React, { useState, useEffect } from 'react';

function AdminDash() {
  var loopCount = 0;
  var arr = [{
    name: 'Nikhil',
    speciality: 'NPH'
  }]

  //localStorage.setItem('doctorinfo',JSON.stringify(arr))

  const docSubmitHandler = (e) => {
    e.preventDefault();
    var docName = document.getElementById('name').value
    var docSpec = document.getElementById('spec').value
    let temp = arr;
    temp = JSON.parse(localStorage.getItem('doctorinfo'))
    temp.push({ name: docName, speciality: docSpec })
    localStorage.setItem('doctorinfo', JSON.stringify(temp))
    console.log(JSON.parse(localStorage.getItem('doctorinfo')))
    updateDoc();
  }

  function updateDoc() {
    let s = '';
    var docinfo = document.getElementById('tableBody')
    if (localStorage.getItem('doctorinfo').length !== 0) {
      var arr2 = JSON.parse(localStorage.getItem('doctorinfo'))
      arr2.map(e => (
        s += `<tr>
        <th scope="row">${e.name}</th>
        <td>${e.speciality}</td>
         </tr>`
      ))
      console.log(arr2[0].name)
      docinfo.innerHTML = s;
    }
  }

  useEffect(() => {
    updateDoc()
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


    <div className='container d-flex row m-auto' id='doctorinfo'>
      <h3>Doctor's Info</h3>
      <table class="table"  >
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
            <td><button class="btn btn-sm btn-primary" >Delete</button></td>
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
                  <input className='form-control' type="text" name="email" id="name" placeholder='Name' /><br />
                </div>
                <div className="">
                  <input className='form-control' type="text" id='spec' placeholder='Speciality' /><br />
                  <input className='btn btn-primary' type="submit" value="Submit" id='submit' />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>




    <div className="modal fade" id="staticBackdrop2" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel2" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel2">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>





    <div className="modal fade" id="staticBackdrop3" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel3" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel3">Modal title</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            ...
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>


  </div>;
}

export default AdminDash;
