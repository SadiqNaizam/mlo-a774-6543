import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface ArtistCardProps {
  /** The name of the artist. */
  name: string;
  /** The URL for the artist's image. */
  imageUrl: string;
  /** Optional additional class names for styling. */
  className?: string;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ name, imageUrl, className }) => {
  console.log('ArtistCard loaded for:', name);

  /**
   * Generates initials from a name for the Avatar Fallback.
   * @param name - The full name of the artist.
   * @returns A string of 1 or 2 initials.
   */
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <Link
      to="/artist" // Route from App.tsx
      className={cn(
        'group flex w-full max-w-xs flex-col items-center gap-3 rounded-md p-4 text-center transition-colors duration-200 hover:bg-muted',
        className
      )}
    >
      <Avatar className="h-32 w-32 shadow-md">
        <AvatarImage src={imageUrl} alt={`Image of ${name}`} className="object-cover" />
        <AvatarFallback>{getInitials(name)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="font-semibold truncate">{name}</p>
        <p className="text-sm text-muted-foreground">Artist</p>
      </div>
    </Link>
  );
};

export default ArtistCard;