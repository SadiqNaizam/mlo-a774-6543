import React from 'react';

// Layout Components
import MainHeader from '@/components/layout/MainHeader';
import LeftSidebar from '@/components/layout/LeftSidebar';
import PlayerFooter from '@/components/layout/PlayerFooter';

// UI Components
import PlaylistCard from '@/components/PlaylistCard';
import ArtistCard from '@/components/ArtistCard';
import { ScrollArea } from '@/components/ui/scroll-area';

// Placeholder data for featured playlists
const featuredPlaylists = [
  {
    playlistId: '1',
    coverUrl: 'https://i.scdn.co/image/ab67706c0000da846ca83f6f96a5658f4a2af163',
    title: 'Anywhere Door Adventures',
    description: 'The perfect soundtrack for traveling through space and time.',
  },
  {
    playlistId: '2',
    coverUrl: 'https://i.scdn.co/image/ab67706c0000da841c78494c2514397e596736a3',
    title: 'Gian\'s Concert Hits',
    description: 'The one and only superstar. Earplugs recommended.',
  },
  {
    playlistId: '3',
    coverUrl: 'https://i.scdn.co/image/ab67706f000000028833955e691882367c33e680',
    title: 'Nobita\'s Naptime Lo-fi',
    description: 'Chill beats for studying, sleeping, or avoiding homework.',
  },
  {
    playlistId: '4',
    coverUrl: 'https://i.scdn.co/image/ab67706f0000000203a35a82e9cfb594b293375f',
    title: 'Shizuka\'s Sweet Violin',
    description: 'Elegant and beautiful melodies for a peaceful afternoon.',
  },
   {
    playlistId: '5',
    coverUrl: 'https://i.scdn.co/image/ab67706f00000002bdeb1c36c1acb1c1a3a30373',
    title: 'Suneo\'s Rich & Famous Mix',
    description: 'Only the most exclusive and expensive-sounding tracks.',
  },
];

// Placeholder data for popular artists (characters as artists)
const popularArtists = [
  {
    name: 'Gian',
    imageUrl: 'https://pbs.twimg.com/media/F2_1x-Ia8AA260E.jpg',
  },
  {
    name: 'Shizuka Minamoto',
    imageUrl: 'https://pbs.twimg.com/media/F3sS7LAbMAA3oF8.jpg',
  },
  {
    name: 'Doraemon',
    imageUrl: 'https://i.pinimg.com/736x/df/d2/84/dfd2847be3121175f3a0364d1d254f3b.jpg',
  },
  {
    name: 'Suneo Honekawa',
    imageUrl: 'https://pbs.twimg.com/media/F3uYv7gaMAAV-P-.jpg',
  },
];


const HomePage: React.FC = () => {
  console.log('HomePage loaded');

  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-background text-foreground">
      <LeftSidebar />
      <div className="flex flex-1 flex-col">
        <MainHeader />
        {/* Main content area with independent scrolling */}
        {/* The height is calculated to fit between the header (h-16) and footer (h-24) */}
        <ScrollArea className="flex-1 h-[calc(100vh-theme(spacing.16)-theme(spacing.24))]">
          <main className="p-6 space-y-8">
            <h1 className="text-3xl font-bold">Good Afternoon</h1>
            
            {/* Section for Featured Playlists */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Featured Playlists</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {featuredPlaylists.map((playlist) => (
                  <PlaylistCard
                    key={playlist.playlistId}
                    playlistId={playlist.playlistId}
                    coverUrl={playlist.coverUrl}
                    title={playlist.title}
                    description={playlist.description}
                  />
                ))}
              </div>
            </section>

            {/* Section for Popular Artists */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Popular Artists</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                 {popularArtists.map((artist) => (
                  <ArtistCard
                    key={artist.name}
                    name={artist.name}
                    imageUrl={artist.imageUrl}
                  />
                ))}
              </div>
            </section>
          </main>
        </ScrollArea>
      </div>
      <PlayerFooter />
    </div>
  );
};

export default HomePage;