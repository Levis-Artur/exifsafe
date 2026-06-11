import { Camera, Globe2, Newspaper, Store, Users, UserRound } from "lucide-react";

const useCases = [
  {
    icon: Globe2,
    title: "Social media users",
    text: "Remove hidden location and camera data before posting photos online.",
  },
  {
    icon: Newspaper,
    title: "Journalists",
    text: "Share images while reducing the risk of exposing device or location details.",
  },
  {
    icon: Camera,
    title: "Photographers",
    text: "Export clean versions of images before sending previews to clients.",
  },
  {
    icon: Store,
    title: "Online sellers",
    text: "Clean product photos before uploading them to marketplaces.",
  },
  {
    icon: Users,
    title: "Parents",
    text: "Remove hidden location details before sharing family photos.",
  },
  {
    icon: UserRound,
    title: "Travelers",
    text: "Share travel photos without exposing exact location metadata.",
  },
];

export function UseCases() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-normal text-navy sm:text-4xl">
            Who uses ExifSafe?
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            Free, browser-based photo cleaning for everyday privacy before sharing images.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;

            return (
              <article key={useCase.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{useCase.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
