import { Separator } from "@/components/ui/separator";
import AspectImage from "@/components/ui/aspect-image";

type Project = {
  title: string | React.ReactNode;
  id?: string;
  date: string;
  description: string | React.ReactNode;
  image?: string;
  images?: string[]; // For dual-image layout
  imageHeight?: string; // Deprecated in favor of aspect ratio
  aspectRatio?: string; // CSS aspect-ratio string like "16 / 9" or "4 / 3" or "1 / 1"
  tags?: string[];
  list?: string[];
};

const currentProjects: Project[] = [
  {
    title: "Modular Transportable Quadcopter Platform",
    date: "Ongoing",
    description:
      "I'm developing the structures for an autonomous test bed vehicle with UAVs@Berkeley. It features a modular carbon fiber airframe that packs down into the size of an airline personal item luggage despite its 1.1m motor-to-motor span. Eventually, it will be capable of target localization, aerial mapping, and payload pickup and delivery. It will also be the first vehicle to use our new in-house flight controller and custom battery packs.",
  image: "/quad.png",
  aspectRatio: "2 / 1",
    tags: ["Autodesk Fusion", "Ansys Structures", "Composites", "Waterjet", "3D Printing"],
  },
  {
    title: "Tailsitter VTOL Quadcopter",
    date: "Ongoing",
    description:
      "I'm leading the research and development of a high performance VTOL vehicle with UAVs@Berkeley. Designed for the RoboNation SUAS and C-UASC competitions, it is meant to be fast and efficient in forward flight while still retaining the fast transition and maneuverability of a quadcopter. It will be our first vehicle to involve custom CNC wings and a carbon fiber layup fuselage.",
    tags: ["Autodesk Fusion", "Ansys Structures", "Composite Fiber Layups", "Vehicle Dynamics", "3D Printing"],
  },
  {
    title: "Auto-Bed Clearing 3D Printer",
    date: "Ongoing",
    description: (
      <>
        I really like the idea of the {" "}
        <a
          href="https://automatedlayers.com/"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Vertigo MK1
        </a>
        's auto-bed clearing system to enable contiuous printing but the printer itself does not fit my needs. I'm designing a new bed mechanism with SLM printed parts for more rigidity and so I can run the chamber up to 100C. The plan is to pair it with the {" "}
        <a
          href="https://github.com/Monolith3D/Monolith_Gantry"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Monolith
        </a>
        {" "}CoreXY motion system.
      </>
    ),
    tags: ["Autodesk Inventor", "Klipper", "Motion System Design", "SLM 3D Printing", " FDM 3D Printing"],
  },
  {
    title: "Everything Else",
    date: "Whenever",
    description: "A list of projects I've been working on on and off either because I don't have money or time.",
    list: [
      "Turn signals and accelerometer-controlled brakelight for my bike",
      "Optical drone tracker for autonomously filming drones",
      "Ridge Wallet style wallet with an embedded Moto Tag",
      "4-axis camera gimbal",
      "Python script to shut down a shared Palworld server when no player is online",
    ]
  }
];

