import React from 'react';
import { FaBeer, FaCaretLeft, FaEdit, FaExchangeAlt, FaPrint, FaSave, FaTools, FaUserCheck, FaUserCog } from "react-icons/fa";

const FunctionalButtons = () => {
    return (
		<div className='bg-gray-500 py-1 px-2 flex gap-3 items-center justify-end '>
			{/* setup */}
			<div className='py-3 px-4 bg-gray-200 cursor-pointer flex flex-col items-center justify-center'>
				<FaTools className='text-[14px]' />
				<span>SETUP</span>
			</div>
			{/* print */}
			<div className='py-3 px-4 bg-gray-200 cursor-pointer flex flex-col items-center justify-center'>
				<FaPrint className='text-[14px]' />
				<span>PRINT RECEIPT</span>
			</div>
			{/* verify prisoner */}
			<div className='py-3 px-4 bg-gray-200 cursor-pointer flex flex-col items-center justify-center'>
				<FaUserCheck className='text-[14px]' />
				<span>VERIFY PRISONER</span>
			</div>
			{/* PRISON TRANFER */}
			<div className='py-3 px-4 bg-gray-200 cursor-pointer flex flex-col items-center justify-center'>
				<FaExchangeAlt className='text-[14px]' />
				<span>PRISON TRANFER</span>
			</div>
			{/* MANAGE PROFILE */}
			<div className='py-3 px-4 bg-gray-200 cursor-pointer flex flex-col items-center justify-center'>
				<FaUserCog className='text-[14px]' />
				<span>MANAGE PROFILE</span>
			</div>
			{/* UPDATE PRISON ID */}
			<div className='py-3 px-4 bg-gray-200 cursor-pointer flex flex-col items-center justify-center'>
				<FaUserCog className='text-[14px]' />
				<span>UPDATE PRISON ID</span>
			</div>
			{/* BACK */}
			<div className='py-3 px-4 bg-gray-200 cursor-pointer flex flex-col items-center justify-center'>
				<FaCaretLeft className='text-[14px]' />
				<span>BACK</span>
			</div>
			{/* DRAFT */}
			<div className='py-3 px-4 bg-gray-200 cursor-pointer flex flex-col items-center justify-center'>
				<FaEdit className='text-[14px]' />
				<span>DRAFT</span>
			</div>
			{/* FINAL */}
			<div className='py-3 px-4 bg-gray-200 cursor-pointer flex flex-col items-center justify-center'>
				<FaSave className='text-[14px]' />
				<span>FINAL</span>
			</div>
		</div>
	);
};

export default FunctionalButtons;