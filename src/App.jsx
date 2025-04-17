import { lazy, Suspense } from 'react';
import './App.css';
import Loading from './components/loading/loading';

// show main content after loading
const MainContent = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./components/MainContent'));
      }, 1500);
    })
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <MainContent />
    </Suspense>
  );
}

export default App;
