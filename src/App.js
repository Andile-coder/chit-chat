import UserReg from "./components/UserReg";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import ProfileReg from "./components/ProfileReg";
import CreatePost from "./components/CreatePost";
import Post from "./components/Post";
import PostBlock from "./components/PostBlock";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Facebook from "./components/Facebook";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Sidebar />
          </Route>
          <Route exact path="/signup">
            {/* <UserReg /> */}
            <Login />
          </Route>

          <Route path="/block">
            <PostBlock />
          </Route>
          <PrivateRoute path="/userprofile" component={UserProfile} />
          <PrivateRoute path="/profilereg" component={ProfileReg} />
          <PrivateRoute path="/createpost" component={CreatePost} />
          <PrivateRoute path="/posts" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
