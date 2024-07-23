import ServiceArticle from "@/components/ServiceDetailsComps/ServiceArticle";
import ServiceAside from "@/components/ServiceDetailsComps/ServiceAside";
import TopSection from "@/components/ServiceDetailsComps/TopSection";

export default function ServiceDetails() {
  return (
    <>
      <TopSection />
      <main className="flex justify-center gap-8 p-14 maxlg:p-8 maxlg:flex-col">
        <ServiceAside />
        <ServiceArticle />
      </main>
    </>
  );
}
