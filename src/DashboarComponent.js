// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import PrivateRoute from "./privateRoutes";
// import DbHome from './pages/Dashboard/DbHome';
// import Order from './pages/Orders/Order';
// import SinglerRow from './pages/Orders/SinglerRow';
// import Packages from './pages/Pakages/Packages';
// import CreatePackgage from './components/Createpackages/CreatePackage';
// import Packageupdate from './components/Packageupdate/Packageupdate';
// import Customers from './pages/Customers/Customers';
// import Single from './pages/Single/Single';
// import New from './pages/New/New';
// import Message from './pages/Message/Message';
// import Wallet from './pages/Wallet/Wallet';
// import Walletmanagement from './pages/Walletmanagement/Walletmanagement';
// import Global from './pages/Global/Global';
// import Submail from './pages/Submail/Submail';
// import Edit from './pages/Edit/Edit';
// import { customerInput } from "./formsource";

// const DashboardComponent = () => {
//     return (
//         <Routes>
//             <PrivateRoute path="/dashboard" requiredRole="admin">
//                 <Route index element={<DbHome />} />
//                 <Route path="/orders" element={<Order />} />
//                 <Route path="/single-row" element={<SinglerRow />} />
//                 <Route path="/packages" element={<Packages />}>
//                     <Route index element={<Packages />} />
//                     <Route path=":packageId">
//                         <Route index element={<CreatePackgage />} />
//                         <Route path="update-package" element={<Packageupdate />} />
//                     </Route>
//                 </Route>
//                 <Route path="/customers" element={<Customers />}>
//                     <Route index element={<Customers />} />
//                     <Route path=":customerid">
//                         <Route index element={<Single />} />
//                         <Route path="edit" element={<Edit />} />
//                     </Route>
//                     <Route
//                         path="/new"
//                         element={<New inputs={customerInput} title="Add New Customer" />}
//                     />
//                     <Route path="/messages" element={<Message />} />
//                     <Route path="/wallet">
//                         <Route index element={<Wallet />} />
//                         <Route path="/add-wallet" element={<Walletmanagement />} />
//                     </Route>
//                     <Route path="/global" element={<Global />} />
//                     <Route path="/sub-mails" element={<Submail />} />
//                 </Route>
//             </PrivateRoute>
//         </Routes>
//     );
// }

// export default DashboardComponent;
