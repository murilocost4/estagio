

export function App() {
  return (
    <main className="w-vw h-dvh max-h-screen md:flex text-slate-700 font-light">
      <a href="/saude" className="bg-slate-100 w-screen h-1/2 flex items-center justify-center md:w-1/2 hover:brightness-125 md:h-screen hover:md:w-3/4 hover:md:h-full hover:font-normal transition-all">
        <span className="text-3xl">Saúde</span>
      </a>
      <a href="/luto" className="bg-slate-50 w-screen h-1/2 flex items-center justify-center md:w-1/2 hover:brightness-125 md:h-screen hover:md:w-3/4 hover:md:h-full hover:font-normal transition-all">
        <span className="text-3xl">Luto</span>
      </a>
    </main>
  )
}