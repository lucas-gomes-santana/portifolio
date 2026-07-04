import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HTML5,
  CSS3,
  JavaScript,
  TypeScript,
  React as ReactIcon,
  NodeJs,
  TailwindCSS,
  Git,
  GitHubDark,
  NextJs,
  MongoDB,
  MySQL,
  Sass,
} from "developer-icons";
import {
  Moon,
  Sun,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Linkedin,
  Github,
  Download,
  Mail,
  Phone,
  User,
  MessageSquare,
  ExternalLink,
  Globe,
} from "lucide-react";

import emailjs from "@emailjs/browser";
import { projectsData, translations } from "@/lib/translations";

const skillsData = [
  { icon: HTML5, name: "HTML5" },
  { icon: CSS3, name: "CSS3" },
  { icon: Sass, name: "Sass" },
  { icon: JavaScript, name: "JavaScript" },
  { icon: TypeScript, name: "TypeScript" },
  { icon: ReactIcon, name: "ReactJs" },
  { icon: NextJs, name: "Next.js" },
  { icon: NodeJs, name: "Node.js" },
  { icon: TailwindCSS, name: "Tailwind CSS" },
  { icon: MongoDB, name: "MongoDB" },
  { icon: MySQL, name: "MySQL" },
  { icon: Git, name: "Git" },
  { icon: GitHubDark, name: "GitHub" },
];

type Language = "pt-BR" | "en";

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone: string) {
  const phoneRegex = /^\(\d{2}\)\s9\d{4}-\d{4}$/;
  return phoneRegex.test(phone);
}

emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<Language>("pt-BR");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setError("");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setError("");
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (name.length < 10) {
      setError("Insira seu nome completo!");
      return;
    }

    if (email.length < 8 || !validateEmail(email)) {
      setError("Insira um email válido!");
      return;
    }

    if (phone.length > 0 && !validatePhone(phone)) {
      setError("Insira um número de telefone válido!");
      return;
    }

    setIsSending(true);

    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        message: `Mensagem enviada por ${name}\n\n Número: ${phone} \n\n E-mail: ${email}\n\n${message}`,
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
      );

      if (response.status === 200) {
        alert("Obrigado por enviar mensagem! Responderei em breve.");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setError("");
      } else {
        throw new Error("Falha ao enviar a mensagem");
      }
    } catch (error) {
      console.error("Falha ao enviar a mensagem:", error);
      setError("Falha ao enviar a mensagem. Por favor, tente novamente.");
    } finally {
      setIsSending(false);
    }
  };

  const t = translations[language];
  const projects = projectsData[language];

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  const languageLabels: Record<Language, string> = {
    "pt-BR": "PT",
    en: "EN",
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl md:text-2xl font-bold gradient-text"
            >
              {"<Lucas Dev />"}
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {(["about", "projects", "skills", "contact"] as const).map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-foreground/80 hover:text-primary transition-colors font-medium"
                  >
                    {t.nav[item]}
                  </button>
                ),
              )}
            </nav>

            {/* Controls */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {languageLabels[language]}
                  </span>
                </button>
                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 py-2 w-32 glass rounded-lg shadow-card"
                    >
                      {(["pt-BR", "en"] as Language[]).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setLanguage(lang);
                            setIsLangMenuOpen(false);
                          }}
                          className={`w-full px-4 py-2 text-left hover:bg-muted/50 transition-colors ${
                            language === lang ? "text-primary font-medium" : ""
                          }`}
                        >
                          {lang === "pt-BR" ? "Português" : "English"}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                {(["about", "projects", "skills", "contact"] as const).map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className="text-foreground/80 hover:text-primary transition-colors font-medium text-left py-2"
                    >
                      {t.nav[item]}
                    </button>
                  ),
                )}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full gradient-bg opacity-20 blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary opacity-20 blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg md:text-xl mb-4"
            >
              {t.hero.greeting}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 gradient-text"
            >
              {t.hero.name}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/90 mb-6"
            >
              {t.hero.role}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap items-center justify-center gap-4 mt-10"
            >
              <a
                href="https://www.linkedin.com/in/lucas-gomes-santana-77892a343/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-glow"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="https://github.com/lucas-gomes-santana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border font-medium hover:bg-muted transition-colors shadow-card"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              {t.about.title}
            </h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Profile Photo + About Text */}
              <div className="glass p-6 md:p-8 rounded-2xl shadow-card">
                {/* Profile Photo Container */}
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-glow">
                      <img
                        src="/My-Photo.png"
                        alt="Foto de perfil"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Decorative ring */}
                    <div className="absolute -inset-2 rounded-full border-2 border-primary/20 animate-pulse" />
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                  {t.about.text}
                </p>

                <a
                  href="/Lucas-Gomes-Santana-Curriculo.pdf"
                  download="Lucas-Gomes-Santana-Curriculo.pdf"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full gradient-bg text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-glow"
                >
                  <Download className="w-5 h-5" />
                  {t.about.downloadCV}
                </a>
              </div>

              {/* Services */}
              <div className="glass p-6 md:p-8 rounded-2xl shadow-card">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">
                  {t.about.services}
                </h3>
                <ul className="space-y-4">
                  {t.about.servicesList.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full gradient-bg mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{service}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
              {t.projects.title}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
              <AnimatePresence mode="sync">
                {displayedProjects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ delay: index * 0.1 }}
                    className="group glass rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <a
                          rel="noopener noreferrer"
                          target="_blank"
                          href={project.link}
                          className="flex items-center gap-2 text-sm font-medium text-primary-foreground gradient-bg px-4 py-2 rounded-full"
                        >
                          {t.projects.viewProject}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                    <div className="p-5 md:p-6">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3 className="text-lg md:text-xl font-semibold text-foreground">
                          {project.title}
                        </h3>
                        {project.isPrivate && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 whitespace-nowrap">
                            {t.projects.private}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div>
                        <p className="text-xs font-medium text-muted-foreground mb-2">
                          {t.projects.tools}:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {projects.length > 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center mt-10"
              >
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {showAllProjects ? (
                    <>
                      {t.projects.viewLess}
                      <ChevronUp className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      {t.projects.viewMore}
                      <ChevronDown className="w-5 h-5" />
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
              {t.skills.title}
            </h2>
            <p className="text-muted-foreground text-center text-lg mb-16">
              {t.skills.subtitle}
            </p>

            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 max-w-5xl mx-auto">
              {skillsData.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group relative"
                  >
                    <div className="glass p-4 md:p-6 rounded-xl shadow-card hover:shadow-hover transition-all duration-300 flex items-center justify-center aspect-square group-hover:scale-105">
                      <IconComponent className="w-8 h-8 md:w-10 md:h-10" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      <span className="text-xs md:text-sm font-medium bg-foreground text-background px-3 py-1 rounded-full">
                        {skill.name}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 gradient-text">
              {t.contact.title}
            </h2>
            <p className="text-muted-foreground text-center text-lg mb-12">
              {t.contact.subtitle}
            </p>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <form
              className="glass p-6 md:p-8 rounded-2xl shadow-card space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <User className="w-4 h-4" />
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  placeholder={t.contact.namePlaceholder}
                  value={name}
                  onChange={handleNameChange}
                  disabled={isSending}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <Mail className="w-4 h-4" />
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  placeholder={t.contact.emailPlaceholder}
                  value={email}
                  onChange={handleEmailChange}
                  disabled={isSending}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <Phone className="w-4 h-4" />
                  {t.contact.phone}
                </label>
                <input
                  type="tel"
                  placeholder={t.contact.phonePlaceholder}
                  value={phone}
                  onChange={handlePhoneChange}
                  disabled={isSending}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                  <MessageSquare className="w-4 h-4" />
                  {t.contact.message}
                </label>
                <textarea
                  placeholder={t.contact.messagePlaceholder}
                  value={message}
                  onChange={handleMessageChange}
                  disabled={isSending}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg gradient-bg text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity shadow-glow"
              >
                {t.contact.send}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {t.hero.name}. {t.footer.rights}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/lucas-gomes-santana-77892a343/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/lucas-gomes-santana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="lucasgomessantana259@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
