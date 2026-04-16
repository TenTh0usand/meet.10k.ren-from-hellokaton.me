import { DATA } from "@/data/resume";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    givenName: DATA.name,
    familyName: "杜",
    url: DATA.url,
    jobTitle: "预防医学本科生",
    worksFor: {
      "@type": "Organization",
      name: "待补充机构",
    },
    sameAs: [DATA.contact.social.GitHub.url],
    knowsAbout: DATA.skills,
    description: DATA.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
