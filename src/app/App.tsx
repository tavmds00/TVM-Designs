import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { NewMOAPage } from "./pages/NewMOAPage";
import { BreezeFlightStatusPage } from "./pages/BreezeFlightStatusPage";
import { IntervalPage } from "./pages/IntervalPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { MyCareerPage } from "./pages/MyCareerPage";
import { KRUIPage } from "./pages/KRUI";
import { A11yPage } from "./pages/A11y";
import { UsaaPage } from "./pages/Usaa";
import { WavPage } from "./pages/Wav";
import { TakPage } from "./pages/Tak";
import { PasswordGate } from "./components/PasswordGate";

export default function App() {
  return (
    <PasswordGate>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/project/mycareer" element={<MyCareerPage />} />
          <Route path="/projects/mycareer" element={<MyCareerPage />} />
          <Route path="/project/krui" element={<KRUIPage />} />
          <Route path="/projects/krui" element={<KRUIPage />} />
          <Route path="/project/a11y" element={<A11yPage />} />
          <Route path="/projects/a11y" element={<A11yPage />} />
          <Route path="/project/usaa" element={<UsaaPage />} />
          <Route path="/projects/usaa" element={<UsaaPage />} />
          <Route path="/project/wav" element={<WavPage />} />
          <Route path="/projects/wav" element={<WavPage />} />
          <Route path="/project/tak" element={<TakPage />} />
          <Route path="/projects/tak" element={<TakPage />} />
          <Route path="/projects" element={<Navigate to="/portfolio" replace />} />
          <Route path="/projects/new-moa" element={<NewMOAPage />} />
          <Route path="/project/new-moa" element={<NewMOAPage />} />
          <Route path="/projects/breeze-flight-status" element={<BreezeFlightStatusPage />} />
          <Route path="/project/breeze-flight-status" element={<BreezeFlightStatusPage />} />
          <Route path="/projects/interval" element={<IntervalPage />} />
          <Route path="/project/interval" element={<IntervalPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </PasswordGate>
  );
}