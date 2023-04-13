import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  ArrowLeftOnRectangleIcon, ClipboardDocumentCheckIcon, KeyIcon, MagnifyingGlassIcon, PencilSquareIcon, ShieldCheckIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { userDataContext, userFunctionContext } from './SortDisplay/SortDisplay';

const Home = () => {
	const userData = useContext(userDataContext);
	const setUserData = useContext(userFunctionContext);
	const navigate = useNavigate();
	const handelLogout = () => {
		setUserData({});
		navigate('/')
	}
	
    return (
		<div>
			{/* service  */}
			<div className='w-[600px] h-[400px] bg-gray-300 mx-auto  flex items-center overflow-hidden'>
				{/*  btns  */}
				<div className='w-[calc(100%-45px)] h-full text-left p-10'>
					<h1 className='text-4xl font-bold'>HOME</h1>

					<div className='flex flex-col h-full'>
						{/* top btn  */}
						<div>
							<div className='mt-5 flex items-center justify-between'>
								{/* Enroll */}
								<Link to={'/enrollment'}>
									<div className='p-5 bg-white inline-block rounded-md border border-black btn'>
										<UserPlusIcon className='h-8 w-8 text-gray-500' />
									</div>
								</Link>
								{/* updata Porfile  */}
								<Link>
									<div className='p-5 bg-white inline-block rounded-md border border-black btn'>
										<PencilSquareIcon className='h-8 w-8 text-gray-500' />
									</div>
								</Link>
								{/* Search  */}
								<Link>
									<div className='p-5 bg-white inline-block rounded-md border border-black btn'>
										<MagnifyingGlassIcon className='h-8 w-8 text-gray-500' />
									</div>
								</Link>
								<Link>
									<div className='p-5 bg-white inline-block rounded-md border border-black btn'>
										<ClipboardDocumentCheckIcon className='h-8 w-8 text-gray-500' />
									</div>
								</Link>
								<Link>
									<div className='p-5 bg-white inline-block rounded-md border border-black btn'>
										<ShieldCheckIcon className='h-8 w-8 text-gray-500' />
									</div>
								</Link>
							</div>
							<div className='flex text-center justify-between text-[14px]'>
								<p>ENROLL</p>
								<p>
									UPDATE <br /> PROFILE
								</p>
								<p>SEARCH</p>
								<p>REPORT</p>
								<p>
									REJECTED <br /> PROFILE
								</p>
							</div>
						</div>

						{/* bottm btn  */}
						<div className=' mt-auto'>
							<div className='flex items-center gap-5 border-t pt-3 border-black'>
								{/* logout */}
								<>
									<div onClick={handelLogout} className='p-5 bg-white inline-block rounded-md border border-black btn'>
										<ArrowLeftOnRectangleIcon className='h-8 w-8 text-gray-500' />
									</div>
								</>
								{/* change password  */}
								<Link>
									<div className='p-5 bg-white inline-block rounded-md border border-black btn'>
										<KeyIcon className='h-8 w-8 text-gray-500' />
									</div>
								</Link>
								{/* Search  */}
							</div>
							<div className='flex items-center gap-5 mt-auto'>
								{/* LOGOUT */}
								<p>LOGOUT</p>
								{/* updata Porfile  */}
								<p>
									CHANGE <br /> PASSWORD
								</p>
								{/* Search  */}
							</div>
						</div>
					</div>
				</div>

				{/*softwer title  */}
				<div className='w-[45px] h-full bg-gray-950 relative pt-2 flex items-start justify-center'>
					<p className='text-white -rotate-90  w-full absolute  bottom-10 text-3xl'>
						<span className='font-bold'>Live</span>Enrollment
					</p>
					<span className='text-black'>
						<button className='w-[30px] h-[30px] bg-white rounded-sm flex items-center justify-center'>
							x
						</button>
					</span>
				</div>
			</div>
			
		</div>
	);
};

export default Home;