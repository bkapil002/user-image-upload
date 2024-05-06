import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import summaryApi from './common/index'
import context from './context';
import { useDispatch } from 'react-redux';
import { setUserData } from './store/userSlice';

function App() {
  const dispatch = useDispatch()
  const fetchUserData = async() =>{
            const dataReponse = await fetch(summaryApi.userData.url , {
              method : summaryApi.userData.methods,
              credentials:'include'
            }) 
            const dataApi = await dataReponse.json()
            console.log(dataApi)

            if(dataApi.success){
              dispatch(setUserData(dataApi.data))
            }
  }
  useEffect(()=>{
    fetchUserData()
  },[])
  return (
    < >
    <context.Provider value={{fetchUserData}}>
      <ToastContainer />
      <Header/>
          <main className='min-h-[calc(100vh-120px)]'>
         <Outlet/>
         </main>
      <Footer/>   
      </context.Provider>
    </>
  );
}

export default App;
