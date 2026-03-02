import Sidebar from "@/components/Sidebar/Sidebar.jsx";
import "./globals.css";

export const metadata = {
  title: "PG Management",
  description: "PG Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 ml-0 md:ml-64">
          {children}
        </main>
      </body>
    </html>
  );
}