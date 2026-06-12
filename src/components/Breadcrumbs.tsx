import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: Array<{
    label: string;
    href?: string;
  }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span className="text-slate-300">/</span> : null}
            {item.href ? (
              <Link href={item.href} className="transition hover:text-blue-600">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-700">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
