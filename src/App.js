
import './App.css';
import Profile from './Profile/Profile';

function App() {

  const name="Awatef Kadri";
  const bio ="Licence E-Commerce"
  const profession =" Assistante Comptable"
  return (
    <div className="App">

     <Profile fullName={name} bio={bio} profession={profession} >
     
     
       </Profile>
    </div>
  );
}

export default App;
