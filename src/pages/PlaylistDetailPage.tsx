import React from 'react';
import { Play, Shuffle, Clock } from 'lucide-react';

// Layout Components
import LeftSidebar from '@/components/layout/LeftSidebar';
import MainHeader from '@/components/layout/MainHeader';
import PlayerFooter from '@/components/layout/PlayerFooter';

// Custom Components
import SongListItem from '@/components/SongListItem';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Placeholder data for the playlist
const playlistDetails = {
  name: "Doraemon's Workout Gadgets",
  description: 'High-energy tracks to power your workout with futuristic gadgets.',
  creator: 'Doraemon',
  coverArtUrl: 'https://i.pinimg.com/736x/2d/3a/2e/2d3a2e0e4f2a74c765a8a7f14b301f98.jpg',
};

const tracks = [
  {
    trackNumber: 1,
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e02e8b066f70c20655c513a8a3a',
    title: 'Yume wo Kanaete Doraemon',
    artist: 'mao',
    album: 'Doraemon Original Soundtrack',
    duration: '4:07',
  },
  {
    trackNumber: 2,
    imageUrl: 'https://i.ytimg.com/vi/bIZcyv3KLIY/maxresdefault.jpg',
    title: 'High-Speed Hopter',
    artist: 'Gadget Grooves',
    album: 'Future Funk',
    duration: '3:15',
  },
  {
    trackNumber: 3,
    imageUrl: 'https://i1.sndcdn.com/artworks-TzP7xnaE8PMM-0-t500x500.jpg',
    title: 'Anywhere Door Dash',
    artist: 'Teleporting Beats',
    album: 'Dimension Drill',
    duration: '2:55',
  },
  {
    trackNumber: 4,
    imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d4b0f0de4a408e6f1de0a701',
    title: 'Time Machine Tempo',
    artist: 'DJ Chronos',
    album: 'Past & Future',
    duration: '5:10',
  },
  {
    trackNumber: 5,
    imageUrl: 'https://m.media-amazon.com/images/I/71u-OPOy+7L._SS500_.jpg',
    title: 'Memory Bread Marathon',
    artist: 'The Brainwaves',
    album: 'Study Hard',
    duration: '3:45',
  },
];

const PlaylistDetailPage = () => {
  console.log('PlaylistDetailPage loaded');

  return (
    <div className="flex h-screen bg-background text-foreground">
      <LeftSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <MainHeader />
        <ScrollArea className="flex-1">
          <main>
            {/* Playlist Header */}
            <section className="p-8 flex items-end gap-6 bg-gradient-to-b from-blue-700 via-blue-800 to-background/50 text-white">
              <img
                src={playlistDetails.coverArtUrl}
                alt="Playlist Cover"
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-md shadow-2xl object-cover"
              />
              <div className="flex flex-col gap-3">
                <span className="text-sm font-bold">Playlist</span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter">
                  {playlistDetails.name}
                </h1>
                <p className="text-sm text-muted-foreground text-gray-300">
                  {playlistDetails.description}
                </p>
                <div className="flex items-center gap-2 mt-2 text-sm">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="https://github.com/doraemon.png" alt="@doraemon" />
                    <AvatarFallback>DR</AvatarFallback>
                  </Avatar>
                  <span className="font-bold">{playlistDetails.creator}</span>
                  <span>• {tracks.length} songs</span>
                </div>
              </div>
            </section>

            {/* Actions and Song List */}
            <div className="p-8">
              {/* Action Bar */}
              <div className="flex items-center gap-4 mb-6">
                <Button size="lg" className="rounded-full bg-blue-500 hover:bg-blue-600 h-14 w-14 p-0">
                  <Play className="h-7 w-7 fill-current text-black" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Shuffle className="h-6 w-6 text-muted-foreground" />
                </Button>
              </div>

              {/* Song List Header */}
              <div className="grid grid-cols-[auto_1fr_1fr_auto] md:grid-cols-[32px_1fr_1fr_100px_auto] items-center gap-4 px-2 py-1 text-muted-foreground text-sm font-medium border-b border-border">
                <div className="text-center hidden md:block">#</div>
                <div>Title</div>
                <div className="hidden md:block">Album</div>
                <div className="hidden md:block text-right"><Clock className="h-4 w-4 inline-block" /></div>
                <div className="w-8"></div> {/* Placeholder for menu hover */}
              </div>
              <Separator className="mb-4" />

              {/* Songs */}
              <div className="space-y-1">
                {tracks.map((track) => (
                  <SongListItem
                    key={track.trackNumber}
                    trackNumber={track.trackNumber}
                    imageUrl={track.imageUrl}
                    title={track.title}
                    artist={track.artist}
                    album={track.album}
                    duration={track.duration}
                  />
                ))}
              </div>
            </div>
          </main>
        </ScrollArea>
      </div>
      <PlayerFooter />
    </div>
  );
};

export default PlaylistDetailPage;