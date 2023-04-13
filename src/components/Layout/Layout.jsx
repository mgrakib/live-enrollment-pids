import { UsersIcon } from '@heroicons/react/24/solid';
import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
export const prisonerIDTypeContext = createContext([]);
export const useprisonerIDTypeContext = createContext([]);
const Layout = () => {
    const [priseronIDType, setPrisonerIDType] = useState('')


    return (
		<prisonerIDTypeContext.Provider value={setPrisonerIDType}>
			<useprisonerIDTypeContext.Provider value={priseronIDType}>
				<div className='w-full h-screen flex items-center justify-center'>
					<Outlet />
				</div>
			</useprisonerIDTypeContext.Provider>
		</prisonerIDTypeContext.Provider>
	);
};

export default Layout;