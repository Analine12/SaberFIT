import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SF SABER FITNESS GYM | Coaching Sportif & Transformation Physique',
  description: 'Plateforme officielle de SF SABER FITNESS GYM par Coach Saber avec interface 3D vidéo interactive, programmes sur mesure, vidéos d’entraînement et suivi personnalisé.',
  openGraph: {
    title: 'SF SABER FITNESS GYM | Coaching Sportif & Transformation Physique',
    description: 'SF SABER FITNESS GYM - Forged by discipline. Programmes de musculation, perte de gras et transformation physique par Coach Saber.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SF SABER FITNESS GYM | Coaching Sportif & Transformation Physique',
    description: 'Transformez votre physique avec Coach Saber - SF SABER FITNESS GYM.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-[#0b0c10] text-[#f1f3f5] selection:bg-[#ff5500] selection:text-white font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

