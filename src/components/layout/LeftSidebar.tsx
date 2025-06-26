import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Home, Search, Library, Plus, Bell, ChevronLeft, ListMusic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface LeftSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isCollapsed, onToggle }) => {
  console.log('LeftSidebar loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      'flex items-center gap-4 py-2 rounded-md transition-colors text-sm font-medium',
      isActive
        ? 'bg-primary/10 text-primary'
        : 'text-muted-foreground hover:bg-muted hover:text-foreground',
      isCollapsed ? 'justify-center px-2' : 'px-4'
    );
  
  // Placeholder data for user's playlists
  const playlists = [
    { id: 1, name: "Doraemon's Workout Gadgets" },
    { id: 2, name: "Nobita's Chill Lo-fi" },
    { id: 3, name: "Shizuka's Study Piano" },
    { id: 4, name: "Gian's Rock Anthems" },
    { id: 5, name: "Suneo's Smooth Jazz" },
    { id: 6, 'name': 'Anywhere Door Travel Mix' },
    { id: 7, 'name': 'Time-Lapse Grooves' },
    { id: 8, 'name': 'Japanese 80s Pop' },
  ];

  return (
    <aside className={cn(
      'relative hidden md:flex flex-col border-r h-full bg-background transition-all duration-300 ease-in-out',
      isCollapsed ? 'w-20' : 'w-64'
    )}>
      <div className="absolute top-1/2 -right-[13px] z-10">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onToggle}
              size="icon"
              variant="outline"
              className="rounded-full h-7 w-7"
            >
              <ChevronLeft
                className={cn(
                  'h-4 w-4 transition-transform duration-300',
                  isCollapsed && 'rotate-180'
                )}
              />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{isCollapsed ? 'Expand' : 'Collapse'}</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className={cn('p-4', isCollapsed && 'px-2 flex justify-center')}>
        <Link to="/" className="flex items-center gap-2">
           <Bell className="h-6 w-6 text-primary flex-shrink-0" />
           <h1 className={cn('text-xl font-bold transition-opacity duration-200', isCollapsed && 'opacity-0 hidden')}>Doraify Tunes</h1>
        </Link>
      </div>
      
      <nav className="flex-grow px-2">
        <div className="space-y-1 mb-4">
          <NavLink to="/" className={navLinkClasses}><Home className="h-5 w-5 flex-shrink-0" /><span className={cn('transition-opacity duration-200', isCollapsed && 'opacity-0 hidden')}>Home</span></NavLink>
          <NavLink to="/search" className={navLinkClasses}><Search className="h-5 w-5 flex-shrink-0" /><span className={cn('transition-opacity duration-200', isCollapsed && 'opacity-0 hidden')}>Search</span></NavLink>
          <NavLink to="/library" className={navLinkClasses}><Library className="h-5 w-5 flex-shrink-0" /><span className={cn('transition-opacity duration-200', isCollapsed && 'opacity-0 hidden')}>Your Library</span></NavLink>
        </div>

        <Separator />

        <div className="mt-4 space-y-2">
            <Button variant="ghost" className={cn('w-full justify-start gap-4 px-4 text-muted-foreground hover:text-foreground', isCollapsed && 'justify-center')}>
                <Plus className="h-5 w-5 flex-shrink-0" />
                <span className={cn('text-sm font-medium transition-opacity duration-200', isCollapsed && 'opacity-0 hidden')}>Create Playlist</span>
            </Button>
        </div>

        <ScrollArea className="h-[calc(100vh-280px)] mt-4">
          <div className="space-y-1 pr-2">
            {playlists.map((playlist) => (
               <Tooltip key={playlist.id}>
                <TooltipTrigger asChild>
                   <Link
                    to="/playlist-detail" // All link to the same detail page as per App.tsx
                    className={cn('flex items-center gap-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-md', isCollapsed ? 'justify-center px-2' : 'px-4')}
                  >
                    <ListMusic className="h-5 w-5 flex-shrink-0" />
                    <span className={cn("truncate transition-opacity duration-200", isCollapsed && "opacity-0 hidden")}>{playlist.name}</span>
                  </Link>
                 </TooltipTrigger>
                 {isCollapsed && (
                    <TooltipContent side="right">
                        <p>{playlist.name}</p>
                    </TooltipContent>
                 )}
               </Tooltip>
            ))}
          </div>
        </ScrollArea>
      </nav>
    </aside>
  );
};

export default LeftSidebar;