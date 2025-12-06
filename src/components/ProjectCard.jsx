export default function ProjectCard({project})
{
    return (
        <article className={"h-full rounded-2xl border border-white/10 bg-white/5 p-5 flex flex-col"}>
            <img src={project.image} alt={project.title} className={"rounded-md mb-4 object-cover h-40 w-full"}/>
            <h3 className={"text-xl font-bold mb-2 text-white"}>{project.title}</h3>
            <p className={"text-gray-300 flex-1"}>{project.description}</p>
            <div className={"mt-4 flex flex-wrap gap-2"}>
                {project.tags.map((t)=>(
                    <span key={t} className={"rounded-md bg-white/10 px-2 py-1 text-xs"}>
                        {t}
                    </span>
                ))}
            </div>
            <div className={"mt-4"}>
                {project.demo && (
                    <a className={"mr-4 text-sm text-blue-400 hover:underline"} href={project.demo} target={"_blank"} rel={"noreferrer"}>
                    </a>
                )}
                {project.repo && (
                    <a className={"mr-4 text-sm text-blue-400 hover:underline"} href={project.repo} target={"_blank"} rel={"noreferrer"}>
                    </a>
                )}
            </div>
        </article>
    )
}