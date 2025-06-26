import React from 'react';
import { MoreHorizontal, PlusCircle } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SongListItemProps {
  trackNumber: number;
  imageUrl: string;
  title: string;
  artist: string;
  album: string;
  duration: string; // e.g., "3:45"
}

const SongListItem: React.FC<SongListItemProps> = ({
  trackNumber,
  imageUrl,
  title,
  artist,
  album,
  duration,
}) => {
  console.log('SongListItem loaded for:', title);

  const handleAddToPlaylist = () => {
    toast.success(`"${title}" has been added to a playlist.`, {
      description: 'You can view it in your library.',
      action: {
        label: 'Undo',
        onClick: () => console.log('Undo add to playlist'),
      },
    });
  };

  return (
    <div
      className="grid grid-cols-[auto_1fr_1fr_auto] md:grid-cols-[32px_1fr_1fr_100px_auto] items-center gap-4 p-2 rounded-lg hover:bg-muted transition-colors group"
      role="row"
    >
      {/* Track Number */}
      <div className="text-center text-muted-foreground hidden md:block" role="gridcell">
        {trackNumber}
      </div>

      {/* Title and Artist */}
      <div className="flex items-center gap-4" role="gridcell">
        <img
          src={imageUrl || 'https://via.placeholder.com/40'}
          alt={album}
          className="w-10 h-10 rounded-md object-cover"
        />
        <div className="flex flex-col">
          <p className="font-semibold text-primary truncate">{title}</p>
          <p className="text-sm text-muted-foreground truncate">{artist}</p>
        </div>
      </div>

      {/* Album */}
      <div className="hidden md:block text-muted-foreground truncate" role="gridcell">
        {album}
      </div>

      {/* Duration */}
      <div className="hidden md:block text-muted-foreground text-right" role="gridcell">
        {duration}
      </div>
      
      {/* Context Menu */}
      <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity" role="gridcell">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-5 w-5" />
              <span className="sr-only">More options for {title}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleAddToPlaylist}>
              <PlusCircle className="mr-2 h-4 w-4" />
              <span>Add to Playlist</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default SongListItem;