import "./globals.css";

export const metadata = {
  title: "Social Media",
  description: "Created using Lens Protocol by Aditya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
