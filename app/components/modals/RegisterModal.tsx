'use client';

import axios from 'axios';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import Button from '../Button';
import Heading from '../Heading';
import Input from '../inputs/Input';
import Modal from './Modal';

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: '',
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		axios
			.post('/api/register', data)
			.then(() => {
				registerModal.onClose();
			})
			.catch((error) => {
				toast.error('Oh no! Something went wrong.');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading
				title="Welcome to Bibble!"
				subtitle="Create an account to get started"
			/>
			<Input
				id="email"
				label="Email"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="name"
				label="Name"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
			<Input
				id="password"
				type="password"
				label="Password"
				disabled={isLoading}
				register={register}
				errors={errors}
				required
			/>
		</div>
	);

	const footerContent = (
		<div className="flex flex-col gap-4">
			<hr />
			<Button
				outline
				label="Continue with Google"
				icon={FcGoogle}
				onClick={() => {}}
			/>
			<Button
				outline
				label="Continue with Facebook"
				icon={AiFillFacebook}
				onClick={() => {}}
			/>
			<div
				className="
					text-neutral-500
					text-center
					mt-4
					font-light
				"
			>
				<div
					className="
						justify-center 
						flex
						flex-row
						items-center 
						gap-2
					"
				>
					<div>Already have an account?</div>
					<div
						onClick={registerModal.onClose}
						className="
							text-neutral-800
							cursor-pointer
							hover:underline
							hover:text-green-500
							duration-200
							transition
						"
					>
						Log in
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Register"
			actionLabel="Continue"
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
