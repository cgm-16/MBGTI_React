import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  RecoilRoot,
} from 'recoil';
import StartPg from './Components/Start';
import MBGTI from './Components/Test';
import ResultPg from './Components/Result';


export default function App() : JSX.Element {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<StartPg />} />
          <Route path="/test" element={<MBGTI />} />
          <Route path="/result" element={<ResultPg />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}