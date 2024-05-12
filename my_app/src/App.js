
import './App.css';
import Navbar from './component/Navbar';
import TextEditor from './component/TextEditor';
import ImageEditor from './component/ImageEditor';
import About from './component/About';
import ContactUs from './component/ContactUs';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ConditionRendering from './ConditionRendering';
import ConRendering from './ConRendering';
import Usinglists from './Usinglists';
import UsingList1 from './UsingList1';
import Usli from './Usli';
function App() {
  return (
    <>
   
   
   <Router>
   <Navbar title="tedit" contact="Contact us"/>
   <ConditionRendering></ConditionRendering>
   <ConRendering></ConRendering>
   <Usinglists></Usinglists>
   <UsingList1></UsingList1>
   <Usli></Usli>
   <Routes>
    <Route path="/about" element={ < About />}>
    </Route>
    <Route path="/contactus" element={ < ContactUs />}>
    </Route>
    <Route path="/" element={ <TextEditor value="play Ground for your text :" />}>
</Route>
   </Routes>
   </Router>
   <ImageEditor></ImageEditor>
   </>
  );
}



export default App;
