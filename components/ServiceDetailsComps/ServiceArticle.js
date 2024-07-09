import Accordion from "../Accordion";
import ImageComp from "../ImageComp";

const commonQuesData = [
  {
    heading: "Where Should I Incorporate My Business?",
    para: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't",
  },
  {
    heading: "How Long Should A Business Plan Be?",
    para: "There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.",
  },
  {
    heading: "What Is Included In Your Services?",
    para: "There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.",
  },
  {
    heading: "What Type Of Company Is Measured?",
    para: "There are many variations of passages Lorem Ipsum but the majority have suffered alteration in some form, by injected humor.",
  },
];

export default function ServiceArticle() {
  return (
    <article className="serviceArticleCont flex flex-col gap-6">
      <ImageComp src="/assets/images/details-1.jpg" className="w-full" />
      <ArticleHeadingPara
        heading="IT Consultancy"
        para={
          <>
            The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is
            eleifend porta arcu In hac habitasse the platea thelorem turpoi
            dictumst. In lacus libero faucibus malesuada sagittis placerat eros
            sed istincidunt augue ac ante rutrum sed the is sodales augue
            consequat.
            <br />
            <br />
            lacus sed pretium pretium justo. Integer is vitae venenatis lorem.
            Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at
            finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is
            orci volutpat semper vel id turpis In a malesuada arcu ac hendrerit.
          </>
        }
      />
      <ArticleHeadingPara
        heading="Most Common Question?"
        para="The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada."
      />
      <Accordion data={commonQuesData} />
    </article>
  );
}

function ArticleHeadingPara({ heading, para }) {
  return (
    <>
      <h3 className="text-3xl font-semibold mt-4">{heading}</h3>
      <p>{para}</p>
    </>
  );
}