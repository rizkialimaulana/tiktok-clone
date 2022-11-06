import React, {useRef} from 'react'
import { HiKey, HiUser, HiXCircle } from 'react-icons/hi'
import { FaGoogle } from 'react-icons/fa'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'

type Props = {}

const Login = ({close} : any) => {
    const emailRef = useRef(null)
    const passRef = useRef(null)

    const register = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(
          auth,
          emailRef.current.value,
          passRef.current.value
        )
          .then((authUser) => {
            console.log(authUser);
          })
          .catch((error) => {
            alert(error.message);
          });
    }
    const login = (e) => {
      e.preventDefault()
      signInWithEmailAndPassword( auth, emailRef.current.value, passRef.current.value)
      .then((userAuth) => {
        console.log(userAuth)
      }).catch((error) => {
        alert(error.message)
      })
    }
    const loginGoogle = (e) => {
      signInWithPopup(auth, provider)
      .then((userAuth) => {
        console.log(userAuth)
      })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
      <div className="bg-white w-[30rem] h-[30rem] flex flex-col justfiy-center p-5 shadow-xl">
        <button onClick={close}>
          <HiXCircle className="w-8 h-8" />
        </button>
        <div className="flex flex-col items-center space-y-4">
          <h1>Sign In</h1>
          <form className="flex flex-col items-center space-y-3">
            <div className="flex items-center space-x-4">
              <HiUser className="w-8 h-8" />
              <input
                ref={emailRef}
                type="email"
                placeholder="Email"
                className="pl-2 py-1 outline-none flex-grow border border-[#ff004c]"
              />
            </div>
            <div className="flex items-center space-x-4">
              <HiKey className="w-8 h-8" />
              <input
                ref={passRef}
                type="email"
                placeholder="Email"
                className="pl-2 py-1 outline-none flex-grow border border-[#ff004c]"
              />
            </div>
            <button onClick={login} className='py-1 text-white bg-[#ff004c] w-full'>Sign In</button>
          </form>
          <div className='flex flex-col space-y-3'>
            <span className='pb-2 border-b border-black w-full text-center'>Sign in with</span>
            <button onClick={loginGoogle}className='flex items-center space-x-4 py-1 px-5 border border-gray-500'>
                <FaGoogle />
                <span>Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login