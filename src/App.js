import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddPost from './Components/AddPost';
import EditPost from './Components/EditPost';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from './Components/BlogDetail';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/create" component={AddPost} exact />
        <Route path="/blogs/:id" component={BlogDetails} exact />
        <Route path="/edit/:id" component={EditPost} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
