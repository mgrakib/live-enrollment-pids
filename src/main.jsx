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
import Address from './components/PrisonerData/Address';
import Family from './components/PrisonerData/Family';
import Education from './components/PrisonerData/Education';
import CaseInfo from './components/PrisonerData/CaseInfo';
import HealthInfo from './components/PrisonerData/HealthInfo';
import VisitorInfo from './components/PrisonerData/VisitorInfo';
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
				path: "live-enrollment",
				element: (
					<PrivateRoute>
						<EnrollmentLayout />
					</PrivateRoute>
				),
				children: [
					{
						path: "/live-enrollment",
						element: <PersonalInfo />,
					},
					{
						path: "address",
						element: <Address />,
					},
					{
						path: "family",
						element: <Family />,
					},
					{
						path: "education",
						element: <Education />,
					},
					{
						path: "case-info",
						element: <CaseInfo />,
					},
					{
						path: "health-info",
						element: <HealthInfo />,
					},
					{
						path: "visitor-info",
						element: <VisitorInfo />,
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
