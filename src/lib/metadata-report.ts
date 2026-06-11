export type MetadataReport = {
  fileType: string;
  fileName: string;
  fileSize: number;
  likelyExif: boolean;
  likelyGps: boolean;
  likelyXmp: boolean;
  likelyIccProfile: boolean;
  likelyPhotoshopData: boolean;
  notes: string[];
};

const maxLeadingBytes = 4 * 1024 * 1024;
const maxTrailingBytes = 1024 * 1024;

function includesAny(source: string, markers: string[]) {
  return markers.some((marker) => source.includes(marker));
}

async function readSearchableBinaryText(file: File) {
  const shouldReadWholeFile = file.size <= maxLeadingBytes + maxTrailingBytes;
  const leadingBuffer = await file.slice(0, shouldReadWholeFile ? file.size : maxLeadingBytes).arrayBuffer();

  if (shouldReadWholeFile) {
    return new TextDecoder("utf-8", { fatal: false }).decode(leadingBuffer);
  }

  const trailingBuffer = await file.slice(Math.max(file.size - maxTrailingBytes, maxLeadingBytes)).arrayBuffer();
  const decoder = new TextDecoder("utf-8", { fatal: false });

  return `${decoder.decode(leadingBuffer)}\n${decoder.decode(trailingBuffer)}`;
}

export async function createMetadataReport(file: File): Promise<MetadataReport> {
  const searchableText = await readSearchableBinaryText(file);
  const fileType = file.type || "Unknown image type";

  const likelyExif = includesAny(searchableText, ["Exif", "exif", "EXIF"]);
  const likelyGps = includesAny(searchableText, ["GPS", "GPSLatitude", "GPSLongitude", "GPSInfo"]);
  const likelyXmp = includesAny(searchableText, ["xmp", "XMP", "http://ns.adobe.com/xap"]);
  const likelyIccProfile = includesAny(searchableText, ["ICC_PROFILE", "iCCP", "ICCP"]);
  const likelyPhotoshopData = includesAny(searchableText, ["Photoshop", "8BIM"]);
  const likelyPngTextChunks = file.type === "image/png" && includesAny(searchableText, ["tEXt", "zTXt", "iTXt"]);
  const notes: string[] = [];

  if (likelyExif) {
    notes.push("EXIF-like metadata markers detected.");
  }

  if (likelyGps) {
    notes.push("GPS-like metadata markers detected.");
  }

  if (likelyPngTextChunks) {
    notes.push("PNG textual metadata chunk markers detected.");
  }

  if (!likelyExif && !likelyGps && !likelyXmp && !likelyIccProfile && !likelyPhotoshopData && !likelyPngTextChunks) {
    notes.push("No common metadata markers were detected, but this does not guarantee the file has no metadata.");
  }

  return {
    fileType,
    fileName: file.name,
    fileSize: file.size,
    likelyExif,
    likelyGps,
    likelyXmp,
    likelyIccProfile,
    likelyPhotoshopData,
    notes,
  };
}
