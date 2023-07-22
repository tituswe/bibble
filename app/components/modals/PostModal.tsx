'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BiFemaleSign, BiMaleSign } from 'react-icons/bi';

import usePostModal from '@/app/hooks/usePostModal';
import Heading from '../Heading';
import BirthdayInput from '../inputs/BirthdayInput';
import BreedInput from '../inputs/BreedInput';
import GenderInput from '../inputs/GenderInput';
import ImageUpload from '../inputs/ImageUpload';
import Input from '../inputs/Input';
import { breeds } from '../navbar/Breeds';
import Modal from './Modal';

enum STEPS {
	BREED = 0,
	GENDER = 1,
	NAME = 2,
	BIRTHDAY = 3,
	IMAGES = 4,
	PRICE = 5,
}

const PostModal = () => {
	const router = useRouter();
	const postModal = usePostModal();

	const [isLoading, setIsLoading] = useState(false);
	const [step, setStep] = useState(STEPS.BREED);

	const {
		register,
		handleSubmit,
		setValue,
		watch,
		formState: { errors },
		reset,
	} = useForm<FieldValues>({
		defaultValues: {
			breed: '',
			gender: '',
			name: '',
			birthday: new Date(Date.now()).toISOString(), // TODO Implement this; take note of ISOString format
			imageSrc: '',
			price: 0,
		},
	});

	const breed = watch('breed');
	const gender = watch('gender');
	const name = watch('name');
	const birthday = watch('birthday');
	const imageSrc = watch('imageSrc');
	const price = watch('price');

	const setCustomValue = (id: string, value: any) => {
		setValue(id, value, {
			shouldValidate: true,
			shouldDirty: true,
			shouldTouch: true,
		});
	};

	const onBack = () => {
		setStep((value) => value - 1);
	};

	const onNext = () => {
		setStep((value) => value + 1);
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		if (step !== STEPS.PRICE) {
			return onNext();
		}

		setIsLoading(true);
		axios
			.post('/api/pets', data)
			.then(() => {
				toast.success('Pet posted successfully!');
				router.refresh();
				reset();
				setStep(STEPS.BREED);
				postModal.onClose();
			})
			.catch(() => {
				toast.error('Something went wrong!');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const actionLabel = useMemo(() => {
		if (step === STEPS.PRICE) {
			return 'Post';
		}

		return 'Next';
	}, [step]);

	const secondaryActionLabel = useMemo(() => {
		if (step === STEPS.BREED) {
			return undefined;
		}

		return 'Back';
	}, [step]);

	let bodyContent = (
		<div className="flex flex-col gap-8">
			<Heading title="Introduce us to your friend" subtitle="Pick a breed" />
			<div
				className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
			>
				{breeds.map((b) => (
					<div key={b.label} className="col-span-1">
						<BreedInput
							onClick={(breed) => setCustomValue('breed', breed)}
							selected={breed === b.label}
							label={b.label}
							icon={b.icon}
						/>
					</div>
				))}
			</div>
		</div>
	);

	if (step === STEPS.GENDER) {
		bodyContent = (
			<div className="flex flex-col h-full gap-8">
				<Heading
					title="Introduce us to your friend"
					subtitle="What's their gender?"
				/>
				<div className="flex flex-col h-full justify-between gap-3">
					<GenderInput
						onClick={() => setCustomValue('gender', 'male')}
						selected={gender === 'male'}
						label={'male'}
						icon={BiMaleSign}
					/>
					<GenderInput
						onClick={() => setCustomValue('gender', 'female')}
						selected={gender === 'female'}
						label={'female'}
						icon={BiFemaleSign}
					/>
				</div>
			</div>
		);
	}

	if (step === STEPS.NAME) {
		bodyContent = (
			<div className="flex flex-col h-full gap-8">
				<Heading
					title="Introduce us to your friend"
					subtitle="What's their name?"
				/>
				<Input
					id="name"
					label="Name"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
			</div>
		);
	}

	if (step === STEPS.BIRTHDAY) {
		bodyContent = (
			<div className="flex flex-col h-full gap-8">
				<Heading
					title="Introduce us to your friend"
					subtitle="What's their birthday?"
				/>
				<BirthdayInput />
			</div>
		);
	}

	if (step === STEPS.IMAGES) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading
					title="Add some photos"
					subtitle="Show what your friend looks like!"
				/>
				<ImageUpload
					onChange={(value) => setCustomValue('imageSrc', value)}
					value={imageSrc}
				/>
			</div>
		);
	}

	if (step === STEPS.PRICE) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading title="Set a price" subtitle="How much do you ask for?" />
				<Input
					id="price"
					label="Price"
					formatPrice
					type="number"
					disabled={isLoading}
					register={register}
					errors={errors}
					required
				/>
			</div>
		);
	}

	return (
		<Modal
			disabled={isLoading}
			isOpen={postModal.isOpen}
			onClose={postModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			actionLabel={actionLabel}
			secondaryActionLabel={secondaryActionLabel}
			secondaryAction={step === STEPS.BREED ? undefined : onBack}
			title="Find buddy a home!"
			body={bodyContent}
		/>
	);
};

export default PostModal;
