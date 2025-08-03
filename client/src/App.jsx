import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { useLocation,Routes, Route } from 'react-router-dom';
import MyBookings from './pages/MyBookings';
import CarDetails from './pages/CarDetails';
import Cars from './pages/Cars';
import Home from './pages/Home';
import Footer from './components/Footer';
import Dashboard from './pages/owner/Dashboard';
import AddCar from './pages/owner/AddCar';
import ManageBookings from './pages/owner/ManageBookings';
import Layout from './pages/owner/Layout';
import Manage from './pages/owner/ManageCars';
import Login from './components/Login';


const App = () => {
const [showLogin, setShowLogin] = useState(false);
const isOwnerPath = useLocation().pathname.startsWith('/owner')

  return (
    <>
    {showLogin &&  <Login setShowLogin={setShowLogin}/>}
   
{ !isOwnerPath &&  <Navbar setShowLogin={setShowLogin}/>}

<Routes>
<Route path='/' element={<Home/>}/>
<Route path='car-details/:id' element={<CarDetails/>}/>
<Route path='/cars' element={<Cars/>}/>
<Route path='/my-bookings' element={<MyBookings/>}/>
<Route path='owner' element={<Layout/>}>
<Route index element={<Dashboard/>}/>
<Route path='add-car' element={<AddCar/>}/>
<Route path='manage-cars' element={<Manage/>}/>
<Route path='manage-bookings' element={<ManageBookings/>}/>

</Route>
</Routes>
{!isOwnerPath && <Footer/>}

    </>
  )
}

export default App
