export default function BusinessLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section className="px-20 py-40">{children}</section>;
}
