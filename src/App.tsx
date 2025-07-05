import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  RecoilRoot,
} from 'recoil';
import Start from './components/Start';
import MBGTI from './components/Test';
import Result from './components/Result';


export default function App() : JSX.Element {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/test" element={<MBGTI />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
