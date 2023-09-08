import getChatsByUserId from '../actions/getChatsByUserId';
import getCurrentUser from '../actions/getCurrentUser';
import MessagesClient from './MessagesClient';

const MessagesPage = async () => {
	const currentUser = await getCurrentUser();
	const chats = await getChatsByUserId({ userId: currentUser?.id });

	return currentUser ? <MessagesClient currentUser={currentUser} chats={chats} /> : <div>not logged in</div>;
};

export default MessagesPage;
