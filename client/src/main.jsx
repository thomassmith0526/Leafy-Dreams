// Application routing behavior

import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// css stylings

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// importing all pages that the router will use for front end

// import App from './App';
// import AreaInfo from './pages/AreaInfo/AreaInfo';
// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import PlantInfo from './pages/PlantInfo/PlantInfo';
// import Profile from './pages/Profile/Profile';
// import Signup from './pages/Signup/Signup';

// Accessible routes need to be defined, as well as which components will respond to which URLs

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: '/login',
//         element: <Login />,
//       },
//       {
//         path: '/signup',
//         element: <Signup />,
//       },
//       {
//         path: '/profile',
//         element: <Profile />,
//       },
//       {
//         path: '/plantinfo',
//         element: <PlantInfo />,
//       },
//       {
//         path: '/areainfo',
//         element: <AreaInfo />,
//       },
//     ],
//   },
// ]);

// Render the Router Provider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
