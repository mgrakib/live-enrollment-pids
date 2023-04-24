import React from 'react';

const PersonalInfo = () => {
    return (
		<div className='my-5'>
			<form className='grid grid-cols-4 gap-16'>
				<div className='flex flex-col gap-1'>
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
							<option value=''>Select</option>
							<option value='Male'>Male</option>
							<option value='Female'>Female</option>
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
							<option value=''>Select</option>
							<option value='Islam'>Islam</option>
							<option value='Hindu'>Hindu</option>
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
							<option value='Bangladeshi'>Bangladeshi</option>
							<option value='India'>India</option>
							<option value='USA'>USA</option>
						</select>
					</div>
					{/* Occupation  */}
					<div>
						<label htmlFor='nameEN'>Natonality</label>
						<select
							name=''
							id=''
							className='inputFeild'
							required
						>
							<option value=''>Select</option>
							<option value='Worder'>Worder</option>
							<option value='Teacher'>Teacher</option>
						</select>
					</div>
				</div>
				<div>
					<label htmlFor='nameEN'>Name In English</label>
					<input className='inputFeild' />
				</div>
				<div>
					<label htmlFor='nameEN'>Name In English</label>
					<input className='inputFeild' />
				</div>
				<div>
					<label htmlFor='nameEN'>Name In English</label>
					<input className='inputFeild' />
				</div>
			</form>
		</div>
	);
};

export default PersonalInfo;<p>this is PersonalInfo</p>