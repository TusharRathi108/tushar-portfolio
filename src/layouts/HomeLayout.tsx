import Header from "@/components/Header";
import { Helmet } from "react-helmet-async";
import { Outlet, useLocation } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { Fragment } from "react/jsx-runtime";

const HomeLayout = () => {
  // get the path on which user has navigated to change title and description.
  const location = useLocation();

  // get title based on the path.
  const getTitle = (path: string) => {
    switch (path) {
      case "/":
        return "Home";
      case "/services":
        return "Services";
      case "/resume":
        return "Resume";
      case "/work":
        return "Work";
      case "/contact":
        return "Contact";
      default:
        return "Home";
    }
  };

  // get description based on the path.
  const getDescription = (path: string) => {
    switch (path) {
      case "/":
        return "Welcome to the homepage of Tushar Rathi, showcasing my portfolio, skills, and expertise as a Fullstack Developer.";
      case "/services":
        return "Explore the range of services offered by Tushar Rathi, including web development, UI/UX design, logo designing, and SEO.";
      case "/resume":
        return "View the professional resume of Tushar Rathi, highlighting education, experience, skills, and accomplishments in web development.";
      case "/work":
        return "Discover the projects and work portfolio of Tushar Rathi, demonstrating a diverse set of skills and successful projects.";
      case "/contact":
        return "Get in touch with Tushar Rathi for collaboration, inquiries, or hiring opportunities. Reach out today to discuss your needs.";
      default:
        return "Welcome to the homepage of Tushar Rathi, showcasing my portfolio, skills, and expertise as a Fullstack Developer.";
    }
  };

  const path = location.pathname;

  return (
    <Fragment>
      <Helmet>
        <title>{getTitle(path)}</title>
        <meta name="description" content={getDescription(path)} />
      </Helmet>
      <div className="felx flex-col">
        <Header />
        <PageTransition>
          <Outlet />
        </PageTransition>
      </div>
    </Fragment>
  );
};

export default HomeLayout;
