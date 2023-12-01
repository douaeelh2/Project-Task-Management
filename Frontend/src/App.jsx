import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { useState } from "react";
import { SignIn } from "./pages/auth";
function App() {

  return (
    <Routes>
      <Route path="/" element={<SignIn replace />}></Route>
      <Route path="/dashboard/*" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
