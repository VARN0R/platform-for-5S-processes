import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LINK_PATH } from "../../constants";
import Home from "../../pages/Home/Home";
import Tasks from "../../pages/Tasks/Tasks";
import Contacts from "../../pages/Contacts/Contacts";

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
