import Link from "next/link";
import {
  Aperture,
  Camera,
  Clock3,
  MapPin,
  Palette,
  WandSparkles,
} from "lucide-react";

const examples = [
  {
    icon: MapPin,
    title: "GPS location",
    text: "Some photos may include coordinates showing where the image was taken if location tagging was enabled.",
  },
  {
    icon: Camera,
    title: "Camera or phone model",
    text: "Image files can include the device or camera model used to capture the photo.",
  },
  {
    icon: Clock3,
    title: "Date and time",
    text: "Photos may store capture timestamps or editing timestamps inside the file.",
  },
  {
    icon: Aperture,
    title: "Lens and exposure settings",
    text: "JPG photos often include technical photography details such as lens, ISO, aperture and shutter speed.",
  },
  {
    icon: WandSparkles,
    title: "Editing software",
    text: "Some files include information about the app or software used to create or edit the image.",
  },
  {
    icon: Palette,
    title: "Color profiles and comments",
    text: "PNG, JPG and WEBP files may contain color profile data, comments or other embedded information.",
  },
];

export function CommonMetadataExamples() {
  return (
    <section className="bg-white px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-normal text-navy sm:text-4xl">
            Common photo metadata examples
          </h2>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            Photos can contain hidden information that is not visible when you simply look at the
            image.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600">
            Depending on the device, camera app, editor and file format, an image may include
            technical metadata such as capture time, camera model, GPS location, software
            information or color profiles. ExifSafe helps remove common metadata by creating a
            cleaned copy locally in your browser.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examples.map((example) => {
            const Icon = example.icon;

            return (
              <article
                key={example.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy">{example.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{example.text}</p>
              </article>
            );
          })}
        </div>

        <p className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-700">
          ExifSafe is a lightweight browser-based cleaner. It removes common metadata through
          browser re-export, but it is not a forensic metadata audit.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">
          <h3 className="text-2xl font-bold tracking-normal text-navy">
            Clean a photo before sharing it
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-700">
            Create a cleaned copy locally in your browser. Your photo stays on your device.
          </p>
          <Link
            href="/#upload"
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Clean a photo
          </Link>
        </div>
      </div>
    </section>
  );
}
