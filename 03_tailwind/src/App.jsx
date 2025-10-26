import './App.css'
import Card1 from './Components/Card1'
function App() {
 let myObj={
    name:'rajan',
    age:29
  }
  let myArr=[1,2,3]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
    <Card1 userName='Rajan' btnText='visit Me' />     {/* someObj={myObj} someArr={myArr} */}
    <Card1 userName='Monika'/>      
    </>
  )
} 

export default App
