export default function About() {
  const education = [
    {
      title: "Vanderbilt University",
      subtitle: "B.S. in Computer Science and Mathematics, Minor in Data Science",
      duration: "Expected Graduation: May 2025",
      details: ["School of Engineering"],
    },
  ];

  const coursework = [
    "Foundations of Machine Learning",
    "Database Management Systems",
    "Principles of Cloud Computing",
    "Web-Based System Architecture",
    "Principles of Software Engineering",
    "Programming Languages",
    "Operating Systems",
    "Algorithms",
    "Modern Programming Techniques",
    "Programming Design & Data Structures",
  ];

  const certifications = [
    { title: "AWS Certified Cloud Practitioner", provider: "Amazon Web Services" },
    { title: "Product Management Basics", provider: "Pendo x Mind the Product" },
    { title: "IBM DevOps & Software Engineering", provider: "IBM" },
    { title: "AI for Everyone", provider: "DeepLearning.AI (Coursera)" },
    { title: "Operations Management", provider: "University of Pennsylvania (Coursera)" },
    { title: "Managing People at Work", provider: "University of Leeds (Coursera)" },
    { title: "AI & ML Fundamentals", provider: "Great Learning" },
  ];

  return (
    <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>

        {/* Summary Section */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Engineer at heart. I love solving problems, breaking down complexity, and building things that work.  
            Whether it&apos;s AI, software, or data, I enjoy tackling challenges and making systems better.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            I also have a passion for leadership and product thinking. I like working with teams, making decisions, and building products that actually matter.
          </p>
        </div>

        {/* Education Section */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
          {education.map((edu, index) => (
            <div key={index} className="mt-3">
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300">{edu.title}</h4>
              <p className="text-gray-600 dark:text-gray-400">{edu.subtitle}</p>
              <p className="text-gray-500 dark:text-gray-400">{edu.duration}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2">
                {edu.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Relevant Coursework */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Relevant Coursework</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2">
            {coursework.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>

        {/* Certifications */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Certifications</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mt-2">
            {certifications.map((cert, index) => (
              <li key={index}>
                <span className="font-medium">{cert.title}</span> – {cert.provider}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}