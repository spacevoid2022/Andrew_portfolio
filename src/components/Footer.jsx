export default function Footer() {
    return (
        <footer className="text-white py-6 mt-12">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-sm">{new Date().getFullYear()} Andrew Atherton</p>
                <div className={"flex gap-4"}>
                    <a className={"hover:text-white"} href={"mailto:andrew.atherton022@gmail.com"}>
                        Email</a>
                    <a className={"hover:text-white"} href={"https://www.linkedin.com/in/andrew-atherton-b81683214/"}>LinkedIn</a>
                    <a className={"hover:text-white"} href={"https://github.com/spacevoid2022"}>GitHub</a>
                </div>

            </div>
        </footer>
    )
}