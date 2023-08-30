'use client';

import { useState } from 'react';

import { SafeUser } from '../types';
import { Chat, ChatParticipant, Message } from '@prisma/client';

import { BiFilter, BiX } from 'react-icons/bi';

import Avatar from '../components/Avatar';

interface MessagesClientProps {
	currentUser: SafeUser;
	chats: Array<Chat & { participants: Array<ChatParticipant & { user: SafeUser }> }>;
};

const MessagesClient: React.FC<MessagesClientProps> = ({ currentUser, chats }) => {
	const [selectedChat, setSelectedChat] = useState<Chat & { participants: Array<ChatParticipant & { user: SafeUser }> } | null>(null);
	const [showDetails, setShowDetails] = useState<Boolean>(true);

	const getChatCounterPartyName = (chat: Chat & { participants: Array<ChatParticipant & { user: SafeUser }> }) => {
		return chat.participants.filter(p => p.userId !== currentUser.id).map(p => p.user.name)
	}
	const toggleShowDetails = () => {
		setShowDetails(!showDetails);
	}

	return (
		<div className='flex flex-row justify-center items-start'>
			{/* Left column - MESSAGES */}
			<div className='flex flex-col justify-center w-1/6'>
				{/* Header */}
				<header className='flex flex-row justify-between p-6 border-b border-neutral-100'>
					<h1 className='font-bold text-lg self-center'>Messages</h1>
					<button className='w-10 h-10 rounded-full flex items-center justify-center transition cursor-pointer hover:scale-110 hover:bg-neutral-100 hover:shadow-md undefined'>
						<BiFilter size={24} />
					</button>
				</header>

				{/* Chats */}
				{chats.map((chat) => {
					return (
						<>
						<div className='flex flex-row p-6 items-center rounded-2xl transition cursor-pointer hover:bg-neutral-100' onClick={() => setSelectedChat(chat)}>
							<Avatar src={null} large/>

							<div className='flex flex-col ml-4 gap-2'>
								<h2 className='font-semibold text-base'>{getChatCounterPartyName(chat)}</h2>
								<p className='font-light text-sm'>{'TODO: LATEST MESSAGE'}</p>
								<p className='font-light text-xs'>{new Date(Date.now()).toLocaleTimeString()}</p>
							</div>
						</div>

						<hr className='mx-4'/>
						</>
					)
				})}
			</div>

			{/* Middle column - CHAT */}
			<div className={`flex flex-col justify-center gap-4 border-l border-r border-neutral-100 ${showDetails ? 'w-2/3 ' : 'w-5/6'}`}>
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
			</div>

			{/* Right column - DETAILS */}
			{showDetails ? (
				<div className='flex flex-col justify-center w-1/6'>
					{/* Header */}
					<header className='flex flex-row justify-between p-6 border-b border-neutral-100'>
						<h1 className='font-bold text-lg self-center'>Details</h1>
						<button className='w-10 h-10 rounded-full flex items-center justify-center transition cursor-pointer hover:scale-110 hover:bg-neutral-100 hover:shadow-md' onClick={toggleShowDetails}>
							<BiX size={24} />
						</button>
					</header>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default MessagesClient;
