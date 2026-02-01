import { Link } from "@/data/config";
import config from "@/data/config";

interface LinkCardProps {
  link: Link;
}

export default function LinkCard({ link }: LinkCardProps) {
  const { theme } = config;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        block w-full p-4 rounded-xl
        ${theme.cardBackground}
        ${theme.cardHover}
        ${theme.textPrimary}
        transition-all duration-300 ease-out
        border border-white/10
        shadow-lg
        group
      `}
    >
      <div className="flex items-center justify-center gap-3">
        {/* Icône optionnelle */}
        {link.icon && (
          <span className="text-xl group-hover:scale-110 transition-transform">
            {link.icon}
          </span>
        )}

        {/* Titre du lien */}
        <span className="font-medium text-center">
          {link.title}
        </span>
      </div>
    </a>
  );
}
