
export function Button({title, isBlack}) {
    if (isBlack) {
        return(
            <button className="border border-slate-800 rounded-md bg-slate-800 px-6 py-3 text-white transition-all shadow-2xl hover:bg-slate-700 hover:shadow-none">
                <span class="relative z-10 text-lg">{title}</span>
            </button>
        )
    } else {
        return(
            <button className="border border-slate-300 rounded-md bg-transparent px-6 py-3 text-slate-700 transition-all shadow-2xl hover:brightness-75 hover:shadow-none">
                <span class="relative z-10 text-lg">{title}</span>
            </button>
        ) 
    }
}