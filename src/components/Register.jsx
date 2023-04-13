/** @format */

import React, { useState } from "react";
import { BeakerIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";
import app from "../FireBase/firebase.config";

const auth = getAuth(app);


const Register = () => {
	const navigate = useNavigate();

	const [error, setError] = useState("");
	const handelRegister = event => {
		event.preventDefault();
		const email = event.target.email.value;
		const displayName = event.target.name.value;
		const password = event.target.password.value;

		createUserWithEmailAndPassword(auth, email, password)
			.then(result => {
				
				userFullName(result.user, displayName),
				navigate('/');
				toast("Here is your toast.");
			})
			.catch(error => {
				console.error(error.message), setError(error.message);
			});

		event.target.reset();
	};

	const userFullName = (user, name) => {
		console.log(name);

		updateProfile(user, {
			displayName: name,
		})
			.then()
			.catch(error => console.log(error.message));
	};
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className='w-[600px] h-[400px] bg-gray-300 mx-auto p-5'>
			<h4 className='text-4xl font-bold'>Please Regester</h4>

			<div className='mt-10'>
				<form
					onSubmit={handelRegister}
					className='flex flex-col gap-5 w-1/2'
				>
					<input
						type='email'
						name='email'
						id='email'
						className='px-2 outline-none py-1'
						placeholder='Your Email'
						required
					/>
					<input
						type='text'
						name='name'
						id='name'
						className='px-2 outline-none py-1'
						placeholder='Your Name'
						required
					/>
					<span className='relative flex items-center'>
						<input
							type={showPassword ? "text" : "password"}
							name='password'
							id='password'
							className='px-2 outline-none py-1 w-full'
							placeholder='Your Password'
							required
						/>
						<span
							onClick={() => {
								setShowPassword(!showPassword);
							}}
							className='absolute right-2 cursor-pointer'
						>
							{showPassword ? (
								<EyeIcon className='h-6 w-6 text-blue-500' />
							) : (
								<EyeSlashIcon className='h-6 w-6 text-blue-500' />
							)}
						</span>
					</span>
					<p>
						<small className='text-red-600'>{error}</small>
					</p>
					<div className='flex gap-2 items-center'>
						<input
							type='submit'
							value='Register'
							className=' py-1 px-4 mt-10 cursor-pointer bg-gray-900 text-white'
						/>
						<Link to={"/"}>
							<input
								type='button'
								value='Login'
								className=' py-1 px-4 mt-10 cursor-pointer bg-gray-900 text-white'
							/>
						</Link>
					</div>
				</form>
			</div>
			<Toaster />
		</div>
	);
};

export default Register;
