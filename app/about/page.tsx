import Image from "next/image";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      role: "Child Psychologist",
      bio: "Specializing in digital behavior and online safety for children.",
      image: "/images/team/sarah.jpg",
    },
    {
      name: "Michael Chen",
      role: "Cybersecurity Expert",
      bio: "Dedicated to protecting families in the digital space.",
      image: "/images/team/michael.jpg",
    },
    {
      name: "Emma Rodriguez",
      role: "Digital Education Specialist",
      bio: "Creating engaging and safe digital learning experiences.",
      image: "/images/team/emma.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              About DSA Parental Digital Survival Kit
            </h1>
            <p className="text-lg text-text/80">
              Empowering parents with the tools and knowledge to navigate the
              digital world safely
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-text/80">
                To equip parents and caregivers with the tools, knowledge, and
                confidence needed to raise safe, smart, and responsible digital
                citizens in a connected world.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-text/80">
                To build a world where every parent feels empowered to navigate
                the digital landscape and protect their children from online
                harm.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Expert Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-primary text-center mb-2">{member.role}</p>
                <p className="text-text/70 text-center">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Education First",
                description:
                  "We believe in empowering through knowledge and understanding.",
                icon: "📚",
              },
              {
                title: "Safety & Privacy",
                description:
                  "Protecting children's digital wellbeing is our top priority.",
                icon: "🛡️",
              },
              {
                title: "Family-Centered",
                description:
                  "Supporting families in building healthy digital habits together.",
                icon: "👨‍👩‍👧‍👦",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-text/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
