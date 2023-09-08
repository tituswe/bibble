'use client';

import { ChangeEvent, useState } from 'react';

import { SafeChat, SafeChatParticipant, SafeMessage, SafePet, SafeUser } from '../types';
import { Breed } from '@prisma/client';

import { BiFilter, BiX, BiDotsHorizontalRounded, BiSend, BiHappyHeartEyes, BiBone } from 'react-icons/bi';
import { LuPartyPopper } from 'react-icons/lu';

import Avatar from '../components/Avatar';
import axios from 'axios';
import Image from 'next/image';

interface MessagesClientProps {
	currentUser: SafeUser;
	chats: Array<SafeChat & {
		listing: SafePet & {
			breed: Breed,
		},
		participants: Array<SafeChatParticipant & {
			user: SafeUser,
		}>,
		messages: Array<SafeMessage & {
			sender: SafeUser,
		}>,
	}>;
};

function getChatCounterPartyName(user: MessagesClientProps["currentUser"], chat: MessagesClientProps["chats"][0]) {
	return chat.participants.filter(p => p.userId !== user.id).map(p => p.user.name)
}

function getLocaleTime(datetime: string) {
	const date = new Date(Date.parse(datetime));
	const timeString = date.toLocaleTimeString().split(':').reduce((str1, str2, index) => index === 2 ? str1 + str2.slice(2) : str1 + ":" + str2);
	const dateString = date.toLocaleDateString();
	return timeString + ", " + dateString;
}

