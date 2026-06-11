type JsonLdPrimitive = string | number | boolean | null;

export type JsonLdValue =
  | JsonLdPrimitive
  | { [key: string]: JsonLdValue }
  | JsonLdValue[];

export function StructuredData({ data }: { data: JsonLdValue }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
