import { DATA } from "@/data/resume";

export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: DATA.name,
          alternateName: [DATA.username],
          description: DATA.description,
          image: `${DATA.url}/portfolio.png`,
          url: DATA.url,
          sameAs: [DATA.contact.social.GitHub.url],
          jobTitle: "预防医学本科生",
          worksFor: {
            "@type": "Organization",
            name: "待补充机构",
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "大连医科大学",
          },
          address: {
            "@type": "PostalAddress",
            addressLocality: "大连",
            addressCountry: "中国",
          },
          email: DATA.contact.email,
          knowsAbout: DATA.skills,
        }),
      }}
    />
  );
}
