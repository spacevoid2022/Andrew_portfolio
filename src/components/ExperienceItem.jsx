export default function ExperienceItem({ item }) {
    if (!item) return null;

    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                <div className="flex-shrink-0">
                    <h3 className="text-sm text-neutral-400">{item.role}</h3>
                    <p className="text-xs text-gray-400">{item.start} — {item.end ?? 'Present'}</p>
                </div>

                <div className="flex-1 mt-4 sm:mt-0">
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        {(item.bullets || []).map((b, i) => (
                            <li key={i}>{b}</li>
                        ))}
                    </ul>

                    {Array.isArray(item.tools) && item.tools.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.tools.map((t) => (
                                <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs">
                                    {t}
                                </span>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}