"use client"

import type { PortfolioData } from "./dashboard-page"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from "lucide-react"

interface PortfolioPreviewProps {
  data: PortfolioData
}

export function PortfolioPreview({ data }: PortfolioPreviewProps) {
  const isDark = data.theme === "dark"
  const baseClasses = isDark ? "bg-slate-900 text-white" : "bg-white text-slate-900"
  const cardClasses = isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200"
  const textMutedClasses = isDark ? "text-slate-400" : "text-slate-600"

  const renderMinimalLayout = () => (
    <div className={`${baseClasses} p-8 rounded-lg border transition-all duration-300`}>
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-balance">{data.name}</h1>
        <p className="text-xl text-blue-500 font-semibold mb-4">{data.title}</p>
        <p className={`${textMutedClasses} leading-relaxed max-w-2xl text-pretty`}>{data.bio}</p>
      </div>

      {data.skills.length > 0 && (
        <div className="mb-8">
          <h3 className="font-semibold mb-3 text-lg">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className={`px-3 py-1 ${cardClasses} rounded-full text-sm border transition-all duration-200 hover:border-blue-500/50 cursor-default`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="mb-8">
          <h3 className="font-semibold mb-4 text-lg">Experience</h3>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div
                key={exp.id}
                className={`${cardClasses} p-4 rounded-lg border transition-all duration-200 hover:border-blue-500/30`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold">{exp.position}</p>
                    <p className={textMutedClasses}>{exp.company}</p>
                  </div>
                  <p className={`text-sm ${textMutedClasses}`}>{exp.duration}</p>
                </div>
                <p className={`${textMutedClasses} text-sm`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.projects.length > 0 && (
        <div className="mb-8">
          <h3 className="font-semibold mb-4 text-lg">Projects</h3>
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div
                key={project.id}
                className={`${cardClasses} p-4 rounded-lg border transition-all duration-200 hover:border-blue-500/30`}
              >
                <p className="font-semibold mb-1">{project.title}</p>
                <p className={`${textMutedClasses} text-sm mb-2`}>{project.description}</p>
                <div className="flex justify-between items-center">
                  <p className={`text-xs ${textMutedClasses}`}>{project.technologies}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1 transition-colors duration-200"
                    >
                      View <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={`border-t ${isDark ? "border-slate-700" : "border-slate-200"} pt-6`}>
        <div className={`${textMutedClasses} text-sm space-y-2 mb-4`}>
          {data.email && (
            <div className="flex items-center gap-2">
              <Mail size={14} />
              <span>{data.email}</span>
            </div>
          )}
          {data.phone && (
            <div className="flex items-center gap-2">
              <Phone size={14} />
              <span>{data.phone}</span>
            </div>
          )}
          {data.location && (
            <div className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{data.location}</span>
            </div>
          )}
        </div>
        <div className="flex gap-3">
          {data.social.github && (
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <Github size={18} />
            </a>
          )}
          {data.social.linkedin && (
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <Linkedin size={18} />
            </a>
          )}
          {data.social.twitter && (
            <a
              href={data.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <Twitter size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  )

  const renderModernLayout = () => (
    <div className={`${baseClasses} rounded-lg border overflow-hidden shadow-lg transition-all duration-300`}>
      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-32" />
      <div className="px-8 py-6">
        <div className="mb-8 -mt-16 relative z-10">
          <div
            className={`w-24 h-24 ${isDark ? "bg-slate-800" : "bg-white"} rounded-full border-4 border-current flex items-center justify-center shadow-md transition-all duration-200`}
          >
            <div className="text-4xl font-bold text-blue-500">{data.name.charAt(0).toUpperCase()}</div>
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-1 text-balance">{data.name}</h1>
        <p className="text-lg text-blue-500 font-semibold mb-4">{data.title}</p>
        <p className={`${textMutedClasses} leading-relaxed max-w-2xl mb-6 text-pretty`}>{data.bio}</p>

        {data.skills.length > 0 && (
          <div className="mb-8">
            <h3 className="font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full text-sm border border-blue-500/20 transition-all duration-200 hover:border-blue-500/50 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-cyan-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {data.experience.length > 0 && (
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Experience</h3>
            <div className="space-y-4">
              {data.experience.map((exp) => (
                <div
                  key={exp.id}
                  className={`${cardClasses} p-4 rounded-lg border-l-4 border-l-blue-500 transition-all duration-200 hover:shadow-md`}
                >
                  <p className="font-semibold">{exp.position}</p>
                  <p className="text-blue-500 text-sm">{exp.company}</p>
                  <p className={`${textMutedClasses} text-xs mb-2`}>{exp.duration}</p>
                  <p className={`${textMutedClasses} text-sm`}>{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.projects.length > 0 && (
          <div className="mb-8">
            <h3 className="font-semibold mb-4">Featured Projects</h3>
            <div className="grid grid-cols-1 gap-4">
              {data.projects.map((project) => (
                <div
                  key={project.id}
                  className={`${cardClasses} p-4 rounded-lg border hover:border-blue-500/50 transition-all duration-200 hover:shadow-md`}
                >
                  <p className="font-semibold mb-1">{project.title}</p>
                  <p className={`${textMutedClasses} text-sm mb-2`}>{project.description}</p>
                  <div className="flex justify-between items-center">
                    <p className={`text-xs ${textMutedClasses}`}>{project.technologies}</p>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 text-sm flex items-center gap-1 transition-colors duration-200"
                      >
                        View <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className={`border-t ${isDark ? "border-slate-700" : "border-slate-200"} pt-6`}>
          <div className={`${textMutedClasses} text-sm space-y-2 mb-4`}>
            {data.email && (
              <div className="flex items-center gap-2">
                <Mail size={14} />
                <span>{data.email}</span>
              </div>
            )}
            {data.phone && (
              <div className="flex items-center gap-2">
                <Phone size={14} />
                <span>{data.phone}</span>
              </div>
            )}
            {data.location && (
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{data.location}</span>
              </div>
            )}
          </div>
          <div className="flex gap-3">
            {data.social.github && (
              <a
                href={data.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                <Github size={18} />
              </a>
            )}
            {data.social.linkedin && (
              <a
                href={data.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
            )}
            {data.social.twitter && (
              <a
                href={data.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                <Twitter size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  const renderCreativeLayout = () => (
    <div className={`${baseClasses} p-8 rounded-lg border space-y-8 transition-all duration-300`}>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-2">
          <h1 className="text-4xl font-bold mb-2 text-balance">{data.name}</h1>
          <p className="text-xl text-blue-500 font-semibold">{data.title}</p>
        </div>
        <div
          className={`${cardClasses} p-4 rounded-lg border text-center transition-all duration-200 hover:border-blue-500/30`}
        >
          <p className={textMutedClasses}>Based in</p>
          <p className="font-semibold">{data.location}</p>
        </div>
      </div>

      <p className={`${textMutedClasses} leading-relaxed text-pretty`}>{data.bio}</p>

      {data.skills.length > 0 && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-3 text-lg">Expertise</h3>
            <div className="space-y-2">
              {data.skills.slice(0, Math.ceil(data.skills.length / 2)).map((skill, i) => (
                <div
                  key={i}
                  className={`${cardClasses} px-4 py-2 rounded-lg border transition-all duration-200 hover:border-blue-500/30`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-lg"> </h3>
            <div className="space-y-2">
              {data.skills.slice(Math.ceil(data.skills.length / 2)).map((skill, i) => (
                <div
                  key={i}
                  className={`${cardClasses} px-4 py-2 rounded-lg border transition-all duration-200 hover:border-blue-500/30`}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {data.projects.length > 0 && (
        <div>
          <h3 className="font-semibold mb-4 text-lg">Selected Work</h3>
          <div className="space-y-3">
            {data.projects.map((project, idx) => (
              <div
                key={project.id}
                className={`${cardClasses} p-4 rounded-lg border transition-all duration-200 hover:shadow-md hover:border-blue-500/30`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <p className="font-semibold text-blue-500">0{idx + 1}</p>
                    <p className="font-semibold mb-1">{project.title}</p>
                    <p className={`${textMutedClasses} text-sm mb-2 text-pretty`}>{project.description}</p>
                    <p className={`text-xs ${textMutedClasses}`}>{project.technologies}</p>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 ml-4 transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className={`border-t ${isDark ? "border-slate-700" : "border-slate-200"} pt-6`}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className={`${textMutedClasses} text-xs mb-1`}>Contact</p>
            <div className={`${textMutedClasses} text-sm space-y-1`}>
              {data.email && <p>{data.email}</p>}
              {data.phone && <p>{data.phone}</p>}
            </div>
          </div>
          <div>
            <p className={`${textMutedClasses} text-xs mb-2`}>Connect</p>
            <div className="flex gap-3">
              {data.social.github && (
                <a
                  href={data.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  <Github size={18} />
                </a>
              )}
              {data.social.linkedin && (
                <a
                  href={data.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {data.social.twitter && (
                <a
                  href={data.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 transition-colors duration-200"
                >
                  <Twitter size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-4">
      {data.layout === "minimal" && renderMinimalLayout()}
      {data.layout === "modern" && renderModernLayout()}
      {data.layout === "creative" && renderCreativeLayout()}
    </div>
  )
}
