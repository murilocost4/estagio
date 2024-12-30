
export function FooterLink({link, title, children}) {
    return(
        <a href={link} className="flex items-center gap-2 text-lg text-slate-100 transition-all w-fit">
            {children}
            {title}
        </a>
    )
}