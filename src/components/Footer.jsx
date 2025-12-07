export default function Footer() {
    return(
        <footer className={"mx-20 border-t border-white/10"}>
            <div className={"mx- auto max-w-5xl px-4 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between"}>
                <p>{new Date().getFullYear()} Andrew Atherton</p>
                <div className={"flex gap-4"}>
                    <a className={"hover:text-white"}href={"mailto:andrew.atherton@example.com"}>Email</a>
                    <a className={"hover:text-white"}href={"https://github.com/AndrewAtherton"}>GitHub</a>
                    <a className={"hover:text-white"}href={"https://www.linkedin.com/in/andrewatherton"}>LinkedIn</a>
                </div>
            </div>
        </footer>
    )
}