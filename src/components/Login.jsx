import React, { useContext, useState } from 'react';
import { BeakerIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link, useLocation, useNavigate } from 'react-router-dom';


import { AuthcontextAPI } from '../AuthContext/AuthContext';


const Login = () => {
	const { singIn, logOut } = useContext(AuthcontextAPI);
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState('');
	const navigate = useNavigate();
	
	const handelLogin = (evetn) => {
		evetn.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		singIn(email, password)
			.then(result => {
				navigate('/home');
				
			})
			.catch(error => {
				console.log(error.message), setError(error.message);
			});
		
	}
    return (
		<div className='w-[600px] h-[400px] bg-gray-300 mx-auto p-5'>
			<h4 className='text-4xl font-bold'>Login</h4>

			<div className='mt-10'>
				<form
					onSubmit={handelLogin}
					className='flex flex-col gap-5 w-1/2'
				>
					<input
						type='email'
						name='email'
						id='email'
						className='px-2 outline-none py-1'
						required
					/>
					<span className='relative flex items-center'>
						<input
							type={showPassword ? "text" : "password"}
							name='password'
							id='password'
							className='px-2 outline-none py-1 w-full'
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
						<small className='text-red-500'>{error}</small>
					</p>
					<div className='flex gap-2 items-center'>
						<input
							type='submit'
							value='Login'
							className=' py-1 px-4 mt-10 cursor-pointer bg-gray-900 text-white'
						/>
						<Link to={"/register"}>
							<input
								type='button'
								value='Register'
								className=' py-1 px-4 mt-10 cursor-pointer bg-gray-900 text-white'
							/>
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;