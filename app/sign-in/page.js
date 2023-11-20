import Footer from '../components/Footer'
import SigninForm from '../components/SigninForm'

const SignIn = () => {
  return (
    <>
      <main className="flex h-screen min-h-screen flex-col items-center justify-between bg-amber-100">
        <div className="flex w-full h-1/4 items-center justify-center font-bold">
          <div className='title uppercase'>
            <div className="text-lg  text-purple-800">Nothing</div>
            <div className="text-5xl text-zinc-950">To Do <span className="text-[#123456]">App</span></div>
          </div>
        </div> 
        <div className="relative h-1/2 flex flex-col w-full items-center justify-between p-4">    
          <SigninForm/>
        </div>
        <div className="flex h-1/4 w-full justify-center">
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default SignIn