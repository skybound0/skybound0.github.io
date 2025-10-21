import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* hero */}
      <section
        className="relative grid grid-cols-[auto,1fr] sm:flex sm:flex-row gap-6 sm:gap-8 items-start mb-16 glass-strong rounded-[2rem] p-6 sm:p-8 backdrop-blur-3xl"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        {/* photo */}
        <div className="relative z-10 flex-shrink-0">
          <div className="w-28 h-28 sm:w-32 sm:h-32 relative rounded-full overflow-hidden border-1 border-white/30">
            <Image
              src="/pfp2.png"
              alt="Personal photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* details */}
        <div className="relative z-10 flex-grow">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 gradient-text">Eric Gu</h1>
          
          {/* linkedin and email */}
          <div className="flex gap-4 mb-4">
            <Link 
              href="https://www.linkedin.com/in/eric-t-gu/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedInIcon sx={{ fontSize: 32 }} />
            </Link>
            <Link 
              href="mailto:eric.gu@berkeley.edu"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <EmailIcon sx={{ fontSize: 32 }} />
            </Link>
          </div>

          {/* description */}
          <div className="hidden sm:block text-base text-muted-foreground leading-relaxed mb-6 space-y-1">
            <p>Mechanical Engineering + Electrical Engineering & Computer Science</p>
            <p><em className="italic">University of California, Berkeley</em>, '28</p>
            <p>I enjoy all things mechatronics, including robots, drones, and 3D printers!</p>
          </div>

          {/* navigation buttons (desktop) */}
          <div className="hidden sm:flex gap-3 sm:gap-4">
            <Button asChild variant="default" className="bg-primary/20 hover:bg-primary/30 border border-primary/30">
              <Link href="/projects">Projects</Link>
            </Button>
            <Button asChild variant="outline" className="glass border-white/30 hover:bg-primary/10 hover:text-foreground">
              <Link href="/cooking">Cooking</Link>
            </Button>
            <Button asChild variant="outline" className="glass border-white/30 hover:bg-primary/10 hover:text-foreground">
              <Link href="/Gu_Eric_Resume_10_17_2025.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open resume in new tab">Resume</Link>
            </Button>
          </div>
        </div>

        {/* description shown below on mobile */}
        <div className="sm:hidden col-span-2 text-base text-muted-foreground leading-relaxed mt-4 space-y-1">
          <p>Mechanical Engineering + Electrical Engineering & Computer Science</p>
          <p><em className="italic">University of California, Berkeley</em>, '28</p>
          <p>I enjoy all things mechatronics, including robots, drones, and 3D printers!</p>
          {/* navigation buttons (mobile) */}
          <div className="mt-3 flex gap-3">
            <Button asChild variant="default" className="bg-primary/20 hover:bg-primary/30 border border-primary/30">
              <Link href="/projects">Projects</Link>
            </Button>
            <Button asChild variant="outline" className="glass border-white/30 hover:bg-primary/10 hover:text-foreground">
              <Link href="/cooking">Cooking</Link>
            </Button>
            <Button asChild variant="outline" className="glass border-white/30 hover:bg-primary/10 hover:text-foreground">
              <Link href="/Gu_Eric_Resume_10_17_2025.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open my resume in new tab">Resume</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="my-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent border-0 h-px" />

      {/* activities */}
      <section>
        <h2 className="text-4xl font-bold mb-8 gradient-text">Activities</h2>
        
        <div className="space-y-8">
          {activities.map((exp, index) => (
            <div 
                key={index} 
                className="relative pl-8 border-l-2 border-primary/30 glass-strong rounded-[2rem] p-8 backdrop-blur-3xl"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
              {/* timeline-style dot */}
              {/*<div className="absolute left-[-9px] top-6 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background shadow-lg" />*/}
              
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-2xl font-semibold gradient-text">{exp.title}</h3>
                  <p className="text-lg text-muted-foreground">{exp.role}</p>
                  {/* date under role on mobile */}
                  <span className="text-base text-muted-foreground sm:hidden">{exp.date}</span>
                </div>
                {/* right-aligned date on desktop */}
                <span className="hidden sm:block text-base text-muted-foreground whitespace-nowrap">
                  {exp.date}
                </span>
              </div>
              
              {exp.description && (
                <p className="text-base leading-relaxed">{exp.description}</p>
              )}
              
              {exp.accomplishments && (
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {exp.accomplishments.map((accomplishment, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{accomplishment}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

type Activity = {
  title: string;
  role: string;
  date: string;
  description?: string;
  accomplishments?: string[] | React.ReactNode[];
};

const activities: Activity[] = [
  {
    title: "Unmanned Aerial Vehicles at Berkeley",
    role: "Lead Airframe Engineer",
    date: "Aug 2024 - Present",
    accomplishments: [
      (<>
        Leading the hardware development and integration of{" "}
        <a
          href="/projects"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          two competition and research platforms
        </a>
      </>),
      (<>
        Designing and manufacturing a variety of structures and components using 3D printing, machining, waterjet, and more
      </>),
      (<>
        Creating curriculum for and teaching a onboarding program with lectures and workshops on CAD, material science, FEA, and more
      </>),
      (<>
        Producing content for and managing social media channels for outreach and recruitment
      </>)
    ],
  },
  {
    title: "Theoretical and Applied Fluid Dynamics Laboratory",
    role: "Undergraduate Researcher",
    date: "May 2025 - Aug 2025",
    accomplishments: [
      "Designed the mechanical systems for three generations of autonomous sailboats",
      "Integrated sailboat control boards, sensors, and actuators with with a unified, easy-to-access mounting system and electrical wiring",
      "Developed a 0.25m diameter vertical axis wind turbine to power endurance sailboats",
      "Worked through every part of the vehicles' development process, including manufacturing, software deployment, and testing"
    ]
  },
  {
    title: "Supernode Makerspace",
    role: "Student Fabrication Admin",
    date: "Dec 2024 - Present",
    accomplishments: [
      "Maintained and repaired a fleet of Prusa i3 MK3S and Bambu Labs X1C 3D printers",
      "Developed training curriculum and trained over 40 students on fabrication equipment operation",
      "Provided design reviews and DFM analysis for students' personal and research projects",
      "Oversaw the acquisition of $6k in new 3D printers, including product analysis, funding petitions, training material development, and software deployment"
    ]
  },
  {
    title: "Space Enterprise at Berkeley",
    role: "Structures Team Member",
    date: "Aug 2024 - Present",
    accomplishments: [
      "Engineered thrust transfer structures for a 20 kN rocket engine, chargewells, eye bolts, and other parts",
      "Performed FEA and hand mechanics calculations on structural components for mass optimization",
      "Fabricated numerous components including performing fiberglass layups for composite nosecones"
    ]
  },
  {
    title: "Civil Air Patrol",
    role: "Grade of Cadet Major. Cadet Public Affairs Officer, Cadet Aerospace Education Officer, Cadet Commander",
    date: "Aug 2018 - Aug 2024",
    accomplishments: [
      (<>
        Ran Public Affairs operations in support of numerous events around the country across 3 years
      </>),
      (<>
        Led and mentored the Public Affairs team for the 400-attendee Winter Raptor leadership and aerospace camp for 2 consecutive years of record-breaking recruitment
      </>),
      (<>
        Produced{" "}
        <a
          href="https://photos.cap.gov/Pacific-Region/Encampment/Winter-Raptor-VII-2023"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          10k+ photos
        </a>
        ,{" "}
        <a
          href="https://www.youtube.com/@winterraptorencampment"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          100+ hours of interviews and video
        </a>
        , 4 news articles, and more
      </>),
      (<>
        Designed and taught a model rocketry course with 3 launches for 20 cadets
      </>),
      (<>
        Led a 70-member squadron through the COVID-19 pandemic, adapting training materials and activities for online presentation
      </>),
      (<>
        Awarded the Amelia Earhart Award, Oregon Wing Commander's Commendation, Air Force Association's Outstanding CAP Squadron Cadet Award, Cadet Achievement Award, and more
      </>)
    ]
  },
  {
    title: "Naperville Central High School Science Olympiad",
    role: "Team Captain",
    date: "Aug 2020 - May 2024",
    accomplishments: [
      (<>
        Designed and built {" "}
        <a
          href="/projects"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          autonomous maze navigating robots
        </a>
        {" "} and endurance freeflight aircraft among many other systems
      </>),
      (<>
        Placed in the top 3 in countless events across 4 years of regional and state competitions
      </>),
      (<>
        Restructed team recruitment and training processes, boosting appicants by 20% and 9-place improvement at state competition
      </>)
    ]
  },
  {
    title: "CyberPatriot",
    role: "Team Captain",
    date: "Aug 2021 - May 2024",
    accomplishments: [
      "Founded a team at my highschool after competing with Civil Air Patrol Squadron",
      "Placed 3rd in state in the Open Division and 2nd in state in the All Service Division in the Platinum Tier"
    ]
  },
  {
    title: "Boy Scouts of America",
    role: "Eagle Scout",
    date: "2016 - 2023",
  },
];
