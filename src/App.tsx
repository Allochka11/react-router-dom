import React, {useEffect} from 'react';
import {Navigate, NavLink, Outlet, Route, Routes, useNavigate, useParams, useSearchParams} from 'react-router-dom';
import './App.css';



export const  Profile= () => {
    const[searchParams, setsearchParams] = useSearchParams()

    console.log(searchParams.get('name'));
    console.log(Object.fromEntries(searchParams))

    // const params = useParams();
    //
    // const someParams = params ;
    //
    // console.log(someParams)
    const navigate = useNavigate();
    // useEffect(()=>{
    //     if(true) navigate('/login')
    //
    // },[])

    return(
        <div>
            Profile
            <button onClick={()=>setsearchParams({...Object.fromEntries(searchParams),age:'30'})}>Logout</button>
        </div>
    );
};


function App() {



  return (
    <div className="App">
      <NavLink to={'/'}>Main</NavLink>
      <NavLink to={'/profile'}>Profile</NavLink>
        <NavLink to={'/login'} style={(params)=> {return {color: params.isActive ? 'red' : 'blue'}}}>Login</NavLink>
        {/*<NavLink to={'/profile/1'}>Profile/1</NavLink>*/}

        <Routes>
            <Route path={'/'} element={<div>Main</div>}/>
            <Route path={'/*'} element={<div>404</div>}/>
            <Route path={'/login/*'} element={(<div>Login</div>)}/>
            <Route path={'/profile/'} element={<Profile/>}/>
            {/*<Route path={'/profile'} element={(*/}
            {/*    <div>*/}
            {/*        Profile*/}
            {/*        <Outlet/>*/}
            {/*    </div>)}>*/}
            {/*    <Route path={'*'} element={<div>page not found</div>}/>*/}
            {/*    <Route path={':id'} element={<div>id</div>}/>*/}
            {/*    <Route index element={<div>Hello</div>}/>*/}
            {/*    <Route path={'settings'} element={<div>Settings</div>}/>*/}
            {/*</Route>*/}
        </Routes>
    </div>
  );
}

export default App;
