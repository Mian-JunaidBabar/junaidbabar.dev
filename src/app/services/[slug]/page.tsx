import { notFound } from "next/navigation";
import resumeData from "@/data/resume.json";
import { getServiceBySlug, services } from "@/data/services";
import ServiceClient from "@/components/ServiceClient";

// Generate static params for all service pages
export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug as string);

  if (!service) {
    notFound();
  }

  // Filter projects related to this service
  const relatedProjects = resumeData.projects.filter((project) =>
    service.relatedProjects.some((keyword) =>
      project.keywords?.some((k) =>
        k.toLowerCase().includes(keyword.toLowerCase())
      )
    )
  );

  // Prepare serializable service object (remove functions/components)
  const serializedService = {
    title: service.title,
    slug: service.slug,
    shortDesc: service.shortDesc,
    fullDesc: service.fullDesc,
    tags: service.tags,
    skillsDetailed: service.skillsDetailed,
    roadmap: service.roadmap,
    targetClients: service.targetClients,
    relatedProjects: service.relatedProjects,
  };

  return (
    <ServiceClient
      service={serializedService}
      relatedProjects={relatedProjects}
    />
  );
}
