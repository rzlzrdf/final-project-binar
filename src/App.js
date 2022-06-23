import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { Theme } from "./Theme";


import DetailProduk from "./Pages/DetailProduk";
import AddProduk from "./Pages/AddProduk";
import DaftarJual from "./Pages/DaftarJual";


function App() {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Router>
          <Routes>

            <Route path="/daftar-jual">
              <Route index element={<DaftarJual />} />
              <Route path=":id" element={<DetailProduk />} />
              <Route path="add" element={<AddProduk />} />
            </Route>

          
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
