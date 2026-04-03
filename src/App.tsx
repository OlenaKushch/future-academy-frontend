import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import styles from "./App.module.css";
import { EnrollModal } from "./components/courses/EnrollModal/EnrollModal";

import { Sidebar } from "./components/Sidebar/Sidebar";
import { Header } from "./components/header/Header";
import { Toaster } from "react-hot-toast";
import { CourseList } from "./components/courses/CourseList/CourseList";
import { CourseDetailsPage } from "./app/page";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.appContainer}>
        <Header />
        <div className={styles.mobileHero}>
          <img src="/hero.png" alt="Future Academy hero" />
        </div>
        <div className={styles.layout}>
        <aside className={styles.sidebarWrapper}>
          <Sidebar />
        </aside>
        <main className={styles.mainContent}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className={styles.aboutSection}>
                    <About />
                  </section>

                  <section className={styles.coursesSection}>
                    <CourseList />
                  </section>
                </>
              }
            />
            <Route path="/courses/:id" element={<CourseDetailsPage />} />
          </Routes>
        </main>
        <EnrollModal /> {/* Вона просто лежить тут і не заважає */}
        <Toaster position="top-right" reverseOrder={false} />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
