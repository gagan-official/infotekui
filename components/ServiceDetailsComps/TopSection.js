import BreadcrumDetector from "./BreadcrumDetector";

export default function TopSection() {
  return (
    <section
      style={{
        "--bgGradient":
          "linear-gradient(270.07deg, rgb(0, 43, 152, .75) 0.07%, rgb(0, 6, 12, .75) 99.95%)",
        "--bgImage":
          "url(/assets/images/serive-breadcrumb.jpg)",
      }}
      className="mainBreadcrumCont text-white flex flex-col items-center gap-6 py-44 maxlg:gap-3 maxlg:p-20"
    >
      <h1 className="font-bold text-6xl maxlg:text-4xl">Service Details</h1>
      <BreadcrumDetector />
    </section>
  );
}
