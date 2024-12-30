

export function Servico({title, children}) {
    return(
        <div>
            {children}
            <span>{title}</span>
        </div>
    )
}