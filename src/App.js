import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup ,signInWithRedirect , getRedirectResult} from "firebase/auth"
import {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./navbar";
import Daugiai from "./Daugiai";
import Home from "./Home";
import Xuat_excel from "./Daugiai/Xuat_excel";
import {url_one} from "./server";

const firebaseConfig = {
    apiKey: "AIzaSyDI57KLB_tyeok0bdU_MJvkbfW3EfNiKgg",
    authDomain: "fir-match-making.firebaseapp.com",
    projectId: "fir-match-making",
    storageBucket: "fir-match-making.appspot.com",
    messagingSenderId: "11503407653",
    appId: "1:11503407653:web:b75f028d6db29d67ff65cc"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


function App() {

    const [user,setuser] = useState({
        uid:'',
        img:'',
        email:''
    })
    useEffect(()=>{
        console.log(url_one)

    },[])
    function sign_up_sign_in() {
        signInWithPopup(auth, provider)
            .then(result => {
                setuser({ email: result.user.email, photoURL: result.user.photoURL, uid: result.user.uid })

                // console.log(res)
                // localStorage.setItem('creden',res.user.uid)
                console.log(result)
                fetch(`${url_one}/user/login`, {
                    method: 'post', mode: 'cors', credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                    , body: JSON.stringify({uid: result.user.uid})
                }).then(res => res.json()).then(data=>{
                    alert(data.message)
                } )
            })
            .catch(error => alert(error))
    }
    async function signin_cre(){

        if(window.confirm('Lưu thông tin đăng nhập?')) localStorage.setItem('creden','1RsnJ7rYEuNjdi4NLQLVCbx7I8E3')
    }
    function signout(){
        if (window.confirm('Chắc là Sign Out không?')===true){
            fetch(`${url_one}/user/logout`, {
                method: 'get', mode: 'cors', credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
        }
    }


        return <>
            <BrowserRouter>
                <Navbar/>

                <Routes>
                    <Route path="/daugiai" element={<Daugiai/>}/>
                    <Route path="/xuatexcel" element={<Xuat_excel/>}/>
                    <Route path="/" element={<Home sign_up_sign_in={sign_up_sign_in}
                                        signout={signout}    signin_cre={signin_cre}  user={user}     />}/>
                </Routes>
            </BrowserRouter>

    </>


}


export default App;
