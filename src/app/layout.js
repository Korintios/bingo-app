import "./globals.css";

export const metadata = {
  title: "Aplicación de Bingo",
  description: "Esta es una aplicación que genera cartas de bingo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
