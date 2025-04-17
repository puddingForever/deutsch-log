import { lazy, Suspense } from 'react';
import './App.css';
import Loading from './components/loading/loading';

const MainContent = lazy(() => import('./components/MainContent'));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <MainContent />
      </Suspense>
    </>
  );
}

export default App;
