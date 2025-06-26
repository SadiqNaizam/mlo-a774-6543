import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Play } from 'lucide-react';

interface PlaylistCardProps {
  playlistId: string;
  coverUrl: string;
  title: string;
  description: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlistId, coverUrl, title, description }) => {
  console.log('PlaylistCard loaded for:', title);

  return (
    // The entire card links to the playlist detail page.
    // NOTE: Based on App.tsx, the route is static. A more dynamic route like `/playlist/${playlistId}` would be typical.
    <Link to="/playlist-detail" className="group block" aria-label={`View playlist: ${title}`}>
      <Card className="w-full overflow-hidden transition-all duration-300 bg-neutral-800/50 hover:bg-neutral-700/80 border-none">
        <CardContent className="p-4 space-y-4">
          <div className="relative overflow-hidden rounded-md">
            <AspectRatio ratio={1 / 1}>
              <img
                src={coverUrl || 'https://placehold.co/300x300/1DB954/FFFFFF/png?text=Doraify'}
                alt={`Cover for ${title}`}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </AspectRatio>
            <div className="absolute bottom-2 right-2 flex items-center justify-center w-12 h-12 bg-green-500 rounded-full shadow-lg opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
              <Play className="text-black fill-black h-6 w-6" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white truncate">{title}</h3>
            <p className="text-sm text-neutral-400 line-clamp-2">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PlaylistCard;