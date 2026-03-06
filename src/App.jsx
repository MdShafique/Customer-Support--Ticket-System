
import { Suspense } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Tickets from './Components/Tickets/Tickets';
import Footer from './Components/Footer/Footer';

 const fetchTickets = async ()=>{
    const res = await fetch('data.json');
    return res.json();
  }


function App() {

  const ticketsPromise = fetchTickets();
 
  

  return (
    <>
     
     <div className='bg-gray-100'>
          <Navbar></Navbar>
          <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}> <Tickets ticketsPromise={ticketsPromise}></Tickets></Suspense>
          <Footer></Footer>
          
     </div>
    </>
  )
}

export default App
