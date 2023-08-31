'use client';

import { useState } from 'react';

import { SafeUser } from '../types';
import { Chat, ChatParticipant, Message, User } from '@prisma/client';

import { BiFilter, BiX, BiDotsHorizontalRounded, BiSend } from 'react-icons/bi';

import Avatar from '../components/Avatar';

interface MessagesClientProps {
	currentUser: SafeUser | null;
	chats: Array<Chat & { 
		participants: Array<ChatParticipant & { user: User }>,
		messages: Array<Message & { sender: User }>
		}>;
};

const MessagesClient: React.FC<MessagesClientProps> = ({ currentUser, chats }) => {
	const [selectedChat, setSelectedChat] = useState<Chat & { participants: Array<ChatParticipant & { user: User }>, messages: Array<Message & { sender: User }> } | null>(chats[chats.length-1]);
	
	const [showDetails, setShowDetails] = useState<Boolean>(true);

	const getChatCounterPartyName = (chat: Chat & { participants: Array<ChatParticipant & { user: User }>, messages: Array<Message & { sender: User }> }) => {
		return chat.participants.filter(p => p.userId !== currentUser?.id).map(p => p.user.name)
	}

	const toggleShowDetails = () => {
		setShowDetails(!showDetails);
	}
	
	// const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	// const messages = [1];

	return (
		<div className='flex flex-row justify-center items-start h-full'>
			{/* Left column - MESSAGES */}
			<div className='flex flex-col h-full w-1/6'>
				{/* Header */}
				<header className='flex flex-row justify-between p-6 border-b border-neutral-100'>
					<h1 className='font-bold text-lg self-center'>Messages</h1>
					<button className='w-10 h-10 rounded-full flex items-center justify-center transition cursor-pointer hover:scale-110 hover:bg-neutral-100 hover:shadow-md undefined'>
						<BiFilter size={24} />
					</button>
				</header>

				{/* Chats */}
				<main className='flex flex-col-reverse overflow-scroll'>
				{chats.map((chat) => {
					return (
						<>
						<hr className='mx-4'/>

						<div className='flex flex-row p-6 items-center rounded-2xl transition cursor-pointer hover:bg-neutral-100' onClick={() => setSelectedChat(chat)}>
							<Avatar src={null} large/>

							<div className='flex flex-col ml-4 gap-2'>
								<h2 className='font-semibold text-base'>{getChatCounterPartyName(chat)}</h2>
								<p className='font-light text-sm'>{'TODO: LATEST MESSAGE'}</p>
								<p className='font-light text-xs'>{'LATEST MESSAGE TIME'}</p>
							</div>
						</div>
						</>
					)
				})}
				</main>
			</div>

			{/* Middle column - CHAT */}
			<div className={`flex flex-col h-full ${showDetails ? 'w-2/3 ' : 'w-5/6'} border-l border-r border-neutral-100 `}>
				{/* Header */}
				<header className='flex flex-row justify-between p-6 border-b border-neutral-100'>
					{selectedChat ? (
						<>
						<h1 className='font-bold text-lg self-center'>{getChatCounterPartyName(selectedChat)}</h1>
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
					<main className='flex flex-col w-full h-full place-content-end gap-4 overflow-scroll'>
						{/* Messages */}
						<div className='flex flex-col-reverse gap-4 place-items-center overflow-scroll w-full'>
							{/* Chat Bubble */}
							{selectedChat.messages.map((message, i) => {
								return (
									<span key={i} className='flex flex-row w-3/4 rounded-xl p-4 hover:bg-neutral-100'>
										<div className='aspect-square'>
												<Avatar src={message.sender.image}/>
										</div>

										<span className='flex flex-col flex-grow ml-4 mr-2 w-3/4'>
											<header className='flex flex-col'>
												<h1 className='font-semibold text-lg'>{message.sender.name}</h1>
												<h2 className='font-extralight text-xs'>{message.createdAt.toLocaleTimeString()}</h2>
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
							<input className='text-sm rounded-full border py-2 px-4 flex flex-grow' placeholder='Type your message here'></input>
							<button className='rounded-full border py-2 px-4 transition text-white bg-sky-500 hover:scale-110 hover:bg-sky-600 hover:shadow-md'>
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
			{showDetails ? (
				<div className='flex flex-col h-full w-1/6'>
					{/* Header */}
					<header className='flex flex-row justify-between p-6 border-b border-neutral-100'>
						<h1 className='font-bold text-lg self-center'>Details</h1>
						<button className='w-10 h-10 rounded-full flex items-center justify-center transition cursor-pointer hover:scale-110 hover:bg-neutral-100 hover:shadow-md' onClick={toggleShowDetails}>
							<BiX size={24} />
						</button>
					</header>

					{/* Details */}
					<main className='flex flex-col w-full h-full place-content-center'>
						<h1 className='flex justify-center font-light text-3xl text-neutral-300'>no chat</h1>
					</main>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default MessagesClient;
