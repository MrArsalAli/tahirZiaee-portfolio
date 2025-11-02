import { Switch, Route } from "wouter";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/not-found";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
        <Router />
  );
}

export default App;
