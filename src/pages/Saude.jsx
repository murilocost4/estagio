export function Saude() {
    return (
        <main className="w-vw h-dvh max-h-screen md:flex text-center font-light text-slate-700">
            <a href="/saude/plano" className="bg-slate-50 w-screen h-1/3 flex items-center justify-center md:w-1/3 hover:brightness-125 md:h-screen hover:md:w-3/4 hover:md:h-full hover:font-normal transition-all">
                <span className="text-3xl">Plano Costa</span>
            </a>
            <a href="/saude/centroclinico" className="bg-slate-100 w-screen h-1/3 flex items-center justify-center md:w-1/3 hover:brightness-125 md:h-screen hover:md:w-3/4 hover:md:h-full hover:font-normal transition-all">
                <span className="text-3xl">Centro Clínico Costa</span>
            </a>
            <a href="#" className="bg-slate-50 w-screen h-1/3 flex items-center justify-center md:w-1/3 hover:brightness-125 md:h-screen hover:md:w-3/4 hover:md:h-full hover:font-normal transition-all">
                <span className="text-3xl">Costa Ambulâncias</span>
            </a>
        </main>
    )
}