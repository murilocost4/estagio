
export function FooterDiv({title, children}) {
    return(
        <div className="w-full">
            <span className="text-2xl font-semibold text-slate-50">{title}</span>
            <div className="flex flex-col mt-8 gap-4">
                {children}
           </div>
        </div>
    )
}