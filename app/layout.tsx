import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <main className="container mx-auto py-8">{children}</main>
      </body>
    </html>
  );
}
