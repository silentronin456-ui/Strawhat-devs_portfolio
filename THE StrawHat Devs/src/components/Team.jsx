import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

export default function Team() {
  const team = [
    {
      id: 'OP-01',
      badge: 'LEADER',
      name: 'Aditya Parab',
      role: 'Head & Team Lead',
      subroles: ['System Architect', 'Developer Lead', 'UI/UX & 3D Designer'],
      image: '/team/aditya.jpg',
      linkedin: '',
      github: '',
      email: '',
      phone: '',
      isLead: true,
    },
    {
      id: 'OP-02',
      badge: 'RESEARCH',
      name: 'Krishav Maurya',
      role: 'Research Lead & Developer',
      subroles: ['Presentation Lead', 'Systems Research'],
      image: '/team/krishav.jpg',
      linkedin: 'https://www.linkedin.com/in/krishav-maurya-1b25283ba/',
      github: 'https://github.com/krishav01-stack',
      email: 'mailto:mauryakrishav01@gmail.com',
      phone: 'tel:+919326884262',
    },
    {
      id: 'OP-03',
      badge: 'DEV & RS',
      name: 'Atharva Manoj Jaiswal',
      role: 'Assis. Research & Developer',
      subroles: ['Simulation Engine', 'Backend Support'],
      image: '/team/atharva-jaiswal.jpg',
      linkedin: 'https://www.linkedin.com/in/atharva-jaiswal-28104b434',
      github: 'https://github.com/xyzabc-crypto',
      email: 'mailto:atharvaixe27@gmail.com',
      phone: 'tel:+919326024177',
    },
    {
      id: 'OP-04',
      badge: 'DESIGN',
      name: 'Gehana Manwani',
      role: 'Lead Designer',
      subroles: ['Documentation Head', 'Design Systems'],
      image: '/team/gehana.jpg',
      linkedin: 'https://www.linkedin.com/in/gehana-manwani-a40066417',
      github: 'https://github.com/GehanaManwani',
      email: 'mailto:gehanamanwani2007@gmail.com',
      phone: 'tel:+919324814279',
    },
    {
      id: 'OP-05',
      badge: 'QA & TEST',
      name: 'Atharva Gaikwad',
      role: 'Tester',
      subroles: ['Quality Assurance', 'Telemetry Verification'],
      image: '/team/atharva-gaikwad.jpg',
      linkedin: 'https://www.linkedin.com/in/atharva-gaikwad-962330389',
      github: 'https://github.com/attu1409py',
      email: 'mailto:attu1409@gmail.com',
      phone: 'tel:+917208194110',
    },
    {
      id: 'OP-06',
      badge: 'SUPPORT',
      name: 'Bhupesh Patil',
      role: 'Assis. Designer',
      subroles: ['Support Developer', 'Asset Pipeline'],
      image: '/team/bhupesh.jpg',
      linkedin: 'https://www.linkedin.com/in/bhupesh-patil-0aa64b376',
      github: 'https://github.com/Bhupesh-tech143',
      email: 'mailto:bhupesh.d.patil123@gmail.com',
      phone: 'tel:+919172424909',
    },
  ];

  return (
    <section className="w-full py-28 px-4 sm:px-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-black relative overflow-hidden transition-colors duration-300">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-strawhat-red/5 blur-[120px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-600 dark:text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-strawhat-red animate-pulse" />
            Active Personnel // 06 Operatives
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-neutral-900 dark:text-white mb-4 uppercase">
            Operatives
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 font-mono uppercase text-xs sm:text-sm tracking-[0.2em] max-w-xl">
            StrawHat Devs Task Force — UAV Digital Twin Engineering & Research Division
          </p>
        </div>

        {/* 3-3 Operatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative bg-white dark:bg-neutral-950 border transition-all duration-300 flex flex-col overflow-hidden ${
                member.isLead
                  ? 'border-strawhat-red/60 shadow-[0_0_30px_rgba(230,25,25,0.12)]'
                  : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600'
              }`}
            >
              {/* Corner HUD Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-strawhat-red opacity-0 group-hover:opacity-100 transition-opacity z-20 m-1.5" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-strawhat-red opacity-0 group-hover:opacity-100 transition-opacity z-20 m-1.5" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-strawhat-red opacity-0 group-hover:opacity-100 transition-opacity z-20 m-1.5" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-strawhat-red opacity-0 group-hover:opacity-100 transition-opacity z-20 m-1.5" />

              {/* Card Header Tag */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/30 text-[11px] font-mono">
                <span className="text-neutral-500 dark:text-neutral-400 font-semibold tracking-wider">
                  {member.id}
                </span>
                <span className={`px-2 py-0.5 text-[9px] font-black uppercase tracking-widest ${
                  member.isLead
                    ? 'bg-strawhat-red text-white'
                    : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                }`}>
                  {member.badge}
                </span>
              </div>

              {/* Image Frame */}
              <div className="relative w-full aspect-[4/4.5] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                
                {/* Tech scanline overlay effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Subtle telemetry line */}
                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[9px] font-mono text-white/70">
                  <span>SYS://LIVE</span>
                  <span>SYNC_OK</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between bg-white dark:bg-neutral-950">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white uppercase tracking-tight mb-1 group-hover:text-strawhat-red transition-colors">
                    {member.name}
                  </h3>
                  
                  <p className="text-xs font-mono font-bold text-strawhat-red dark:text-strawhat-red uppercase tracking-wider mb-3">
                    {member.role}
                  </p>

                  {/* Subroles / Specialties Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {member.subroles.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-medium px-2 py-0.5 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social & Contact Actions */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all"
                        title="LinkedIn Profile"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    ) : null}

                    {member.github ? (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-neutral-900 dark:hover:bg-neutral-800 hover:border-neutral-900 transition-all"
                        title="GitHub Profile"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    ) : null}

                    {member.email ? (
                      <a
                        href={member.email}
                        className="p-2 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-strawhat-red hover:border-strawhat-red transition-all"
                        title="Send Email"
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    ) : null}

                    {member.phone ? (
                      <a
                        href={member.phone}
                        className="p-2 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all"
                        title="Call Contact"
                      >
                        <Phone className="w-3.5 h-3.5" />
                      </a>
                    ) : null}

                    {member.isLead && !member.linkedin ? (
                      <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                        // Core Lead
                      </span>
                    ) : null}
                  </div>

                  <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-600">
                    ID#{i + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
