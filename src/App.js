import React , { useState, useEffect } from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
// import keycloak from "./Keycloak"
import Keycloak from "keycloak-js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SecuredPage from "./components/SecuredPage";
import Register from './components/Register'
import PrivateRoute from "./components/PrivateRoute";

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { error: null, errorInfo: null };
//   }
  
//   componentDidCatch(error, errorInfo) {
//     // Catch errors in any components below and re-render with error message
//     this.setState({
//       error: error,
//       errorInfo: errorInfo
//     })
//     // You can also log error messages to an error reporting service here
//   }
  
//   render() {
//     if (this.state.errorInfo) {
//       // Error path
//       return (
//         <div>
//           <h2>Something went wrong.</h2>
//           <details style={{ whiteSpace: 'pre-wrap' }}>
//             {this.state.error && this.state.error.toString()}
//             <br />
//             {this.state.errorInfo.componentStack}
//           </details>
//         </div>
//       );
//     }
//     // Normally, just render children
//     return this.props.children;
//   }  
// }

function App() {
  const [realmId , setRealmId] = useState(JSON.parse(window.localStorage.getItem('realmId')));

  useEffect(() => {
    const currRealmId = JSON.parse(window.localStorage.getItem('realmId'));
    if(currRealmId !== realmId)
    setRealmId(prevState => prevState = currRealmId) 
  }, []);
  useEffect(() => {
    window.localStorage.setItem('realmId', JSON.stringify(realmId));
  }, [realmId]);

  const keycloak = new Keycloak({
    url: "http://localhost:8080/auth",
    realm: realmId == null ? 'Admin':realmId ,
    clientId: "React-auth",
   });
   
  
  return (
    <div>
      {/* <ErrorBoundary> */}
        <ReactKeycloakProvider authClient={keycloak}>
        <Navbar realmId = {realmId} setRealmId = { setRealmId }/>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/secured" element={<PrivateRoute><SecuredPage organization = { realmId } /></PrivateRoute>} />
            <Route exact path="/register" element={<Register keycloak = { keycloak } />} />

          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
      {/* </ErrorBoundary> */}
    </div>
  );
 }
 
 export default App;