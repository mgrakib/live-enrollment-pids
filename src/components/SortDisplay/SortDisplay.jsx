/** @format */

import React, { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
export const userFunctionContext = createContext([]);
export const userDataContext = createContext({});


const SortDisplay = () => {
	const [user, setUser] = useState({});

	
	return (
		<div className='w-[600px] h-[400px] bg-gray-300'>
			<userFunctionContext.Provider value={setUser}>
				<userDataContext.Provider value={user}>
					
							<Outlet />
							<ul className='bg-gray-600 px-3 py-1 flex items-center text-left gap-3 footer-div text-white text-[14px]'>
								<li>
									{Object.keys(user).length > 0
										? "Online"
										: "Offline"}
								</li>
								<li className='flex-1'>
									{user.email
										? user.email
										: "No one is active"}
								</li>
								<li> version 01.00.00</li>
							</ul>
						
				</userDataContext.Provider>
			</userFunctionContext.Provider>
		</div>
	);
};

export default SortDisplay;
