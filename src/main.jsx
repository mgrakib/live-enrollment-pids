import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import Layout from './components/Layout/Layout';
import SortDisplay from './components/SortDisplay/SortDisplay';
import Enrollment from './components/Enrollment';
import EnrollmentLayout from './components/PrisonerData/EnrollmentLayout';
import PersonalInfo from './components/PrisonerData/PersonalInfo';
import Login from './components/Login';
import Register from './components/Register';
const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <SortDisplay />,
				children: [
					{
						index: true,
						element: <Login />,
					},
					{
						path: "register",
						element: <Register />,
					},
					{
						path: "home",
						element: <Home />,
					},
					{
						path: "enrollment",
						element: <Enrollment />,
					},
				],
			},
			{
				path: "prisoner-info",
				element: <EnrollmentLayout />,
				children: [
					{
						path: "/prisoner-info",
						element: <PersonalInfo />,
					},
				],
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
