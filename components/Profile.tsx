import Image from "next/image";
import config from "@/data/config";

export default function Profile() {
  const { profile, theme } = config;

  return (
    <div className="flex flex-col items-center text-center mb-8">
      {/* Avatar */}
      <div className="relative w-28 h-28 mb-4">
        <Image
          src={profile.avatar}
          alt={profile.name}
          fill
          className="rounded-full object-cover border-4 border-white/30 shadow-xl"
          priority
        />
      </div>

      {/* Nom */}
      <h1 className={`text-2xl font-bold ${theme.textPrimary} mb-1`}>
        {profile.name}
      </h1>

      {/* Titre */}
      <p className={`text-lg ${theme.accent} font-medium mb-2`}>
        {profile.title}
      </p>

      {/* Bio */}
      {profile.bio && (
        <p className={`${theme.textSecondary} max-w-xs text-sm`}>
          {profile.bio}
        </p>
      )}
    </div>
  );
}
