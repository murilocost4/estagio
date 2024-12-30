import { IoIosCheckmarkCircle, IoIosCloseCircle, IoIosArrowRoundBack } from "react-icons/io";
import { IoDiamond } from "react-icons/io5";
import { GiEmerald, GiTopaz } from "react-icons/gi";

export function PlanoDetails() {

    const topazioCheck = <IoIosCheckmarkCircle className="text-yellow-300"/>
    const topazioClose = <IoIosCloseCircle className="text-yellow-300"/>

    const emeraldCheck = <IoIosCheckmarkCircle className="text-emerald-400"/>
    const emeraldClose = <IoIosCloseCircle className="text-emerald-400"/>

    const diamondCheck = <IoIosCheckmarkCircle className="text-cyan-400"/>
    const diamondClose = <IoIosCloseCircle className="text-cyan-400"/>

    return (
        <>
            <header className="hidden md:flex justify-between px-16 py-4 items-center bg-white w-full border-b shadow-sm">
                <div>
                    
                </div>
                <nav className="flex gap-6 items-center text-slate-800 ">

                <div class="group relative cursor-pointer py-2">

                <div class="flex items-center">
                    <a class="menu-hover text-base font-normal lg:mx-3" onClick="">
                        Saúde
                    </a>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </div>

                    <div class="invisible absolute z-50 flex w-fit text-left flex-col bg-slate-50 py-1 pt-6 shadow-xl text-slate-700 group-hover:visible">

                        <a href="/saude/plano" class="my-2 block border-b border-gray-100 py-1 font-normal hover:text-slate-500 md:mx-2">
                            Plano Costa
                        </a>

                        <a href="/saude/centroclinico" class="my-2 block border-b border-gray-100 py-1 font-normal hover:text-slate-500 md:mx-2">
                            Centro Clínico
                        </a>

                        <a href="/saude/ambulancias" class="my-2 block border-b border-gray-100 py-1 font-normal hover:text-slate-500 md:mx-2">
                            Costa Ambulâncias
                        </a>

                    </div>
                </div>

                    <a href="#contact" className="hover:text-slate-500">Emergência</a>
                    <a href="#info" className="hover:text-slate-500">Saiba mais</a>
                    <a href="#contact" className="hover:text-slate-500">Contato</a>
                </nav>
            </header>
            <main className="w-screen px-8 md:px-16 flex flex-col gap-16 mt-20 m-auto">
                <a href="/saude/plano" className="flex w-fit items-center gap-2 ml-6 md:ml-12">
                    <IoIosArrowRoundBack />
                    <span>Voltar</span>
                </a>
                <div className="text-center w-full">
                    <h1 className="text-4xl font-semibold text-slate-800 mb-4">Conheça nossos benefícios</h1>
                    <p className="text-lg text-slate-600">Escolha o plano ideal para você e sua família</p>
                </div>
                <table className="text-center text-slate-700 w-full">
                    <thead>
                        <tr className="text-wrap text-center">
                            <th></th>
                            <th className="text-yellow-300 font-semibold"><GiTopaz className="mx-auto size-6"/>Topázio Economic</th>
                            <th className="text-emerald-400 font-semibold"><GiEmerald className="mx-auto size-6"/>Esmeralda Basic</th>
                            <th className="text-cyan-400 font-semibold"><IoDiamond className="mx-auto size-6"/>Diamante Plus</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ambulância Gratuita em caso de emergência</td>
                            <td>{topazioClose}</td>
                            <td>{emeraldCheck}</td>
                            <td>{diamondCheck}</td>
                        </tr>
                        <tr>
                            <td>Ambulância gratuita em caso de emergência</td>
                            <td>{topazioCheck}</td>
                            <td>{emeraldClose}</td>
                            <td>{diamondCheck}</td>
                        </tr>
                        <tr>
                            <td>Ambulância gratuita em caso de emergência</td>
                            <td>{topazioCheck}</td>
                            <td>{emeraldCheck}</td>
                            <td>{diamondClose}</td>
                        </tr>
                        <tr className="bg-white">
                            <td></td>
                            <td><button className="bg-white w-full border-slate-30 border p-2 rounded-lg hover:text-yellow-300 hover:border-slate-300 transition-all">Tenho Interesse</button></td>
                            <td><button className="bg-white w-full border-slate-30 border p-2 rounded-lg hover:text-emerald-400 hover:border-slate-300 transition-all">Tenho Interesse</button></td>
                            <td><button className="bg-white w-full border-slate-30 border p-2 rounded-lg hover:text-cyan-400 hover:border-slate-300 transition-all">Tenho Interesse</button></td>
                        </tr>
                    </tbody>
                </table>
                <div>

                </div>
            </main>
        </>
    )
}