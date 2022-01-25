
import React from 'react';
import DoctorDash from '../components/DoctorDash';
import StaffDash from '../components/StaffDash';
import AdminDash from '../components/AdminDash';


function LoggedIn({ Logout, user, userId }) {
    //console.log( user , userId )
    return <div>
        <div className="welcome px-4  " style={{ backgroundColor: '#cecece', paddingTop: '1rem', paddingBottom: '1rem' }}>
            <div className="row " >
                <div className='col-sm-12 col-md-12 col-lg-8 col-xxl-7' style={{float : 'left'}} >
                    <h2>Welcome, <span>{user.email}</span></h2>
                </div>
                <div className='col-sm-12 col-md-12 col-lg-4 col-xxl-5' >
                    <button className='btn btn-danger' onClick={Logout}>Logout</button>
                </div>
            </div>
        </div>
        {userId === 0 ? (<AdminDash />) : ('')}
        {userId === 1 ? (<StaffDash />) : ('')}
        {userId === 2 ? (<DoctorDash />) : ('')}

    </div>;
}

export default LoggedIn;
