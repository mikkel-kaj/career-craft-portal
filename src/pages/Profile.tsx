import Education from "@/components/Education";
import WorkExperience from "@/components/WorkExperience";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import CurrentRoles from "@/components/CurrentRoles";

const Profile = () => {
  return (
    <div className="min-h-screen bg-card text-white pt-20">
      <HeroSection />
      <div className="bg-card-lighter py-8">
        <CurrentRoles />
      </div>
      <Education />
      <WorkExperience />
      <SkillsSection />
    </div>
  );
};

export default Profile;
