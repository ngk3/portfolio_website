
export function Header() {
   return (
    <header>
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white p-4 shadow-md">
            <div className="text-xl font-bold">Kevin Ng</div>
            <nav>
            <ul className="flex space-x-4">
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </nav>
        </div>
    </header>
   ) 
}