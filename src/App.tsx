import './App.css';
import { Footer } from './Footer';


const user = {
  userName: 'User1',
  FirstName: '',
  ShortBiography: '',
  PublicContacts: ''
}
const App = () => (
  <div className="App">
    <h1>Hello world - {user.userName}</h1>
    <h2>First Name: {user.FirstName}</h2>
    <h2>Short biography: {user.ShortBiography}</h2>
    <h2>Public contacts: {user.PublicContacts}</h2>
    <Footer copyright='C 57' />
  </div>
)

export default App;
