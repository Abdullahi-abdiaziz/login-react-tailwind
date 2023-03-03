import Signin from "./components/Signin";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen py-2 bg-gray-100">

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-11/12 max-w-3xl">
          <Signin />
          <Signup />
        </div>
      </main>
    </div>
  )
}
export default App;