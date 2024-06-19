import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar/Navbar';
import Master from './master';
import Details from './componets/Details/Destails'
import Form from './componets/form/form';
import Done from './componets/done/done';
import BlogsDetails from './componets/BlogDetails/BlogDetails';
import Order from './componets/Orders/Order';
import Price from './componets/price/price';
import Blogs from './componets/Blogs/Blogs';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Master />} />
          <Route path="/form" element={<Form />} />
          <Route path="/price" element={<Price />} />
          <Route path="/done" element={<Done />} />
          <Route path="/blogs/:id" element={<BlogsDetails />} />
          <Route path="/order" element={<Order />} />
          <Route path='/Blogs' element={<Blogs />} />
        </Routes>
        <Details />
      </Router>
      {/* Render the Google Translate widget */}
    </>
  );
}

export default App;