import Aap from '../App' 
import { createBrowserRouter} from 'react-router-dom'
import Home from '../page/Home'
import Login from '../page/Login'
import ForgetPassword from '../page/ForgetPassword'
import SignIn from '../page/SignIn'

const router = createBrowserRouter([
    {
        path : '/',
        element : <Aap/>,
        children :[{
            path : '',
            element:<Home/> 
        },{
            path:'login',
            element : <Login/>
        },{
            path:'forgetPassword',
            element:<ForgetPassword/>
        },{
            path:'signin',
            element:<SignIn/>
        }
     ]
    }
])

export default router