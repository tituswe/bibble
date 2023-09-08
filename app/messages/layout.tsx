export default function MessagesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section className="pt-20 pb-12 h-full">{children}</section>;
}
