'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AiFillFacebook } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import useLoginModal from '@/app/kennel/hooks/useLoginModal';
import useRegisterModal from '@/app/kennel/hooks/useRegisterModal';
import handleToBeImplemented from '@/app/temp/handleToBeImplemented';

import Button from '../Button';
import Heading from '../Heading';
import Input from '../inputs/Input';
import Modal from './Modal';

const LoginModal = () => {
	const router = useRouter();
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			email: '',
			password: '',
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		signIn('credentials', {
			...data,
			redirect: false,
		}).then((callback) => {
			setIsLoading(false);

			if (callback?.ok) {
				toast.success('Logged in successfully!');
				router.refresh();
				loginModal.onClose();
			}

			if (callback?.error) {
				toast.error(callback.error);
			}
		});
	};

	const onToggle = useCallback(() => {
		loginModal.onClose();
		registerModal.onOpen();
	}, [loginModal, registerModal]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Heading title="Welcome back!" subtitle="Login to your account" />
			<Input
				id="email"
				label="Email"
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
			<div className="w-full relative h-[68px]"></div>
		</div>
	);

	const footerContent = (
		<div className="flex flex-col gap-4">
			<hr />
			<Button
				outline
				label="Continue with Google"
				icon={FcGoogle}
				onClick={() => signIn('google')}
			/>
			<Button
				outline
				label="Continue with Facebook"
				icon={AiFillFacebook}
				onClick={handleToBeImplemented}
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
					<div>First time?</div>
					<div
						onClick={onToggle}
						className="
							text-neutral-800
							cursor-pointer
							hover:underline
							hover:text-green-500
							duration-200
							transition
						"
					>
						Sign up
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			title="Login"
			actionLabel="Continue"
			onClose={loginModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default LoginModal;
