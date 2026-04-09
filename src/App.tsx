import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFoundPage";
import DemoPage from "./pages/DemoPage";
import AiAgentCall from "./pages/AiAgentCall";

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/ai-agent-demo" element={<DemoPage />} />
        <Route path="/ai-agent-call" element={<AiAgentCall />} />


        {/* 404 Page */}
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
