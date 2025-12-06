export default function Navbar() {
    return (
        <header className={"sticky top-0 z-40 backdrop-blur-md border-b border-gray-200"}>
            <nav className={"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4"}>
                <a href={"#"} className={"font-semibold tracking-tight text-white"}>
                    Andrew Atherton
                </a>
                <ul className={"flex space-x-6"}>
                    <li><a className={"text-gray-300 hover:text-white transition-colors"} href={"#about"}>About Me</a></li>
                    <li><a className={"text-gray-300 hover:text-white transition-colors"} href={"#projects"}>Projects</a></li>
                    <li><a className={"text-gray-300 hover:text-white transition-colors"} href={"#experience"}>Experience</a></li>
                </ul>
            </nav>
        </header>
    )
}