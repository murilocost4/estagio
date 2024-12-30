
export function Footer({children}) {
    
        return(
            <footer id="contact" className="bg-gray-950 flex flex-col md:flex-row justify-center items-start px-10 md:px-40 gap-20 md:justify-between py-32">
                {children}
            </footer>
        )
    
    
}