import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../pages/Main'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Navbar from '../components/Navbar'
import New from '../pages/New'

const AppRouter = () => {
    return(
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/new" component={New} />
                <Route exact path="/" component={Main} />
            </Switch>
        </Router>
    )
}

export default AppRouter
