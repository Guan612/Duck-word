import PWABadge from './PWABadge.jsx'
import { BrowserRouter } from "react-router-dom";
import Router from './router/index.jsx';
function App() {

  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <PWABadge />
    </>
  )
}

export default App
