import { Sidebar } from "../components/Sidebar/Sidebar";

export default function RootLayout({
  children,
  modal, // Додаємо цей пропс
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <div className="main-layout">
          <Sidebar />
          <main>{children}</main>
        </div>
        {modal} {/* Рендеримо модалку тут */}
      </body>
    </html>
  );
}