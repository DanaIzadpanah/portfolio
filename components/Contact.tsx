import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      id: 1,
      name: "Email",
      icon: <FaEnvelope className="text-4xl text-red-600" />, // 🔹 Consistent size
      link: "mailto:dana.n.izadpanah@vanderbilt.edu",
    },
    {
      id: 2,
      name: "GitHub",
      icon: <FaGithub className="text-4xl text-gray-900 dark:text-white" />, // 🔹 Consistent size
      link: "https://github.com/danaizadpanah",
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: <FaLinkedin className="text-4xl text-blue-700" />, // 🔹 Consistent size
      link: "https://www.linkedin.com/in/dana-izadpanah/",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          🤝 Connect With Me
        </h2>

        {/* Contact Icons - Uniform Size */}
        <div className="flex justify-center gap-8">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:shadow-lg transition transform hover:scale-105 border border-gray-200 dark:border-gray-700 w-32 h-32"
            >
              {contact.icon}
              <span className="mt-2 text-lg font-medium text-gray-800 dark:text-gray-200">
                {contact.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}