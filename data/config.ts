// ============================================
// 📝 CONFIGURATION CENTRALE - Modifie ici tes infos !
// ============================================

export interface Link {
  title: string;
  url: string;
  icon?: string; // Emoji ou nom d'icône
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  title: string;
  bio?: string;
  avatar: string;
}

export interface Theme {
  background: string; // Classe Tailwind pour le fond
  cardBackground: string;
  cardHover: string;
  textPrimary: string;
  textSecondary: string;
  accent: string;
}

export interface Config {
  profile: Profile;
  links: Link[];
  socials: Social[];
  theme: Theme;
}

// ============================================
// 🎨 CONFIGURATION - Personnalise tout ici !
// ============================================

const config: Config = {
  // 👤 Ton profil
  profile: {
    name: "Riagoto",
    title: "Créateur de contenu",
    bio: "Passionné d'auto",
    avatar: "/avatar.jpg", // Place ton image dans /public/avatar.jpg
  },

  // 🔗 Tes liens principaux (ajoute autant que tu veux !)
  links: [
    {
      title: "Ma chaîne YouTube",
      url: "https://www.youtube.com/@Riagot0",
    },
    {
      title: "Mon TikTok",
      url: "https://www.tiktok.com/@riagot0",
    },
    {
      title: "Mon Instagram",
      url: "https://www.instagram.com/riag0to/",
    },
    {
      title: "Groupe Citroën C3 Crew",
      url: "https://t.me/citroenC3_crew",
    },
    {
      title: "Groupe Roulibre - Arrive bientôt",
      url: "#",
    },
  ],

  // 🌐 Icônes réseaux sociaux (footer)
  socials: [
    {
      platform: "YouTube",
      url: "https://www.youtube.com/@Riagot0",
      icon: "youtube",
    },
    {
      platform: "TikTok",
      url: "https://www.tiktok.com/@riagot0",
      icon: "tiktok",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/riag0to/",
      icon: "instagram",
    },
  ],

  // 🎨 Thème (personnalise les couleurs !)
  theme: {
    background: "bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900",
    cardBackground: "bg-white/10 backdrop-blur-sm",
    cardHover: "hover:bg-white/20 hover:scale-[1.02]",
    textPrimary: "text-white",
    textSecondary: "text-white/80",
    accent: "text-cyan-400",
  },
};

export default config;
