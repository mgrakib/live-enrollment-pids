/** @format */

import React, { useContext, useState } from "react";
import { BeakerIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

import toast, { Toaster } from "react-hot-toast";
import { AuthcontextAPI } from "../AuthContext/AuthContext";

const Register = () => {
	// import context function
	const { creatAccount, setNamePhoto } = useContext(AuthcontextAPI);

	const navigate = useNavigate();
	// set error to display
	const [error, setError] = useState("");
	// jamde; regoster
	const handelRegister = event => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const displayName = form.name.value;
		const password = form.password.value;

		creatAccount(email, password)
			.then(result => {
				setNamePhoto(displayName)
					.then()
					.catch(error => setError(error.message));
				// toast("Here is your toast.");
				navigate('/');
				
			})
			.catch(error => {
				console.error("make is", error.message),
					setError(error.message);
			});
		
		event.target.reset();
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
