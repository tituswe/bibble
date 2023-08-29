export default function BusinessLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section className="py-40">{children}</section>;
}
