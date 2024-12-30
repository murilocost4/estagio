
export function Duvida({title, text}) {
    return(
        <div className="flex flex-col md:w-1/2">
            <span className="text-lg italic text-slate-600 font-light">{title}</span>
            <span className="text-slate-800">{text}</span>
        </div>
    )
}