import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/login';
import { Container } from "react-bootstrap";
import Signup from './component/Signup';
import PrivateRoute from './component/PrivateRoute';
import ForgotPassword from './component/ForgetPassword';
import { AuthProvider } from './contexts/AuthContexts';
import Products from './component/Products';
import Contact from './component/contact';
import Cart from './component/Cart';
import Product from './component/Product';
import ImageAvatars from './component/about';


function App() {
       return (
              <>
                     <Container
                            className="d-flex align-items-center justify-content-center"
                            style={{ minHeight: "100vh" }}
                     >
                            <div className="w-100" style={{ maxWidth: "100%" }}>
                           
                                  <Router>
                                  <Navbar />
                                          <AuthProvider>
                                                 <Routes>

                                                        
                                                        <Route
                                                               path="/home"
                                                               element={

                                                                      <PrivateRoute>
                                                                             
                                                                             <Home />
                                                                      </PrivateRoute>
                                                               }
                                                        />
                                                        <Route path="/signup" element={<Signup />} />
                                                        <Route path="/login" element={<Login />} />
                                                        <Route path="/forgot-password" element={<ForgotPassword />} />
                                                        <Route path="/home" element={<Home />} />
                                                        <Route path="/products" element={<Products />} />
                                                        <Route path="/products/:id" element={<Product />} />
                                                        <Route path="/cart" element={<Cart />} />
                                                        <Route path="/about" element={<ImageAvatars />} />
                                                        <Route path="/contact" element={<Contact />} />
                                                 </Routes>
                                          </AuthProvider>
                                   </Router>
                            </div>
                     </Container>
              </>
       );
}

export default App;