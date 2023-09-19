import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Show from "./Show";
import './style.scss'
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Show />} />
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
