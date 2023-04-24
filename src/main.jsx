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
import AuthContext from './AuthContext/AuthContext';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Resticted from './Resticted/Resticted';
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
						element: (
							<Resticted>
								<Login />
							</Resticted>
						),
					},
					{
						path: "register",
						element: (
							<Resticted>
								<Register />
							</Resticted>
						),
					},
					{
						path: "home",
						element: (
							<PrivateRoute>
								<Home />
							</PrivateRoute>
						),
					},
					{
						path: "enrollment",
						element: (
							<PrivateRoute>
								<Enrollment />
							</PrivateRoute>
						),
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
		<AuthContext>
			<RouterProvider router={router} />
		</AuthContext>
	</React.StrictMode>
);
