import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Search, Library, Plus, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-4 px-4 py-2 rounded-md transition-colors text-sm font-medium ${
      isActive
        ? 'bg-blue-100 text-blue-700'
        : 'text-muted-foreground hover:bg-gray-100 hover:text-foreground'
    }`;
  
  // Placeholder data for user's playlists
  const playlists = [
    { id: 1, name: "Doraemon's Workout Gadgets" },
    { id: 2, name: 'Nobita\'s Chill Lo-fi' },
    { id: 3, name: 'Shizuka\'s Study Piano' },
    { id: 4, name: 'Gian\'s Rock Anthems' },
    { id: 5, name: 'Suneo\'s Smooth Jazz' },
    { id: 6, 'name': 'Anywhere Door Travel Mix' },
    { id: 7, 'name': 'Time-Lapse Grooves' },
    { id: 8, 'name': 'Japanese 80s Pop' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-50 border-r h-full">
      <div className="p-4">
        <Link to="/" className="flex items-center gap-2">
           <Bell className="h-6 w-6 text-blue-500" />
           <h1 className="text-xl font-bold">Doraify Tunes</h1>
        </Link>
      </div>
      
      <nav className="flex-grow px-2">
        <div className="space-y-1 mb-4">
          <NavLink to="/" className={navLinkClasses}>
            <Home className="h-5 w-5" />
            Home
          </NavLink>
          <NavLink to="/search" className={navLinkClasses}>
            <Search className="h-5 w-5" />
            Search
          </NavLink>
          <NavLink to="/library" className={navLinkClasses}>
            <Library className="h-5 w-5" />
            Your Library
          </NavLink>
        </div>

        <Separator />

        <div className="mt-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-4 px-4 text-muted-foreground hover:text-foreground">
                <Plus className="h-5 w-5" />
                <span className="text-sm font-medium">Create Playlist</span>
            </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-280px)] mt-4">
          <div className="space-y-1 pr-4">
            {playlists.map((playlist) => (
              <Link
                key={playlist.id}
                to="/playlist-detail" // All link to the same detail page as per App.tsx
                className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md truncate"
              >
                {playlist.name}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </nav>
    </aside>
  );
};

export default LeftSidebar;