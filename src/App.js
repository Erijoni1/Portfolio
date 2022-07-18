import "./App.scss";
import React from 'react'
import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Loading from "./components/shared/Loading/Loading";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import HomeLanding from "./pages/HomeLanding/HomeLanding";

const HomeLandingg = lazy(()=> import ('./pages/HomeLanding/HomeLanding'))

function App() {
  const language = useSelector((state) => state.language.language);
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <IntlProvider>
          <ScrollToTop />
          <Routes>
          <Route exact path="/" element={<HomeLandingg />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </IntlProvider>
      </Suspense>
    </Router>
  );
}

export default App;
