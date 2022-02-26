import './App.css';
import { FiSearch } from 'react-icons/fi';
import Home from './components/Home';

function App() {
  return (
    <main>
      <header>
      <nav>
        <div className="logo">
          <div className="main_logo">DEV</div>
          <div className="search_bar">
            <input type="search" placeholder='Search...' name="" id="" />
            
          </div>
        </div>
        <div className="nav_auth">
        <span className='mob_search'><FiSearch/></span>
          <p className="login">Log in</p>
          <p className="create_account">Create account</p>
        </div>
      </nav>
      </header>
      <section className="devto_body">
        <Home/>
      </section>
    </main>
  );
}

export default App;
