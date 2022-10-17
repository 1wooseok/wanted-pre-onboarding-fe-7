import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="wrap">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