const MessagesClient: React.FC<MessagesClientProps> = ({ currentUser, chats }) => {
	const [selectedChat, setSelectedChat] = useState<MessagesClientProps["chats"][0] | null>(chats[chats.length - 1]);
	const [selectedChatIndex, setSelectedChatIndex] = useState<number | null>(chats.length-1);
	const [showDetails, setShowDetails] = useState<boolean>(true);
	const [messageToSend, setMessageToSend] = useState<string>('');
	const toggleShowDetails = () => {
		setShowDetails(!showDetails);
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setMessageToSend(event.target.value);
	};

	const handleSelectChat = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>, selectedChat: MessagesClientProps["chats"][0], index: number) => {
		event.preventDefault();
		setSelectedChat(selectedChat);
		setSelectedChatIndex(index);
	};
	
	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, chatId: string) => {
		if (event.key === 'Enter') {
		  console.log('enter press here! ');
		  handleSendMessage(chatId);
		};
	};

	const handleSendMessage = async (chatId: string) => {
		try {
			console.log(messageToSend);
			await axios.post('api/messages/message', {
				chatId: chatId,
				senderId: currentUser.id,
				message: messageToSend,
			}).then((response) => {
				console.log("Response", response);
				setMessageToSend('');
			})
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className='flex flex-row justify-center h-full'>
			{/* Left column - MESSAGES */}
			<div className='flex flex-col h-full w-2/12'>
				{/* Header */}
				<header className='flex flex-row justify-between p-6 border-b border-neutral-100'>
					<h1 className='font-bold text-lg self-center'>Messages</h1>
					<button className='w-10 h-10 rounded-full flex items-center justify-center transition cursor-pointer hover:scale-110 hover:bg-neutral-100 hover:shadow-md undefined'>
						<BiFilter size={24} />
					</button>
				</header>

				{/* Chats */}
				<main className='flex flex-col-reverse overflow-scroll'>
				{chats.map((chat, index) => {
					const latestMessage = chat.messages[chat.messages.length - 1];
					return (
						<div key={index}>
						<hr className='mx-4'/>

						<span className={`flex flex-row p-6 items-center rounded-2xl transition cursor-pointer hover:bg-sky-100 ${index === selectedChatIndex ? 'bg-neutral-100' : 'bg-white'}`} onClick={(e) => handleSelectChat(e, chat, index)}>
							<Avatar src={null} large/>

							<span className='flex flex-col ml-4 gap-2'>
								<h2 className='font-semibold text-base'>{getChatCounterPartyName(currentUser, chat)}</h2>
								<p className='font-light text-sm line-clamp-1' suppressHydrationWarning>{latestMessage.message}</p>
								<p className='font-light text-xs' suppressHydrationWarning>{getLocaleTime(latestMessage.createdAt)}</p>
							</span>
						</span>
						</div>
					)
				})}
				</main>
			</div>

			{/* Middle column - CHAT */}
			<div className={`flex flex-col h-full ${showDetails ? 'w-7/12 ' : 'w-10/12'} border-l border-r border-neutral-100 `}>
				{/* Header */}
				<header className='flex flex-row justify-between p-6 border-b border-neutral-100'>
					{selectedChat ? (
						<>
						<h1 className='font-bold text-lg self-center'>{getChatCounterPartyName(currentUser, selectedChat)}</h1>
						<button className='py-2 px-4 h-10 rounded-xl flex items-center justify-center border-2 transition cursor-pointer hover:bg-neutral-100 hover:shadow-sm' onClick={toggleShowDetails}>
							{showDetails ? (
								<label className='text-sm cursor-pointer '>Hide Details</label>
							) : ( 
								<label className='text-sm cursor-pointer '>View Details</label>
							)}
						</button>
						</>
					) : (	
						<>
						<h1 className='font-bold text-lg self-center'>Chat</h1>
						<button className='py-2 px-4 h-10 rounded-xl flex items-center justify-center border-2 cursor-not-allowed border-neutral-300' disabled>
							<label className='text-sm text-neutral-300 cursor-not-allowed '>View Details</label>
						</button>
						</>
					)}
				</header>

				{/* Chat Module */}
				{selectedChat ? (
					<main className='flex flex-col w-full h-full place-content-end gap-4 overflow-hidden'>
						{/* Messages */}
						<div className='flex flex-col-reverse gap-4  w-full h-full place-items-center overflow-scroll'>
							{/* Chat Bubble */}
							{selectedChat.messages.reverse().map((message, i) => {
								return (
									<span key={i} className='flex flex-row w-3/4 rounded-xl p-4 transition hover:bg-neutral-100'>
										<div className='aspect-square'>
												<Avatar src={message.sender.image}/>
										</div>

										<span className='flex flex-col flex-grow ml-4 mr-2 w-3/4'>
											<header className='flex flex-col'>
												<h1 className='font-semibold text-lg'>{message.sender.name}</h1>
												<h2 className='font-extralight text-xs' suppressHydrationWarning>{getLocaleTime(message.createdAt)}</h2>
											</header>

											<p className='mt-2 font-normal text-base'>
												{message.message}
											</p>
										</span>

										<button className='w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer hover:scale-110 hover:bg-white hover:shadow-md'>
											<BiDotsHorizontalRounded size={18} />
										</button>
									</span>
								);
							})}
						</div>

						{/* Input */}
						<div className='flex flex-row gap-2 w-full px-12 mb-4'>
							<input className='text-sm rounded-full border py-2 px-4 flex flex-grow' placeholder='Type your message here' onChange={(e) => handleInputChange(e)} value={messageToSend} onKeyDown={(e) => handleKeyDown(e, selectedChat.id)}/>
							<button type='submit' className='rounded-full border py-2 px-4 transition text-white bg-sky-500 hover:scale-110 hover:bg-sky-600 hover:shadow-md' onClick={() => handleSendMessage(selectedChat.id)}>
								<BiSend size={24} />
							</button>
						</div>
					</main>
				) : (
					<main className='flex flex-col w-full h-full place-content-center'>
						<h1 className='flex justify-center font-light text-3xl text-neutral-300'>no chat</h1>
					</main>
				)}
			</div>

			{/* Right column - DETAILS */}
			{showDetails && (
				<div className='flex flex-col h-full w-3/12'>
					{/* Header */}
					<header className='flex flex-row justify-between p-6 border-b border-neutral-100'>
						<h1 className='font-bold text-lg self-center'>Details</h1>
						<button className='w-10 h-10 rounded-full flex items-center justify-center transition cursor-pointer hover:scale-110 hover:bg-neutral-100 hover:shadow-md' onClick={toggleShowDetails}>
							<BiX size={24} />
						</button>
					</header>

					{/* Details */}
					{selectedChat ? (
						<main className='flex flex-col w-full h-full gap-8 overflow-scroll'>
							{/* Cover Image */}
							<div className='w-full aspect-square relative'>
								<Image
									alt="Image"
									src={selectedChat.listing.images[0]}
									fill
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									className='object-cover w-full'
								/>

								<span className='flex flex-col w-full aspect-square absolute bg-black/[.45]'>
									<span className='h-1/3 flex flex-col place-items-start justify-end px-8'>
										<h2 className='text-2xl font-bold text-white opacity-100'>Your meeting with</h2>
										<h2 className='text-4xl font-bold text-white opacity-100'>{selectedChat.listing.breed.name}</h2>
									</span>

									<span className='h-2/3 flex flex-col place-items-end justify-end px-8 py-12'>
										<h2 className='text-lg font-bold text-white opacity-100'>We hope its love at first sight!</h2>
										<i className='text-white opacity-100 flex flex-row gap-1'>
											<BiHappyHeartEyes size={24} />
											<BiBone size={24} />
										</i>
									</span>
								</span>
							</div>

							{/* Section 1 */}
							<div className='flex flex-col gap-2 mx-8'>
								<h2 className='text-lg font-semibold'>It's a date!</h2>
								<p className='text-base font-light'>If you need to offer or request money for an issue from the trip, you can use our Resolution Centre.</p>
							</div>

							<hr className='mx-4'/>

							{/* Section 2 */}
							<div className='flex flex-row gap-8 mx-8 place-items-center'>
								<span>
									<i><LuPartyPopper size={80} /></i>
								</span>
								<span className='flex flex-col gap-1'>
									<h2 className='text-lg font-semibold pb-1'>Our meetcute</h2>
									<h2 className='text-xl font-bold'>{'DATE'}</h2>
									<p className='text-sm font-extralight'>{'TIME'}</p>
								</span>
								
							</div>

							<hr className='mx-4'/>
						</main>
					) : (
						<main className='flex flex-col w-full h-full place-content-center'>
							<h1 className='flex justify-center font-light text-3xl text-neutral-300'>no chat</h1>
						</main>
					)}
				</div>
			)}
		</div>
	);
};

export default MessagesClient;
