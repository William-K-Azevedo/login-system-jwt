import { useState } from "react";
import reactLogo from "./assets/react.svg";
import queryClient from "./utils/QueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Registro-Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <Login />
    </QueryClientProvider>
  );
}

export default App;
