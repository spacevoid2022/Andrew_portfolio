export default function Section({id, title, subtitle, children}) {
    return (
        <section id={id} className={"max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20"}>
            <h2 className={"text-3xl font-bold mb-8 text-white"}>{title}</h2>
            {subtitle && <h3 className={"mt-1 text-sm text-neutral-400"}>{subtitle}</h3>}
            <div className="mt-6">
                {children}
            </div>
        </section>
    )
}