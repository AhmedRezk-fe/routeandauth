import "./App.css";
import Register from "./containtrs/auth/register/loadable";
import getFirebaseToken from "../src/firebase/action"


function App() {
  // console.log(getFirebaseToken())
  return (
    <>
    <Register token2={getFirebaseToken()} />
    </>
  )

  
}

export default App;
