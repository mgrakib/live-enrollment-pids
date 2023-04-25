/** @format */

import React, { useEffect, useState } from "react";

const Address = () => {
	// this is for district
	const [district, setDistrict] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/district`)
			.then(res => res.json())
			.then(data => setDistrict(data));
	}, []);

	const [thana, setThana] = useState([]);

	const [searchThana, setSearchThana] = useState("Select");
	const handelThana = e => {
		const district = e.target.value;
		setSearchThana(district);
	};

	useEffect(() => {
		fetch(`http://localhost:5000/district/${searchThana}`)
			.then(res => res.json())
			.then(data => setThana(data))
			.catch(error => setThana([]));
	}, [searchThana]);

	

	return (
		<div className='my-5'>
			<form className='grid grid-cols-4 gap-16'>
				{/* Firsts column  */}
				<div className='flex flex-col gap-2'>
					<p>Present</p>
					{/* District  */}
					<div>
						<label htmlFor='nameEN'>District</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
							onChange={handelThana}
						>
							{district.map((d, index) => (
								<option
									key={index}
									value={d}
								>
									{d}
								</option>
							))}
						</select>
					</div>
					{/* Thana  */}
					<div>
						<label htmlFor='nameEN'>Thana</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{thana.map((th, index) => (
								<option
									key={index}
									value={th}
								>
									{th}
								</option>
							))}
						</select>
					</div>

					{/* Union/Ward  */}
					<div>
						<label htmlFor='nameEN'>Union/Ward</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{/* {bloodGroup.map((g, index) => (
								<option
									key={index}
									value={g}
								>
									{g}
								</option>
							))} */}
						</select>
					</div>
					{/* post office  */}
					<div>
						<label htmlFor='nameEN'>post office</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{/* {bloodGroup.map((g, index) => (
								<option
									key={index}
									value={g}
								>
									{g}
								</option>
							))} */}
						</select>
					</div>

					{/* Village / Town */}
					<div>
						<label htmlFor='nameEN'>Village / Town</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
						/>
					</div>
					{/* Street */}
					<div>
						<label htmlFor='nameEN'>Street</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
						/>
					</div>
					{/* House */}
					<div>
						<label htmlFor='nameEN'>House</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
						/>
					</div>
				</div>
				{/* Second column  */}
				<div className='flex flex-col gap-2'>
					<div className='flex justify-between'>
						<p>PERMANENT</p>
						<div>
							<input
								type='checkbox'
								name=''
								id=''
							/>{" "}
							Same as Present Address
						</div>
					</div>
					{/* District  */}
					<div>
						<label htmlFor='nameEN'>District</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{/* {bloodGroup.map((g, index) => (
								<option
									key={index}
									value={g}
								>
									{g}
								</option>
							))} */}
						</select>
					</div>
					{/* Thana  */}
					<div>
						<label htmlFor='nameEN'>Thana</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{/* {bloodGroup.map((g, index) => (
								<option
									key={index}
									value={g}
								>
									{g}
								</option>
							))} */}
						</select>
					</div>

					{/* Union/Ward  */}
					<div>
						<label htmlFor='nameEN'>Union/Ward</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{/* {bloodGroup.map((g, index) => (
								<option
									key={index}
									value={g}
								>
									{g}
								</option>
							))} */}
						</select>
					</div>
					{/* post office  */}
					<div>
						<label htmlFor='nameEN'>post office</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{/* {bloodGroup.map((g, index) => (
								<option
									key={index}
									value={g}
								>
									{g}
								</option>
							))} */}
						</select>
					</div>

					{/* Village / Town */}
					<div>
						<label htmlFor='nameEN'>Village / Town</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
						/>
					</div>
					{/* Street */}
					<div>
						<label htmlFor='nameEN'>Street</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
						/>
					</div>
					{/* House */}
					<div>
						<label htmlFor='nameEN'>House</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
						/>
					</div>
				</div>
				{/* Third column  */}
				<div className='flex flex-col gap-2'>
					<p>ADDRESS OF FOREIGN CITIZEEN</p>
					{/* District  */}
					<div>
						<label htmlFor='nameEN'>District</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{/* {bloodGroup.map((g, index) => (
								<option
									key={index}
									value={g}
								>
									{g}
								</option>
							))} */}
						</select>
					</div>
					{/* Thana  */}
					<div>
						<label htmlFor='nameEN'>Thana</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{/* {bloodGroup.map((g, index) => (
								<option
									key={index}
									value={g}
								>
									{g}
								</option>
							))} */}
						</select>
					</div>

					{/* Union/Ward  */}
					<div>
						<label htmlFor='nameEN'>Union/Ward</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{/* {bloodGroup.map((g, index) => (
								<option
									key={index}
									value={g}
								>
									{g}
								</option>
							))} */}
						</select>
					</div>
					{/* post office  */}
					<div>
						<label htmlFor='nameEN'>post office</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							{/* {bloodGroup.map((g, index) => (
								<option
									key={index}
									value={g}
								>
									{g}
								</option>
							))} */}
						</select>
					</div>

					{/* Village / Town */}
					<div>
						<label htmlFor='nameEN'>Village / Town</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
						/>
					</div>
					{/* Street */}
					<div>
						<label htmlFor='nameEN'>Street</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
						/>
					</div>
					{/* House */}
					<div>
						<label htmlFor='nameEN'>House</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Address;
