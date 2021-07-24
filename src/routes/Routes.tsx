import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from '../views/login/Login'
import UserRegistration from '../views/userRegistration/UserRegistration'

function Routes(){
    return(
       <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro-usuario" component={UserRegistration}/>
            </Switch>
       </BrowserRouter>
    )

}
export default Routes