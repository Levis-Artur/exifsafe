export type GuideArticle = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: Array<{
    title: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
  cta: {
    text: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  };
};

export const guideCards = [
  {
    title: "Is it safe to upload photos to online tools?",
    description:
      "Understand the privacy trade-offs of online image tools and why local browser processing can be safer for private photos.",
    href: "/guides/is-it-safe-to-upload-photos-to-online-tools",
  },
  {
    title: "What metadata can reveal about you",
    description:
      "Learn how EXIF, GPS, camera and software metadata can reveal more information than expected.",
    href: "/guides/what-metadata-can-reveal-about-you",
  },
  {
    title: "How to share photos safely online",
    description: "Simple steps to reduce privacy risks before posting or sending photos.",
    href: "/guides/how-to-share-photos-safely-online",
  },
  {
    title: "How to compress images without uploading them",
    description:
      "Learn how local image compression works and how to reduce image size while keeping your files private.",
    href: "/guides/how-to-compress-images-without-uploading",
  },
  {
    title: "Remove GPS before selling online",
    description:
      "Why removing location metadata matters before posting photos on marketplaces, classifieds or social media.",
    href: "/guides/remove-gps-before-selling-online",
  },
];

export const guideArticles: Record<string, GuideArticle> = {
  "is-it-safe-to-upload-photos-to-online-tools": {
    slug: "is-it-safe-to-upload-photos-to-online-tools",
    title: "Is It Safe to Upload Photos to Online Tools? | ExifSafe",
    description:
      "Learn the privacy risks of uploading photos to online tools and when local browser-based processing is a better choice.",
    h1: "Is it safe to upload photos to online tools?",
    intro:
      "Online image tools can be useful, but uploading private photos means trusting a service with the file. For sensitive images, it is worth understanding what happens before you upload.",
    sections: [
      {
        title: "What happens when you upload a photo?",
        paragraphs: [
          "Many online tools send your image to a server for processing, temporary storage, conversion or optimization. That can be normal for some workflows, but it means the file leaves your device.",
          "The exact handling depends on the service, its infrastructure and its privacy policy. Some tools delete files quickly, while others may store them temporarily for processing or debugging.",
        ],
      },
      {
        title: "Why photo uploads can be sensitive",
        paragraphs: [
          "A photo can contain visible details and hidden metadata. Even ordinary images may include information you did not intend to share.",
        ],
        bullets: [
          "Faces and family photos",
          "Home, work or school locations",
          "Documents, receipts or screenshots with personal details",
          "Photos of children or private spaces",
          "Embedded EXIF, GPS, camera or software metadata",
        ],
      },
      {
        title: "Why local browser processing is different",
        paragraphs: [
          "With local browser processing, the file is handled in your browser and does not need to be uploaded for supported operations. The browser creates a new processed copy that you can download.",
          "This can help reduce privacy risk for common metadata removal and compression tasks, but it is not a forensic guarantee. Visible content can still reveal personal information.",
        ],
      },
      {
        title: "When upload-based tools may be okay",
        paragraphs: [
          "Upload-based tools can be reasonable for non-sensitive images, public images, trusted services or professional workflows where server processing is expected.",
          "The key is matching the tool to the sensitivity of the image and understanding what the service does with uploaded files.",
        ],
      },
      {
        title: "Safer checklist before using an online image tool",
        bullets: [
          "Does the tool require upload?",
          "Does it have a clear privacy policy?",
          "Does it use analytics or third-party scripts?",
          "Can the task be done locally in your browser?",
          "Is the image sensitive or private?",
        ],
      },
    ],
    cta: {
      text: "For photo metadata removal, ExifSafe processes images locally in your browser.",
      links: [
        { label: "Remove metadata locally", href: "/" },
        { label: "Compress image locally", href: "/compress-image" },
      ],
    },
  },
  "what-metadata-can-reveal-about-you": {
    slug: "what-metadata-can-reveal-about-you",
    title: "What Photo Metadata Can Reveal About You | ExifSafe",
    description:
      "Photo metadata can include GPS location, camera details, timestamps and software information. Learn what to check before sharing images.",
    h1: "What photo metadata can reveal about you",
    intro:
      "A photo contains visible pixels, but it may also contain hidden metadata. That metadata can be useful for organizing images, yet unnecessary when sharing publicly.",
    sections: [
      {
        title: "Common metadata inside photos",
        paragraphs: [
          "Metadata varies by device, app and format. JPG files often include EXIF data, while PNG and WEBP can include other embedded information.",
        ],
        bullets: [
          "EXIF metadata",
          "GPS coordinates",
          "Camera make and model",
          "Date and time",
          "Editing software",
          "Orientation information",
          "Thumbnails or previews in some workflows",
        ],
      },
      {
        title: "Why GPS metadata matters",
        paragraphs: [
          "GPS metadata can point to where a photo was taken. For personal photos, that may expose a home, workplace, school, travel route or another sensitive location.",
          "Not every photo contains GPS metadata, but it is worth checking before public sharing.",
        ],
      },
      {
        title: "Camera and software details",
        paragraphs: [
          "Camera model or software information is usually not dangerous by itself, but it can add context when combined with other details.",
          "For public posts, marketplace listings or documents, removing unnecessary technical metadata can help reduce accidental information sharing.",
        ],
      },
      {
        title: "Screenshots and exported images",
        paragraphs: [
          "Screenshots may contain limited metadata, but the visible content can still include personal details. Names, addresses, browser tabs, messages and documents can reveal more than metadata.",
        ],
      },
      {
        title: "Metadata removal is not the same as full anonymity",
        paragraphs: [
          "Removing common metadata does not make a photo anonymous. Backgrounds, signs, reflections, faces, documents and clothing can still reveal identity or location.",
          "ExifSafe removes common metadata by browser re-export. It is a lightweight browser-based cleaner, not a forensic metadata audit.",
        ],
      },
    ],
    cta: {
      text: "Remove common EXIF, GPS and camera metadata locally with ExifSafe.",
      links: [{ label: "Remove metadata locally", href: "/" }],
    },
  },
  "how-to-share-photos-safely-online": {
    slug: "how-to-share-photos-safely-online",
    title: "How to Share Photos Safely Online | ExifSafe",
    description:
      "Practical steps to reduce privacy risks before sharing photos online, including metadata removal, cropping and checking visible details.",
    h1: "How to share photos safely online",
    intro:
      "Sharing photos is normal, but a quick check can help prevent accidental privacy leaks before posting or sending an image.",
    sections: [
      {
        title: "Step 1: Check what is visible",
        paragraphs: [
          "Start with the visible photo. Metadata matters, but visible details are often the easiest way to reveal private information.",
        ],
        bullets: [
          "Faces",
          "Addresses and house numbers",
          "License plates",
          "School or work badges",
          "Screens and documents",
          "Reflections in glass or mirrors",
        ],
      },
      {
        title: "Step 2: Remove location metadata",
        paragraphs: [
          "Some photos contain GPS coordinates. Removing common GPS metadata can help reduce location exposure before sharing.",
        ],
        bullets: ["Use the Remove GPS from photo guide when location privacy matters."],
      },
      {
        title: "Step 3: Remove common camera metadata",
        paragraphs: [
          "EXIF and camera metadata can include device details, timestamps and capture settings. For public sharing, a cleaned copy is often better than sending the original file.",
        ],
      },
      {
        title: "Step 4: Crop or blur sensitive areas",
        paragraphs: [
          "If the visible image includes addresses, labels, documents or faces, crop them out or blur them before sharing. Metadata removal does not hide visible content.",
        ],
      },
      {
        title: "Step 5: Compress a copy for sharing",
        paragraphs: [
          "Compressing a separate copy can make photos easier to send by email, upload to websites or share in messages without changing the original file.",
        ],
      },
      {
        title: "Simple photo sharing checklist",
        bullets: [
          "Check visible details first",
          "Remove common GPS metadata",
          "Remove common camera metadata",
          "Crop or blur sensitive areas",
          "Compress a copy for sharing",
          "Keep the original private when possible",
        ],
      },
    ],
    cta: {
      text: "Use ExifSafe tools to create private sharing copies locally in your browser.",
      links: [
        { label: "Remove metadata locally", href: "/" },
        { label: "Remove GPS metadata", href: "/remove-gps-from-photo" },
        { label: "Compress image locally", href: "/compress-image" },
      ],
    },
  },
  "how-to-compress-images-without-uploading": {
    slug: "how-to-compress-images-without-uploading",
    title: "How to Compress Images Without Uploading Them | ExifSafe",
    description:
      "Learn how to reduce JPG, PNG and WEBP file size locally in your browser without uploading images to a server.",
    h1: "How to compress images without uploading them",
    intro:
      "Many image compressors upload files to a server, but browser-based tools can reduce image size locally for supported formats.",
    sections: [
      {
        title: "What local image compression means",
        paragraphs: [
          "Local compression means the browser loads the image, draws it to a canvas and exports a new compressed copy using standard Web APIs.",
          "For supported operations, the image does not need to leave your device.",
        ],
      },
      {
        title: "How to get a smaller file",
        bullets: [
          "Convert JPG or PNG to WEBP for web sharing",
          "Lower quality for JPG or WEBP",
          "Resize large images before sharing",
          "Use 1600px or 1920px width for many web workflows",
        ],
      },
      {
        title: "Why PNG can be difficult",
        paragraphs: [
          "PNG is lossless, so exporting as PNG may not reduce file size much. For photos, converting to WEBP may create a smaller file.",
          "For graphics or screenshots, results depend on the image content and browser encoding.",
        ],
      },
      {
        title: "When not to compress too much",
        paragraphs: [
          "Avoid heavy compression for printing, professional photography, archival copies or important documents where detail matters.",
          "A compressed sharing copy is useful, but the original file should be kept separately when quality matters.",
        ],
      },
    ],
    cta: {
      text: "Compress JPG, PNG and WEBP locally with ExifSafe.",
      links: [{ label: "Compress image locally", href: "/compress-image" }],
    },
  },
  "remove-gps-before-selling-online": {
    slug: "remove-gps-before-selling-online",
    title: "Remove GPS Before Selling Online | ExifSafe",
    description:
      "Before posting photos on marketplaces or classifieds, removing GPS metadata can help protect your home or item location.",
    h1: "Remove GPS before selling online",
    intro:
      "People often take marketplace photos at home, in a garage, at work or in storage. A quick privacy check can help reduce location exposure.",
    sections: [
      {
        title: "Why marketplace photos can reveal location",
        paragraphs: [
          "Location can appear in hidden metadata or visible details. Both matter when posting item photos publicly.",
        ],
        bullets: [
          "GPS metadata",
          "Visible background details",
          "Street signs or house numbers",
          "Reflections",
          "Delivery labels or documents",
        ],
      },
      {
        title: "What GPS metadata is",
        paragraphs: [
          "GPS metadata is location information that some phones and cameras save inside photo files when location tagging is enabled.",
          "It is not always visible when viewing the image, so it can be easy to overlook.",
        ],
      },
      {
        title: "Before posting an item photo",
        bullets: [
          "Remove GPS and location metadata",
          "Crop distracting or identifying background details",
          "Hide serial numbers when appropriate",
          "Remove labels, receipts and documents",
          "Use a clean copy of the image",
        ],
      },
      {
        title: "Metadata removal has limits",
        paragraphs: [
          "Removing common metadata can help, but visible clues still matter. Backgrounds, reflections and labels can reveal information even after metadata is cleaned.",
        ],
      },
    ],
    cta: {
      text: "Remove common GPS and camera metadata locally before sharing item photos.",
      links: [
        { label: "Remove metadata locally", href: "/" },
        { label: "Remove GPS metadata", href: "/remove-gps-from-photo" },
      ],
    },
  },
};
