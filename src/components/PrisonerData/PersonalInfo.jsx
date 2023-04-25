/** @format */

import React, { useEffect, useState } from "react";

const PersonalInfo = () => {
	const [gender, setGender] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/gender`)
			.then(res => res.json())
			.then(data => {
				setGender(data.genders);
			});
	}, []);

	const [religion, setReligion] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/religions`)
			.then(res => res.json())
			.then(data => {
				setReligion(data.religions);
			});
	}, []);

	const [nationality, setNationality] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/nationalitys`)
			.then(res => res.json())
			.then(data => {
				setNationality(data.nationalities);
			});
	}, []);

	const [occupations, setOccupations] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/occupations`)
			.then(res => res.json())
			.then(data => {
				setOccupations(data.occupations);
			});
	}, []);
	const [natureOfInmate, setNatureOfInmate] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/natureOfInmate`)
			.then(res => res.json())
			.then(data => {
				setNatureOfInmate(data.natureOfInmate);
			});
	}, []);
	const [hasDivision, sethasDivision] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/yesNo`)
			.then(res => res.json())
			.then(data => {
				sethasDivision(data.yesNo);
			});
	}, []);
	const [bloodGroup, setBloodGroup] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/bloodGroup`)
			.then(res => res.json())
			.then(data => {
				setBloodGroup(data.bloodGroup);
			});
	}, []);

	const [height, setHeight] = useState('');


	return (
		<div className='my-5'>
			<form className='grid grid-cols-4 gap-16'>
				{/* first column  */}
				<div className='flex flex-col gap-2'>
					{/* english name  */}
					<div>
						<label htmlFor='nameEN'>Name In English</label>
						<input
							className='inputFeild'
							required
						/>
					</div>

					{/* gender  */}
					<div>
						<label htmlFor='nameEN'>Gender</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{gender.map((g, index) => (
								<option
									key={index}
									value={g}
								>
									{g}
								</option>
							))}
						</select>
					</div>
					{/* Religion  */}
					<div>
						<label htmlFor='nameEN'>Religion</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{religion.map((r, i) => (
								<option
									key={i}
									value={r}
								>
									{r}
								</option>
							))}
						</select>
					</div>
					{/* age  */}
					<div>
						<label htmlFor='nameEN'>Age</label>
						<input
							className='inputFeild'
							required
						/>
					</div>
					{/* Natonality  */}
					<div>
						<label htmlFor='nameEN'>Natonality</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{nationality.map((n, i) => (
								<option
									key={i}
									value={n}
								>
									{n}
								</option>
							))}
						</select>
					</div>
					{/* Occupation  */}
					<div>
						<label htmlFor='nameEN'>Occupation</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{occupations.map((o, i) => (
								<option
									key={i}
									value={o}
								>
									{o}
								</option>
							))}
						</select>
					</div>
					{/* Nature of inmate  */}
					<div>
						<label htmlFor='nameEN'>Nature of inmate</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{natureOfInmate.map((ni, i) => (
								<option
									key={i}
									value={ni}
								>
									{ni}
								</option>
							))}
						</select>
					</div>
					{/* Has division  */}
					<div>
						<label htmlFor='nameEN'>Has Division</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{hasDivision.map((hd, i) => (
								<option
									key={i}
									value={hd}
								>
									{hd}
								</option>
							))}
						</select>
					</div>
				</div>

				{/* second column  */}
				<div className='flex flex-col gap-2'>
					{/* name of bangla  */}
					<div>
						<label htmlFor='nameEN'>Name In Bangla</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
						/>
					</div>

					{/* Aliases  */}
					<div>
						<label htmlFor='nameEN'>Aliases</label>
						<textarea
							name='aliases'
							id=''
							className='textArea'
						></textarea>
					</div>
					{/* Date of birth  */}
					<div>
						<label htmlFor='nameEN'>Date of Birth</label>
						<input
							className='inputFeild'
							name='dateofbirth'
						/>
					</div>
					{/* national ID No.  */}
					<div>
						<label htmlFor='nameEN'>National ID No.</label>
						<input
							className='inputFeild'
							name='nationalIdNo'
						/>
					</div>
					{/* bloodGroup  */}
					<div>
						<label htmlFor='nameEN'>Blood Group</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{bloodGroup.map((g, index) => (
								<option
									key={index}
									value={g}
								>
									{g}
								</option>
							))}
						</select>
					</div>
					{/* ValuableProperties  */}
					<div>
						<label htmlFor='nameEN'>Valuable Properties</label>
						<textarea
							name='valuableProperties'
							id=''
							className='textArea'
						></textarea>
					</div>
				</div>

				{/* third column  */}
				<div className='flex flex-col gap-2'>
					{/* mobile No  */}
					<div>
						<label htmlFor='nameEN'>Mobile No</label>
						<input
							className='inputFeild'
							name='mobileNo'
						/>
					</div>

					{/* alternativeMobileNo  */}
					<div>
						<label htmlFor='nameEN'>Alternative Mobile No</label>
						<textarea
							name='alternativeMobileNo'
							id=''
							className='textArea'
						></textarea>
					</div>
					{/* identificationMarks  */}
					<div>
						<label htmlFor='nameEN'>Identification Marks</label>
						<textarea
							name='identificationMarks'
							id=''
							className='textArea'
						></textarea>
					</div>

					{/* Height*/}
					<div>
						<label htmlFor='nameEN'>Witht</label>
						<div className='grid grid-cols-3 gap-2'>
							<div>
								<input
									className='sortInput'
									name='height'
								/>
								<label htmlFor=''>ft</label>
							</div>

							<div>
								<input
									className='sortInput'
									name='height'
								/>
								<label htmlFor=''>in</label>
							</div>
							<div>
								<input
									className='sortInput'
									name='height'
									value={height}
								/>
								<label htmlFor=''>ft</label>
							</div>
						</div>
					</div>

					{/* Weight*/}
					<div>
						<label htmlFor='nameEN'>Weight</label>
						<div className='grid grid-cols-3'>
							<div>
								<input
									className='sortInput'
									name='weight'
								/>
								<label htmlFor=''>kg</label>
							</div>

							<div>
								<input
									className='sortInput'
									name='weight'
								/>
								<label htmlFor=''>pound</label>
							</div>
						</div>
					</div>
				</div>

				{/* fifth column  */}
				<div className='flex flex-col gap-2'>
					{/* Phone No  */}
					<div>
						<label htmlFor='nameEN'>Phone No</label>
						<input
							className='inputFeild'
							name='phoneNo'
						/>
					</div>

					{/* Email  */}
					<div>
						<label htmlFor='nameEN'>Email</label>
						<textarea
							name='alternativeMobileNo'
							id=''
							className='textArea'
						></textarea>
					</div>

					{/* disabilities  */}
					<div>
						<label htmlFor='nameEN'>Disablities</label>
						<textarea
							name='disabilities'
							id=''
							className='textArea'
						></textarea>
					</div>
					{/* Remarks  */}
					<div>
						<label htmlFor='nameEN'>Remarks</label>
						<textarea
							name='Remarks'
							id=''
							className='textArea'
						></textarea>
					</div>
					{/* AdminComments  */}
					<div>
						<label htmlFor='nameEN'>Admin Comments</label>
						<textarea
							name='AdminComments'
							id=''
							className='textArea'
						></textarea>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PersonalInfo;
