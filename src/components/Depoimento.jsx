

export function Depoimento({name, text}) {
    return(
        <div className="p-6 md:p-10 bg-white w-4/5 md:w-1/5 rounded-xl flex flex-col gap-3 text-center md:text-left shadow-md">
            <span className="text-slate-800 text-xl font-semibold">{name}</span>
            <p className="text-slate-600">{text}</p>
        </div>
    )
}