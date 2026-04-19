import { PenTool, Code, Smartphone, Zap } from 'lucide-react'
import { aboutData } from '@/lib/portfolio-data'

const iconMap = {
  Code,
  Zap,
  Smartphone,
  PenTool,
}

interface AboutSectionProps {
  data?: typeof aboutData
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  return (
    <div className="space-y-8 md:space-y-10">
      {/* About Me */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">About Me</h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-6" />
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* What I'm Doing */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={index}
                className="flex gap-3 md:gap-4 p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
                  <IconComponent className="w-full h-full text-accent" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">{service.title}</h4>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Skills & Technical Competencies */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Skills & Technical Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {data.technicalSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm md:text-base text-foreground font-medium">{skill.name}</span>
                <span className="text-xs md:text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">Education</h3>
        <div className="space-y-4">
          {data.education.map((edu, index) => (
            <div
              key={index}
              className="p-4 md:p-6 bg-secondary rounded-xl md:rounded-2xl border border-border hover:border-accent transition-colors"
            >
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-1">{edu.school}</h4>
              <p className="text-sm md:text-base text-accent mb-2">{edu.degree}</p>
              <div className="flex flex-wrap gap-2 text-xs md:text-sm text-muted-foreground">
                <span>{edu.period}</span>
                <span>•</span>
                <span>{edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
