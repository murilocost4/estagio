

export function Especialidade({title, children}) {
    return(
        <li className="flex items-center gap-2 border rounded-md border-slate-300 py-1 px-3 w-fit shadow-lg hover:scale-105 transition-all cursor-default">
            {children}
            <span>
                {title}
            </span>
        </li>
    )
}