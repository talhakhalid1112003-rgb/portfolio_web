import SkillCard from "./skillCard";

export default function SkillsSection() {
  return (
    <section className="w-full grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {/* Frontend */}
      <SkillCard
        title="Frontend Development"
        description="HTML, CSS, SCSS, JavaScript, jQuery, React.js, Next.js, Redux for State Management, Bootstrap, Tailwind, Material-UI"
        icon={
          <>
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </>
        }
      />

      {/* Mobile */}
      <SkillCard
        title="Mobile Development"
        description="Cross-platform apps with React Native, delivering native performance on iOS and Android."
        icon={
          <>
            <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
            <path d="M12 18h.01"></path>
          </>
        }
      />

      {/* Backend */}
      <SkillCard
        title="Backend Development"
        description="Scalable APIs with Node.js, ExpressJS, Firebase and cloud infrastructure, Strapi, Restful Apis, JWT, Oauth, SQL and NoSQL(MongoDb) databases."
        icon={
          <>
            <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
            <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
            <line x1="6" x2="6.01" y1="6" y2="6"></line>
            <line x1="6" x2="6.01" y1="18" y2="18"></line>
          </>
        }
      />

      {/* Tools */}
      <SkillCard
        title="Tools"
        description="Experienced with version control (Git, GitHub, GitLab), VS Code, Project Management (Jira, Trello), API Testing (Postman), and Deployment Platforms (Vercel, Netlify, AWS, Google Cloud)."
        icon={
          <>
            <path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
            <path d="M3 12A9 3 0 0 0 21 12"></path>
            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          </>
        }
      />
    </section>
  );
}
