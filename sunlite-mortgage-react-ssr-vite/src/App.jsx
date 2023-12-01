import Router from './Router/Router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { StaticRouter } from "react-router-dom/server";

function App() {
  return (
    <div>
       <StaticRouter>
         <Router />
       </StaticRouter>
      
    </div>
  );
}

export default App;
