import queryClient from "./utils/QueryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/Registro-Login";
import { Router, ReactLocation } from "@tanstack/react-location";
import PaginaRestrita from "./pages/PaginaRestrita";
import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./components/Navbar";

const location = new ReactLocation();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router
        location={location}
        routes={[
          {
            path: "/",
            element: <Login />,
          },
          {
            path: "/restrito",
            element: (
              <PrivateRoute>
                <PaginaRestrita />
              </PrivateRoute>
            ),
          },
        ]}
      >
        <Navbar />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
