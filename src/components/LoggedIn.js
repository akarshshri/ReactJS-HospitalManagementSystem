
import React from 'react';
import DoctorDash from '../components/DoctorDash';
import StaffDash from '../components/StaffDash';
import AdminDash from '../components/AdminDash';


function LoggedIn({Logout , user, userId }) {
    //console.log( user , userId )
    return <div>
        <div className="welcome">
            <h2>Welcome, <span>{user.email}</span></h2>
            <button className='btn btn-secondary' onClick={Logout}>Logout</button>
        </div>
        {userId === 2?(<DoctorDash />):('')}
        {userId === 0?(<AdminDash />):('')}
        {userId === 1?(<StaffDash />):('')}

    </div>;
}

export default LoggedIn;
