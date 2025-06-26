import React from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus } from 'lucide-react';

import LeftSidebar from '@/components/layout/LeftSidebar';
import MainHeader from '@/components/layout/MainHeader';
import PlayerFooter from '@/components/layout/PlayerFooter';
import PlaylistCard from '@/components/PlaylistCard';
import ArtistCard from '@/components/ArtistCard';

// Placeholder Data
const userPlaylists = [
  {
    playlistId: '1',
    coverUrl: 'https://i.scdn.co/image/ab67616d00001e02e8b066f70c20655c513a8a3a',
    title: "Doraemon's Workout Gadgets",
    description: 'High-energy tracks for a futuristic workout session.',
  },
  {
    playlistId: '2',
    coverUrl: 'https://i.scdn.co/image/ab67616d00001e026b3e3e3e3e3e3e3e3e3e3e3e',
    title: "Nobita's Chill Lo-fi",
    description: 'Relaxing beats perfect for an afternoon nap.',
  },
  {
    playlistId: '3',
    coverUrl: 'https://placehold.co/300x300/E8C8E5/FFFFFF/png?text=Shizuka',
    title: "Shizuka's Study Piano",
    description: 'Calm piano music to help you focus.',
  },
  {
    playlistId: '4',
    coverUrl: 'https://placehold.co/300x300/F28E2B/FFFFFF/png?text=Gian',
    title: "Gian's Rock Anthems",
    description: 'Loud, proud, and perfect for karaoke.',
  },
];

const followedArtists = [
  {
    name: 'Gen Hoshino',
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb4a75336e9b63205307b233a1',
  },
  {
    name: 'Kenshi Yonezu',
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5eb6e90295f50247658a5f865f8',
  },
  {
    name: 'YOASOBI',
    imageUrl: 'https://i.scdn.co/image/ab6761610000e5ebcb6d8393e8e7a783789b78ba',
  },
    {
    name: 'mao',
    imageUrl: 'https://i.scdn.co/image/ab67616d00001e02e8b066f70c20655c513a8a3a',
  },
];


const LibraryPage = () => {
  console.log('LibraryPage loaded');

  return (
    <div className="flex h-screen bg-background text-foreground">
      <LeftSidebar />
      <div className="flex-1 flex flex-col h-screen">
        <MainHeader />
        <ScrollArea className="flex-1">
          <main className="p-6 space-y-6 pb-24">
            <Tabs defaultValue="playlists" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="playlists">Playlists</TabsTrigger>
                <TabsTrigger value="liked">Liked Songs</TabsTrigger>
                <TabsTrigger value="artists">Artists</TabsTrigger>
              </TabsList>

              {/* Playlists Tab */}
              <TabsContent value="playlists" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Your Playlists</h2>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create Playlist
                  </Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                  {userPlaylists.map((playlist) => (
                    <PlaylistCard key={playlist.playlistId} {...playlist} />
                  ))}
                </div>
              </TabsContent>

              {/* Liked Songs Tab */}
              <TabsContent value="liked">
                 <h2 className="text-2xl font-bold mb-4">Liked Songs</h2>
                 <div className="text-center text-muted-foreground p-8 border-dashed border-2 rounded-lg">
                    <p>Songs you like will appear here.</p>
                    <p className="text-sm">Find more music to add to your collection!</p>
                 </div>
              </TabsContent>

              {/* Artists Tab */}
              <TabsContent value="artists">
                <h2 className="text-2xl font-bold mb-4">Followed Artists</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                   {followedArtists.map((artist) => (
                    <ArtistCard key={artist.name} {...artist} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </main>
        </ScrollArea>
      </div>
      <PlayerFooter />
    </div>
  );
};

export default LibraryPage;