/** @format */

import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { AuthcontextAPI } from "../../AuthContext/AuthContext";


const SortDisplay = () => {
	const { user } = useContext(AuthcontextAPI);

	return (
		<div className='w-[600px] h-[400px] bg-gray-300'>
			<Outlet />
			<ul className='bg-gray-600 px-3 py-1 flex items-center text-left gap-3 footer-div text-white text-[14px]'>
				<li>{user ? "Online" : "Offline"}</li>
				<li className='flex-1'>
					{user?.displayName ? user.displayName : "No one is active"}
				</li>
				<li> version 01.00.00</li>
			</ul>
		</div>
	);
};

export default SortDisplay;
