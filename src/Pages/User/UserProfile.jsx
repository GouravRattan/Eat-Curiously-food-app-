// import React, { act } from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import Marquee from '../../Components/Marquee';
import Banner from '../../Components/Banner';
import UserSidebar from '../UserProfile/UserSidebar';
import ChangePassword from '../UserProfile/ChangePassword';
import AccountSettings from '../UserProfile/AccountSettings';
import YourOrders from '../UserProfile/YourOrders';
import Address from '../UserProfile/Address';
import MainLogo2 from "../../assets/Untitled design (1).png"
import LogoComponent from '../../Components/MainLogo';

import { useParams } from 'react-router-dom';

const UserProfile = () => {

    const {activepage} = useParams()

  return (
    <>
    <div className="userprofile bg-slate-100">
      <LogoComponent  />
      <NavBar textColor="black" AboutBtn="bg-blue-500 text-white" />
      <div className=' mt-28'>
      <Banner HeroText="My Profile" />
        </div>

      <div className="userprofilein flex gap-20 m-20">

        <div className="left w-1/5 border-2 border-gray-300 rounded-lg max-h-screen ">
          <UserSidebar  activepage = {activepage}/>
        </div>

        <div className="right w-4/5 border-2 border-gray-300 rounded-lg max-h-screen">
         {activepage === "accountsettings" && <AccountSettings /> }
         {activepage === "changepassword" && <ChangePassword /> }
         {activepage === "yourorders" && <YourOrders /> }
         {activepage === "address" && <Address /> }
        </div>

      </div>

      <Marquee />
      <Footer />
      </div>
    </>
  );
};

export default UserProfile;
