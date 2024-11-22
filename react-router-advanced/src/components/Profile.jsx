import {Link,Outlet} from "react-router-dom";
import React from "react";
import { Profiler } from "react";
import { Route ,Routes ,Router } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";




function Profile() {

  return (
   <>
    <h2><Link to='profileDetails'>Profile Details</Link></h2>
    <h2><Link to='profileSetting'>Profile Settings</Link></h2>
    <Outlet />
    <div>
      <h1>Welcome to Your Profile</h1>
      <p>This page is protected and requires authentication.</p>
    </div>
   </>

  )
}

export default Profile