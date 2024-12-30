
export function Input(props) {

    return(
        <input className="bg-transparent p-2 border shadow-sm focus:outline-none focus:border-slate-400"
        type={props.type} 
        name={props.name} 
        placeholder={props.placeholder} 
        onChange={props.onChange} />
    )
}