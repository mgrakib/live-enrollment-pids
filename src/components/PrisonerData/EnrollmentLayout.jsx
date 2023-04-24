import React, { useContext } from 'react';
import {  UserIcon } from "@heroicons/react/24/solid";
import { Link, NavLink, Outlet } from 'react-router-dom';
import { useprisonerIDTypeContext } from '../Layout/Layout';

const EnrollmentLayout = () => {

	const prisonerIDType = useContext(useprisonerIDTypeContext);

	
    return (
		<div className='bg-gray-200 w-[1200px] py-2 px-4'>
			{/* nav&info */}
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-2 bg-gray-800 py-1 px-2 rounded-md w-[250px]'>
					<UserIcon className='h-6 w-6 text-blue-500' />
					<div className=' text-white text-3xl'>Enrollment</div>
				</div>
				<button className='w-[20px] h-[20px] bg-white flex items-center justify-center rounded-md border'>
					x
				</button>
			</div>

			<div className='mt-5'>
				<ul className='flex items-center gap-16'>
					<li className='text-gray-400'>
						PRISONER ID{" "}
						<span className='ml-5 font-bold text-black text-xl'>
							UTP: {prisonerIDType.prionser_id}
						</span>
					</li>
					<li className='text-gray-400'>
						PROFILE STATE:{" "}
						<span className='ml-5 font-bold text-black text-xl'>
							Active
						</span>
					</li>
					<li className='text-gray-400'>
						PRISONER STATE:{" "}
						<span className='ml-5 font-bold text-black text-xl'>
							In Prison {prisonerIDType.prisoner_type}
						</span>
					</li>
				</ul>

				<div>
					<ul className='border-b border-black flex mt-3 gap-2'>
						<NavLink
							to={"../prisoner-info"}
							className={isActive =>
								isActive ? "active" : "default"
							}
						>
							<li className='border border-black px-4 '>
								Personal Info
							</li>
						</NavLink>
						<NavLink
							className={isActive =>
								isActive ? "active" : "default"
							}
						>
							<li className='border border-black px-4 rounded-tl-md rounded-tr-md category-link'>
								Address
							</li>
						</NavLink>
						<NavLink
							className={isActive =>
								isActive ? "active" : "default"
							}
						>
							<li className='border border-black px-4 rounded-tl-md rounded-tr-md category-link'>
								Address
							</li>
						</NavLink>
						<NavLink
							className={isActive =>
								isActive ? "active" : "default"
							}
						>
							<li className='border border-black px-4 rounded-tl-md rounded-tr-md category-link'>
								Family
							</li>
						</NavLink>
						<NavLink
							className={isActive =>
								isActive ? "active" : "default"
							}
						>
							<li className='border border-black px-4 rounded-tl-md rounded-tr-md category-link'>
								Education
							</li>
						</NavLink>
						<NavLink
							className={isActive =>
								isActive ? "active" : "default"
							}
						>
							<li className='border border-black px-2 rounded-tl-md rounded-tr-md category-link'>
								Case Info
							</li>
						</NavLink>
					</ul>
				</div>

				<Outlet />
			</div>
		</div>
	);
};

export default EnrollmentLayout;