import { ToastContainer } from "react-toastify"
import "./App.css"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  return (
    <>
      <ToastContainer
        toastClassName="custom-toast"
        // position="top-right"
        autoClose={4000}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable
        pauseOnHover
        theme="colored"
        // transition= Bounce
      />
      <Header />

      <Main />
    </>
  )
}

export default App
