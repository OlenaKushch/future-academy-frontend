import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./App.module.css";
import { EnrollModal } from "./components/courses/EnrollModal/EnrollModal";

import { Sidebar } from "./components/Sidebar/Sidebar";
import { Toaster } from "react-hot-toast";
import { CourseList } from "./components/courses/CourseList/CourseList";
import { CourseDetailsPage } from "./app/page";
import { Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.layout}>
        <aside className={styles.sidebarWrapper}>
          <Sidebar />
        </aside>
        <main className={styles.mainContent}>
          <Routes>
            <Route path="/" element={<CourseDetailsPage />} />
            <Route path="/courses/:id" element={<CourseDetailsPage />} />
          </Routes>
          <header className={styles.header}>
            <h1>Вітаємо у Future Academy!</h1>
            <p>Оберіть свій шлях розвитку за допомогою нашої платформи.</p>
          </header>

          {/* Сюди ми виводимо наш основний контент */}
          <section className={styles.coursesSection}>
            <CourseList />
          </section>
        </main>
        <EnrollModal /> {/* Вона просто лежить тут і не заважає */}
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
