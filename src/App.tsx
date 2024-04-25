import PagesRouter from "./routes";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function App() {
  return (
    <div>
      <PagesRouter/>
    </div>
  )
}