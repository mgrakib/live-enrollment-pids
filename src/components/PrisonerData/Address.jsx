/** @format */

import React, { useEffect, useState } from "react";

const Address = () => {

	// this is for present district
	const [district, setDistrict] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:5000/district`)
			.then(res => res.json())
			.then(data => setDistrict(data));
	}, []);

	// this is for present thana
	const [presentThana, setPresentThana] = useState([]);

	// select district for present
	const [searchPresentThana, setSearchPresentThana] = useState("Select");

	// set function for present thana
	const handelPresentThana = e => {
		const district = e.target.value;
		setSearchPresentThana(district);
	};
	// search preseents thanas
	useEffect(() => {
		fetch(`http://localhost:5000/district/${searchPresentThana}`)
			.then(res => res.json())
			.then(data => setPresentThana(data))
			.catch(error => setPresentThana([]));
	}, [searchPresentThana]);



	const [presentWard, setPresentWard] = useState([]);
	const [searchPresentWard, setSearchPresentWard] = useState('Select');

	const handelPresentWard = e => {
		const thana = e.target.value;
		setSearchPresentWard(thana);
	}

	useEffect(() => {
		fetch(`http://localhost:5000/district/thana/${searchPresentWard}`)
			.then(res => res.json())
			.then(data => setPresentWard(data)).catch(error => setPresentWard([]));
	},[searchPresentWard])


const [presentWardValue, setPresentWardValue] = useState('Select');

	const handelPresentWardValue = e => {
		const ward = e.target.value;
		setPresentWardValue(ward);
	}

	// for disableed
	const [isChecked, setIsChecked] = useState(false);



	// this is for present thana
	const [permanentThana, setPermanentThana] = useState([]);
	// select district for Permanent
	const [searchPermanentThana, setSearchPermanentThana] = useState("Select");
	// handel permanent thana
	const handelPermanentThana = e => {
		const permanentDistrict = event.target.value;
		setSearchPermanentThana(permanentDistrict);
	};

	// search preseents thanas
	useEffect(() => {
		fetch(`http://localhost:5000/district/${searchPermanentThana}`)
			.then(res => res.json())
			.then(data => setPermanentThana(data))
			.catch(error => setPermanentThana([]));
	}, [searchPermanentThana]);


	const [permanentWard, setPermanentWard] = useState([]);
	const [searchPermanentWard, setSearchPermanentWard] = useState("Select");

	const handelPermanentWard = e => {
		const thana = e.target.value;
		setSearchPermanentWard(thana);
	};

	useEffect(() => {
		fetch(`http://localhost:5000/district/thana/${searchPermanentWard}`)
			.then(res => res.json())
			.then(data => setPermanentWard(data))
			.catch(error => setPermanentWard([]));
	}, [searchPermanentWard]);
	

	// PostOffice 
	// present
	const [presentPostOffice, setPresentPostOffice] = useState('')
	const handelPresentPostOffice = e => {
			setPresentPostOffice (e.target.value);
	}
	// Permanent 
	const [permanentPostOffice, setPermanentPostOffice] = useState('');
	const handelPermanentPostOffice = e => {
		setPermanentPostOffice(e.target.value);
	}


	// Village 
	// present
	const [presentVillage, setPresentVillage] = useState('')
	const handelPresentVillage = e => {
			setPresentVillage (e.target.value);
	}
	// Permanent 
	const [permanentVillage, setPermanentVillage] = useState('');
	const handelPermanentVillage = e => {
		setPermanentVillage(e.target.value);
	}
	
	
	// Street
	// present
	const [presentStreet, setPresentStreet] = useState('')
	const handelPresentStreet = e => {
			setPresentStreet (e.target.value);
	}
	// Permanent 
	const [permanentStreet, setPermanentStreet] = useState('');
	const handelPermanentStreet = e => {
		setPermanentStreet(e.target.value);
	}
	
	
	// Home
	// present
	const [presentHome, setPresentHome] = useState('')
	const handelPresentHome = e => {
			setPresentHome (e.target.value);
	}
	// Permanent 
	const [permanentHome, setPermanentHome] = useState('');
	const handelPermanentHome = e => {
		setPermanentHome(e.target.value);
	}

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
							onChange={handelPresentThana}
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
							onChange={handelPresentWard}
							required
						>
							{presentThana.map((th, index) => (
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
							onChange={handelPresentWardValue}
						>
							{presentWard.map((th, index) => (
								<option
									key={index}
									value={th}
								>
									{th}
								</option>
							))}
						</select>
					</div>
					{/* post office */}
					<div>
						<label htmlFor='nameEN'>Post office</label>
						<input
							className='inputFeild'
							name='postOffice'
							required
							onChange={handelPresentPostOffice}
							value={presentPostOffice}
						/>
					</div>

					{/* Village / Town */}
					<div>
						<label htmlFor='nameEN'>Village / Town</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
							onChange={handelPresentVillage}
							value={presentVillage}
						/>
					</div>
					{/* Street */}
					<div>
						<label htmlFor='nameEN'>Street</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
							onChange={handelPresentStreet}
							value={presentStreet}
						/>
					</div>
					{/* House */}
					<div>
						<label htmlFor='nameEN'>House</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
							onChange={handelPresentHome}
							value={presentHome}
						/>
					</div>
				</div>

				{/* Second column permanent  */}
				<div className='flex flex-col gap-2'>
					{/* check box  */}
					<div className='flex justify-between'>
						<p>PERMANENT</p>
						<div>
							<input
								type='checkbox'
								name=''
								id=''
								onClick={() => {
									setIsChecked(!isChecked);
								}}
							/>{" "}
							Same as Present Address
						</div>
					</div>
					{/* District permanent */}
					<div>
						<label htmlFor='nameEN'>District</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
							disabled={isChecked}
							onChange={handelPermanentThana}
						>
							{district.map((d, index) => (
								<option
									key={index}
									value={isChecked ? searchPresentThana : d}
								>
									{isChecked ? searchPresentThana : d}
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
							disabled={isChecked}
							onChange={handelPermanentWard}
						>
							{permanentThana.map((th, index) => (
								<option
									key={index}
									value={isChecked ? searchPresentWard : th}
								>
									{isChecked ? searchPresentWard : th}
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
							disabled={isChecked}
						>
							{permanentWard.map((wa, index) => (
								<option
									key={index}
									value={isChecked ? presentWardValue : wa}
								>
									{isChecked ? presentWardValue : wa}
								</option>
							))}
						</select>
					</div>
					{/* post office */}
					<div>
						<label htmlFor='nameEN'>Post office</label>
						<input
							className='inputFeild'
							name='postOffice'
							required
							value={
								isChecked
									? presentPostOffice
									: permanentPostOffice
							}
							disabled={isChecked}
							onChange={handelPermanentPostOffice}
						/>
					</div>

					{/* Village / Town */}
					<div>
						<label htmlFor='nameEN'>Village / Town</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
							value={
								isChecked ? presentVillage : permanentVillage
							}
							disabled={isChecked}
							onChange={handelPermanentVillage}
						/>
					</div>
					{/* Street */}
					<div>
						<label htmlFor='nameEN'>Street</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
							value={isChecked ? presentStreet : permanentStreet}
							disabled={isChecked}
							onChange={handelPermanentStreet}
						/>
					</div>
					{/* House */}
					<div>
						<label htmlFor='nameEN'>House</label>
						<input
							className='inputFeild'
							name='banglaName'
							required
							value={isChecked ? presentHome : permanentHome}
							disabled={isChecked}
							onChange={handelPermanentHome}
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
