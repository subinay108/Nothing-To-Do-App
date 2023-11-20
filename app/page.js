import LetsToDoButton from "./components/LetsToDoButton"
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      {/* MAIN */}
      <main className="flex h-screen min-h-screen flex-col items-center justify-between bg-amber-100">
        <div className="flex w-full items-center justify-center h-1/4 font-bold">
          <div className='title uppercase'>
            <div className="text-lg  text-purple-800">Nothing</div>
            <div className="text-5xl text-zinc-950">To Do <span className="text-[#123456]">App</span></div>
          </div>
        </div> 
        <div className="flex flex-col w-full items-center justify-between h-1/4 p-4 text-zinc-950 text-lg font-medium">    
          <p className="text-center">This is a simple To Do App built using <span className="font-bold">NextJs</span> and <span className="font-bold">REST</span>ful API using <span className="font-bold">Django</span>.<br/>
          If you have nothing to do. Let&apos;s To Do.
          </p>
          <LetsToDoButton/>
        </div>
        <div className="flex w-full h-1/4 justify-center">
        </div>
      </main>

      {/* FOOTER */}
      <Footer/>
    </>
    
  )
}
