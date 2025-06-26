import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

// Layout Components
import LeftSidebar from '@/components/layout/LeftSidebar';
import MainHeader from '@/components/layout/MainHeader';
import PlayerFooter from '@/components/layout/PlayerFooter';

// Custom Components
import SongListItem from '@/components/SongListItem';
import PlaylistCard from '@/components/PlaylistCard';
import ArtistCard from '@/components/ArtistCard';

// Shadcn/ui Components
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

// Placeholder Data
const placeholderSongs = [
  { id: 1, trackNumber: 1, imageUrl: 'https://i.scdn.co/image/ab67616d00001e02e8b066f70c20655c513a8a3a', title: "Yume wo Kanaete Doraemon", artist: "mao", album: "Doraemon Best", duration: "4:07" },
  { id: 2, trackNumber: 2, imageUrl: 'https://i.ytimg.com/vi/a_s6k6y5i2Y/maxresdefault.jpg', title: "Anywhere Door Groove", artist: "DJ Nobita", album: "Future Gadgets", duration: "3:15" },
  { id: 3, trackNumber: 3, imageUrl: 'https://i1.sndcdn.com/artworks-000155494957-a3v1r5-t500x500.jpg', title: "Time Kerchief Twist", artist: "The Doramis", album: "22nd Century Pop", duration: "2:55" },
  { id: 4, trackNumber: 4, imageUrl: 'https://i.scdn.co/image/ab67616d0000b273d4b0f9f3c1d9b3b0d1e0a2e4', title: "Gian's Karaoke Anthem", artist: "Takeshi Goda", album: "Live at the Playground", duration: "1:30" },
];

const placeholderArtists = [
  { id: 1, name: "mao", imageUrl: "https://via.placeholder.com/150/007BFF/FFFFFF?text=Mao" },
  { id: 2, name: "DJ Nobita", imageUrl: "https://via.placeholder.com/150/FFC107/FFFFFF?text=Nobita" },
  { id: 3, name: "The Doramis", imageUrl: "https://via.placeholder.com/150/28A745/FFFFFF?text=TD" },
  { id: 4, name: "Shizuka's Strings", imageUrl: "https://via.placeholder.com/150/DC3545/FFFFFF?text=Shizuka" },
];

const placeholderPlaylists = [
  { id: 1, playlistId: "pl1", coverUrl: "https://placehold.co/300x300/e83e8c/ffffff/png?text=Study+Beats", title: "Shizuka's Study Jams", description: "Violin and piano for deep focus." },
  { id: 2, playlistId: "pl2", coverUrl: "https://placehold.co/300x300/fd7e14/ffffff/png?text=Rock+On", title: "Gian's Concert Hits", description: "The loudest and proudest rock anthems." },
  { id: 3, playlistId: "pl3", coverUrl: "https://placehold.co/300x300/17a2b8/ffffff/png?text=Travel+Mix", title: "Anywhere Door Travel Mix", description: "Songs for your next adventure." },
];

const placeholderAlbums = [
    { id: 1, playlistId: "al1", coverUrl: 'https://i.scdn.co/image/ab67616d00001e02e8b066f70c20655c513a8a3a', title: "Doraemon Best", description: "The official soundtrack hits." },
    { id: 2, playlistId: "al2", coverUrl: 'https://i.ytimg.com/vi/a_s6k6y5i2Y/maxresdefault.jpg', title: "Future Gadgets", description: "An electronic journey." },
];


const SearchPage = () => {
  console.log('SearchPage loaded');
  const [searchValue, setSearchValue] = useState('');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-background text-foreground">
      <LeftSidebar isCollapsed={isSidebarCollapsed} onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />
      <div className="flex flex-1 flex-col">
        <MainHeader />
        <ScrollArea className="flex-1">
          <main className="p-6 pb-24 space-y-8">
            {/* Search Input */}
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="What do you want to listen to?"
                className="w-full md:w-80 pl-12 h-12 text-lg rounded-full"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>

            {/* Search Results */}
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="songs">Songs</TabsTrigger>
                <TabsTrigger value="artists">Artists</TabsTrigger>
                <TabsTrigger value="albums">Albums</TabsTrigger>
                <TabsTrigger value="playlists">Playlists</TabsTrigger>
              </TabsList>
              
              <div className="mt-6">
                <TabsContent value="all" className="space-y-6">
                   <div>
                        <h2 className="text-2xl font-bold">Top Result</h2>
                        <div className="mt-4">
                            <ArtistCard name="mao" imageUrl="https://via.placeholder.com/150/007BFF/FFFFFF?text=Mao" className="max-w-xs items-start text-left p-4"/>
                        </div>
                   </div>
                   <Separator/>
                   <div>
                        <h2 className="text-2xl font-bold mb-4">Songs</h2>
                        {placeholderSongs.slice(0, 2).map((song) => (
                            <SongListItem key={song.id} {...song} />
                        ))}
                   </div>
                </TabsContent>
                
                <TabsContent value="songs">
                   <div className="flex flex-col gap-1">
                    {placeholderSongs.map((song) => (
                        <SongListItem key={song.id} {...song} />
                    ))}
                   </div>
                </TabsContent>

                <TabsContent value="artists">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {placeholderArtists.map((artist) => (
                      <ArtistCard key={artist.id} {...artist} />
                    ))}\
                  </div>
                </TabsContent>
                
                <TabsContent value="albums">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {placeholderAlbums.map((album) => (
                      <PlaylistCard key={album.id} {...album} />
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="playlists">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {placeholderPlaylists.map((playlist) => (
                      <PlaylistCard key={playlist.id} {...playlist} />
                    ))}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </main>
        </ScrollArea>
      </div>
      <PlayerFooter />
    </div>
  );
};

export default SearchPage;