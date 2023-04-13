import React, { createContext, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { prisonerIDTypeContext } from './Layout/Layout';


const Enrollment = () => {
	const navigator = useNavigate();
	const setPrisonerID = useContext(prisonerIDTypeContext);
	const [prisonerType, setPrisonerType] = useState("Unver trial");
	const [prisonerID, setPrisonerIDValue] = useState("");
	const handelStartEntryNext = () => {
		if (!prisonerID) {
			alert('you have to pass Prisoner ID')
			return;
		}
		const prisonerIDType = {
			'prionser_id': prisonerID,
			'prisoner_type': prisonerType
		}
		
		setPrisonerID(prisonerIDType);
		navigator("/prisoner-info");
	}

	
    return (
		<div className='w-[600px] h-[400px] p-5 text-left'>
			<p className='text-5xl'>ENROLLMENT</p>

			<div className='mt-10'>
				<p>Prisoner Category</p>
				<select
					onChange={() => setPrisonerType(event.target.value)}
					name=''
					id=''
					className='presoner-type'
				>
					<option value='Unver trial'>Under Trial</option>
					<option value='Convict'>Convict</option>
				</select>
				<p>Prisoner ID</p>
				<input
					onBlur={() => setPrisonerIDValue(event.target.value)}
					className='presoner-type'
					type='text'
				/>
			</div>

			<div className='flex gap-5 items-center mt-14'>
				<Link to={"/home"}>
					<button className='bg-gray-600 py-1 px-8 font-bold'>
						Home
					</button>
				</Link>

				<button
					onClick={handelStartEntryNext}
					className='bg-gray-800 py-1 px-8 font-bold text-white'
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default Enrollment;