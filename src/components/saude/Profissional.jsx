

export function Profisisonal({ name, desc, children }) {

    return(
        <div className="flex flex-col justify-center items-center text-center">
            {children}
            <span className="text-2xl text-slate-800 font-normal mt-4">{name}</span>
            <span className="text-lg text-slate-600 font-light">{desc}</span>
        </div>
    )
}