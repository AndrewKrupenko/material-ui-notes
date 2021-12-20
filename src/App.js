import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { purple } from "@mui/material/colors"
import { StyledEngineProvider } from '@mui/material/styles'
import Notes from './pages/Notes'
import Create from './pages/Create'

const theme = createTheme({
  palette: {
    primary: {
      main: '#d500f9'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <Router>
          <Routes>
            <Route exact path="/" element={<Notes />}/>
            <Route path="/create" element={<Create />}/>
          </Routes>
        </Router>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default App;