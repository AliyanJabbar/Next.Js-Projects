import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-400">
        {children}
      </body>
    </html>
  );
}
