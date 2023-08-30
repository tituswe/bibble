import getCurrentUser from '../actions/getCurrentUser';
import AnalyticsPreview from './previews/AnalyticsPreview';
import CalendarPreview from './previews/CalendarPreview';
import ListingsPreview from './previews/ListingsPreview';
import MessagesPreview from './previews/MessagesPreview';

const Business = async () => {
	const currentUser = await getCurrentUser();
	return (
		<main className="flex flex-col gap-8 px-10 py-8">
			<h1 className="text-2xl font-semibold">Welcome, {currentUser?.name}!</h1>
			<AnalyticsPreview />
			<MessagesPreview />
			<CalendarPreview />
			<ListingsPreview />
		</main>
	);
};

export default Business;
