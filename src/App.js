import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TableUsers from './components/TableUsers';
function App() {
  return (
    <div className='app-container'>
      <Header></Header>
      <TableUsers></TableUsers>
    </div>
  );
}

export default App;
