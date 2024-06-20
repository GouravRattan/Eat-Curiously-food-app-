import React, { act } from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import Marquee from '../../Components/Marquee';
import Banner from '../../Components/Banner';
import UserSidebar from '../UserProfile/UserSidebar';
import AccountSettings from '../UserProfile/AccountSettings';
import { useParams } from 'react-router-dom';

const UserProfile = () => {

    const {activepage} = useParams()

  return (
    <>
    <div className="userprofilein">
      <NavBar textColor="black" AboutBtn="bg-blue-500 text-white" />
      <Banner HeroText="My Profile" />

      <div className="userprofilein flex gap-20 m-20">

        <div className="left w-1/5 border-2 border-gray-300 rounded-lg min-h-screen ">
          <UserSidebar  activepage = {activepage}/>
        </div>

        <div className="right w-4/5 border-2 border-gray-300 rounded-lg min-h-screen">
         {activepage === "accountsettings" && <AccountSettings /> }
        </div>

      </div>

      <Marquee />
      <Footer />
      </div>
    </>
  );
};

export default UserProfile;