const pastProjects: Project[] = [
  {
    title: (
      <>
        Thrust Vector Controlled Electric Ducted Fan Drone "Scoobert"
      </>
    ),
    date: "2025",
    description: (
      <>
        Designed and built a thrust vectoring VTOL vehicle around a 90mm EDF running the SingleCopter ArduPilot configuration. It flies, kinda. ArduPilot seems to handle the gyroscopic procession well enough, but I'm still working on tuning the PID and many other aspects of the software. All 3D printed parts were designed to be as easy to print as possible with minimal supports. This project was inspired by the {" "}
        <a
          href="https://www.youtube.com/watch?v=RMeEh5OUaDs/"
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Ikarus
        </a>
        {" "}project.
      </>
    ),
    tags: ["Solidworks", "ArduPilot", "Thrust Vector Control", "3D Printing"],
  },
  {
    title: (
      <>
        Autonomous Research Sailboats "TINA", "BOB", and "BOBneo"
      </>
    ),
    date: "2025",
    description: (
      <>
        These boats were my work at the Theoretical and Applied Fluid Dynamics Laboratory at UC Berkeley under Professor Reza Alam. I designed the mechanical architecture and all individual components for three generations of autonomous sailboats.
        The boats operate in a mesh network, communicating with each other and a ground station to collect oceanic data over a large area.
        They generally feature the same overall design with a single 2ft ABS tube hull, a large vertical airfoil sail, and a weighted keel for stability.
        The first generation, TINA, was based on the lab's past designs but with improvements to usability and DFM for 3D printing, plus new mounts for a new generation of custom electronics and control systems. In addition, a new sail shaft sealing system and epoxy-coated manufacturing process practically eliminated previous leakage issues.
        However, with the early boats' epoxied design, damaged boats could not be repaired easily and new versions of parts could not be back-ported onto existing boats.
        Thus came BOB, standing for "Bolt On Boat", whose components were all modular. A complex system of gaskets and O-rings kept the boat mostly watertight. Still, BOB was too complicated to assembly and occasionally suffered from leakage at the bolt holes.
        The latest generation, BOBneo ("no entry option"), and its derivative COB ("Clamp On Boat"), eliminated any bolt entry into the hull and proved to be much more reliable.
        Unfortunately, I don't have any photos of BOB in the water. Shown here are two iterations of TINA.
      </>
    ),
  images: ["/tina3.JPG", "/tina2.png"],
    aspectRatio: "3 / 4",
    tags: ["Autodesk Fusion", "Digi XBee", "Water Ingress Protection", "Hardware Integration", "3D Printing"],
  },
  {
    title: "Epsilon-E Automated Guideway System",
    date: "2025",
    description:
      "This was designed in a team of four as part of the Spring 2025 Berkeley ASME CADathon. It is more of an exercise in CAD than anything else. It is an Overhead Hoist Transport system for moving wafers and materials in a semiconductor fab. The major innovation is the maglev motion system which uses electromagnets in the track inspired by the SCMaglev railway system. The vehicles would levitate with compressed air at low speeds. The idea is that all propulsive power and control can be offloaded to the track, allowing for much simpler and cheaper vehicles and an unified control system. Each vehicle is just a passive pod with a small battery for onboard systems. In addition, there would be negligible frictional wear, resulting in less particulates released and maintenance requirements.",
    image: "/epsilone.png",
    aspectRatio: "4 / 3",
    tags: ["Autodesk Fusion"],
  },
  {
    title: "Homelab",
    date: "2021-2025",
    description:
      "My first 'homelab' was an old computer running Debian with a Minecraft server, Jellyfin, Navidrome, and a few other random things for fun. More recently, I bough a slightly newer second-hand Mini-ITX system. It's running TrueNAS SCALE with Nextcloud, Jellyfin, Immich, and some networking services. The system came with a nice Fractal Ridge case, but I'm designing a custom 3D printed rack for even greater space efficiency.",
    tags: ["TrueNAS SCALE", "Debian", "Docker", "Nginx", "Home Assistant"],
  },
  {
    title: (
      <>
        Voron V2.4 3D Printer "miku"
      </>
    ),
    date: "2024",
    description: (
      <>
        I wanted a 3D printer that I could bring to college, so I self-sourced and built a modified 350mm Voron 2 printer.
        It's been upgraded many times since first being built, including a Beacon probe, XOL toolhead, Papilio beltdrive extruder, and StealthMax air filter.
        I designed quite a few custom parts for it, including a gantry mounted nozzle wiper, filament runout sensor, and various mounts for all the doodads I've put on it.
        This printer even survived my dorm room getting flooded when my roommate broke a fire sprinkler.
        I've considered upgrading it even more with a 4040 frame and Monolith gantry, but I think I'll put my resources towards the brand new auto-bed clearing design I'm working on instead.
      </>
    ),
  image: "/miku1.JPG",
  aspectRatio: "4 / 3",
    tags: ["Mainsail", "Klipper", "Electronics Assembly", "Wiring Harnesses", "3D Printing"],
  },
  {
    title: (
      <>
        Maze Navigating Robot "Charlotte"
      </>
    ),
    date: "2024",
    description:
      "Designed for Science Olympiad's Robot Tour event. It runs on an Arduino-style RP2040 board with cheap ultrasonic sensors, an IMU, and wheel encoders for localization and dead reckoning. I briefly experimented with optical flow sensors as well. The 3D printed chassis was designed with three goals in mind: easy access to all electronics, compact size to avoid hitting walls, and modularity to easily iterate on the hardware. It won 1st at the 2024 COD Regionals and 4th place at the ISO State competition.",
  image: "/charlotte.JPG",
    aspectRatio: "5 / 3",
    tags: ["C++", "Arduino", "Autodesk Inventor", "Breadboarding", "3D Printing"],
  },
  {
    title: (
      <>
        Classroom Scheduling System
      </>
    ),
    date: "2024",
    description: (
      <>
        Created as part of a team in the Software Engineering 2 class under Dr. Derek Miller. It is a React webapp that displays time and scheduling information based on customizable schedules, meant to help teachers keep track of my high school's five different bell schedules which changed based on the day of the week and special events.
        The admin frontend allowed teachers to create and modify schedules and edit their clock display with drag and drop widgets like weather and current class name.
        The backend used OAuth2 with the school's Google Workspace and the entire system was deployed on a standalone Raspberry Pi with the client and admin frontend accessed through the school network.
      </>
    ),
  image: "/css.png",
    aspectRatio: "16 / 10",
    tags: ["React", "OAuth2", "Raspberry Pi OS", "MySQL"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl font-bold mb-4 gradient-text">Projects</h1>

      <Separator className="my-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent border-0 h-px" />

      {/* current */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 gradient-text">Current</h2>
        <div className="space-y-8">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>

      <Separator className="my-12 bg-gradient-to-r from-transparent via-primary/50 to-transparent border-0 h-px" />

      {/* past */}
      <section>
        <h2 className="text-3xl font-bold mb-8 gradient-text">Past</h2>
        <div className="space-y-8">
          {pastProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  // two images?
  const isDualImage = project.images && project.images.length === 2;
  
  return (
    <div
      className="relative glass-strong rounded-[2rem] p-8 backdrop-blur-3xl"
      style={{ background: "rgba(255,255,255,0.02)" }}
    >
      <div className="flex flex-col gap-6">
        {/* title and date */}
        <div>
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-2xl font-semibold gradient-text">
              {project.title}
            </h3>
            <span className="text-base text-muted-foreground whitespace-nowrap">
              {project.date}
            </span>
          </div>
          
          {/* tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full border border-primary/30 bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* dual photo */}
        {isDualImage && project.images && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.images.map((img, i) => (
              <AspectImage
                key={i}
                src={img}
                alt={`${typeof project.title === 'string' ? project.title : 'Project'} - Image ${i + 1}`}
                ratio={project.aspectRatio || "4 / 3"}
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            ))}
          </div>
        )}

        {/* single photo */}
        {!isDualImage && project.image && (
          <AspectImage
            src={project.image}
            alt={typeof project.title === 'string' ? project.title : 'Project image'}
            ratio={project.aspectRatio || "16 / 9"}
            sizes="(max-width: 768px) 100vw, 768px"
          />
        )}

        {/* description */}
        <p className="text-base leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.list && (
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            {project.list.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
