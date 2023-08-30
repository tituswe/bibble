export default function BusinessLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section className="px-10 py-32">{children}</section>;
}
