import getCurrentUser from '../actions/getCurrentUser';
import getUserChats from '../actions/getUserChats';
import MessagesClient from './MessagesClient';

const MessagesPage = async () => {
	const currentUser = await getCurrentUser();
	const userChats = await getUserChats({ currentUserId: currentUser ? currentUser.id : null});

	return <MessagesClient currentUser={currentUser} chats={userChats}/>;
};

export default MessagesPage;
