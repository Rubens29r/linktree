import Profile from "@/components/Profile";
import LinkCard from "@/components/LinkCard";
import Socials from "@/components/Socials";
import config from "@/data/config";

export default function Home() {
  const { links, theme } = config;

  return (
    <main
      className={`
        min-h-screen
        ${theme.background}
        py-12 px-4
      `}
    >
      <div className="max-w-md mx-auto">
        {/* Profil (Avatar + Bio) */}
        <Profile />

        {/* Liste des liens */}
        <div className="flex flex-col gap-4">
          {links.map((link, index) => (
            <LinkCard key={index} link={link} />
          ))}
        </div>

        {/* Icônes réseaux sociaux */}
        <Socials />

        {/* Footer */}
        <p className={`text-center mt-8 text-xs ${theme.textSecondary}`}>
          Made with ❤️
        </p>
      </div>
    </main>
  );
}
