import React, { useState } from 'react';
import { Play, CheckCircle } from 'lucide-react';

// Layout Components
import LeftSidebar from '@/components/layout/LeftSidebar';
import MainHeader from '@/components/layout/MainHeader';
import PlayerFooter from '@/components/layout/PlayerFooter';
import SongListItem from '@/components/SongListItem';

// Shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// --- Placeholder Data ---
const artist = {
  name: 'Official HIGE DANdism',
  avatarUrl: 'https://i.scdn.co/image/ab6761610000e5eb981a82a57827e69a083626e2',
  bannerUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop',
  monthlyListeners: '5,123,456',
};

const popularSongs = [
  {
    trackNumber: 1,
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d250933f0b22a0732387e350',
    title: 'Pretender',
    artist: artist.name,
    album: 'Traveler',
    duration: '5:26',
  },
  {
    trackNumber: 2,
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2731d75d314849a9a0859598289',
    title: 'Cry Baby',
    artist: artist.name,
    album: 'Editorial',
    duration: '4:00',
  },
  {
    trackNumber: 3,
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273a55a714731b83896459d8805',
    title: 'Mixed Nuts',
    artist: artist.name,
    album: 'Mixed Nuts EP',
    duration: '3:33',
  },
  {
    trackNumber: 4,
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d250933f0b22a0732387e350',
    title: 'I LOVE...',
    artist: artist.name,
    album: 'Traveler',
    duration: '4:42',
  },
  {
    trackNumber: 5,
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2731d75d314849a9a0859598289',
    title: 'Universe',
    artist: artist.name,
    album: 'Editorial',
    duration: '4:46',
  },
];

const albums = [
  {
    title: 'Editorial',
    year: '2021',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b2731d75d314849a9a0859598289',
  },
  {
    title: 'Traveler',
    year: '2019',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d250933f0b22a0732387e350',
  },
  {
    title: 'What\\'s Going On?',
    year: '2020',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b27341851217e91d84b23269b2d8',
  },
  {
    title: 'Escapade',
    year: '2018',
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b27329929235ef9cee1004a44b7b',
  },
];

const singles = [
    { title: 'SOULSOUP', year: '2023', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273ed48e6583d410b0f209581c8' },
    { title: 'TATTOO', year: '2023', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273b75c027f915722f481282236' },
    { title: 'Subtitle', year: '2022', imageUrl: 'https://i.scdn.co/image/ab67616d0000b27383a8fef7a2a5e2f7514a6828' },
    { title: 'Anarchy', year: '2022', imageUrl: 'https://i.scdn.co/image/ab67616d0000b273832c3f58694a5c7a40cde5d3' },
];


const ArtistPage = () => {
  console.log('ArtistPage loaded');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      <LeftSidebar isCollapsed={isSidebarCollapsed} onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
      <div className="flex-1 flex flex-col">
        <MainHeader />
        <main className="flex-1 overflow-hidden">
          <ScrollArea className="h-[calc(100vh-4rem-6rem)]"> {/* Header: h-16 (4rem), Footer: h-24 (6rem) */}
            {/* Artist Header Section */}
            <section
              className="relative h-80 flex items-end p-8 text-white"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${artist.bannerUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="relative flex items-end gap-6">
                <Avatar className="w-48 h-48 border-4 border-background shadow-lg">
                  <AvatarImage src={artist.avatarUrl} alt={artist.name} />
                  <AvatarFallback>{artist.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-blue-400 fill-current" />
                    <span className="text-sm font-semibold">Verified Artist</span>
                  </div>
                  <h1 className="text-7xl font-extrabold tracking-tighter">{artist.name}</h1>
                  <p className="text-lg font-medium">{artist.monthlyListeners} monthly listeners</p>
                </div>
              </div>
            </section>

            {/* Content Section */}
            <div className="p-8 bg-background">
              <div className="flex items-center gap-4 mb-8">
                <Button size="lg" className="rounded-full bg-blue-500 hover:bg-blue-600 w-20 h-20 p-0">
                  <Play className="h-10 w-10 fill-current" />
                </Button>
                <Button variant="outline" size="lg" className="text-base font-bold">Follow</Button>
              </div>

              {/* Popular Songs */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Popular</h2>
                <div className="flex flex-col">
                  {popularSongs.map((song) => (
                    <SongListItem key={song.title} {...song} />
                  ))}\
                </div>
              </section>

              {/* Albums */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Albums</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {albums.map((album) => (
                    <Card key={album.title} className="bg-muted/40 hover:bg-muted transition-colors border-0 group">
                      <CardContent className="p-4 flex flex-col gap-4">
                        <img src={album.imageUrl} alt={album.title} className="rounded-md aspect-square object-cover shadow-lg" />
                        <div className="flex flex-col">
                          <p className="font-semibold truncate">{album.title}</p>
                          <p className="text-sm text-muted-foreground">{album.year}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}\
                </div>
              </section>

              {/* Singles & EPs */}
              <section>
                 <h2 className="text-2xl font-bold mb-4">Singles & EPs</h2>
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                  {singles.map((single) => (
                    <Card key={single.title} className="bg-muted/40 hover:bg-muted transition-colors border-0 group">
                      <CardContent className="p-4 flex flex-col gap-4">
                        <img src={single.imageUrl} alt={single.title} className="rounded-md aspect-square object-cover shadow-lg" />
                        <div className="flex flex-col">
                          <p className="font-semibold truncate">{single.title}</p>
                          <p className="text-sm text-muted-foreground">{single.year}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}\
                </div>
              </section>

            </div>
          </ScrollArea>
        </main>
      </div>
      <PlayerFooter />
    </div>
  );
};

export default ArtistPage;