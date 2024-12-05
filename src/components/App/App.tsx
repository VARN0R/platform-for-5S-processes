import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LINK_PATH } from "../../constants";

const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));
const Tasks = lazy(() => import("../../pages/Tasks/Tasks"));
const Home = lazy(() => import("../../pages/Home/Home"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={LINK_PATH.HOME} element={<Home />} />
            <Route path={LINK_PATH.TASKS} element={<Tasks />} />
            <Route path={LINK_PATH.CONTACTS} element={<Contacts />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
