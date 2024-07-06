const navElements = [
  {
    title: "Home",
    url: "/",
    children: [
      {
        title: "Home 01",
        url: "/",
      },
      {
        title: "Home 02",
        url: "/",
      },
      {
        title: "Home 03",
        url: "/",
      },
      {
        title: "Home 04",
        url: "/",
      },
    ],
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Services",
    url: "/news",
    children: [
      {
        title: "Services",
        url: "/service",
      },
      {
        title: "Service Carousal",
        url: "/service-carousal",
      },
      {
        title: "Service Details",
        url: "/service-details",
      },
    ],
  },
  {
    title: "Pages",
    url: "/news",
    children: [
      {
        title: "Projects",
        url: "/project",
        children: [
          {
            title: "Project",
            url: "/project",
          },
          {
            title: "Project Carousal",
            url: "/project-carousal",
          },
          {
            title: "Project Details",
            url: "/project-details",
          },
        ],
      },
      {
        title: "Team",
        url: "/team",
        children: [
          {
            title: "Our Team",
            url: "/team",
          },
          {
            title: "Team Carousal",
            url: "/team-carousal",
          },
          {
            title: "Team Details",
            url: "/team-details",
          },
        ],
      },
      {
        title: "Pricing",
        url: "/pricing",
      },
      {
        title: "Faq's",
        url: "/faq",
      },
      {
        title: "404 Page",
        url: "/404",
      },
    ],
  },
  {
    title: "Blog",
    url: "/news",
    children: [
      {
        title: "Blod Grid",
        url: "/news",
      },
      {
        title: "Blog Standard",
        url: "/news-standard",
      },
      {
        title: "Blog Details",
        url: "/news-details",
      },
    ],
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export default navElements;
