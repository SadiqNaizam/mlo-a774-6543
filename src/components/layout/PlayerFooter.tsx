import React, { useState } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Heart,
  Volume2,
  ListMusic,
  MonitorSpeaker
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const PlayerFooter: React.FC = () => {
  console.log('PlayerFooter loaded');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-20 h-24 bg-background border-t">
      <div className="container mx-auto h-full grid grid-cols-3 items-center px-4">
        {/* Left: Song Info */}
        <div className="flex items-center gap-3">
          <Avatar className="h-14 w-14 rounded-md">
            <AvatarImage src="https://i.scdn.co/image/ab67616d00001e02e8b066f70c20655c513a8a3a" alt="Album Art" />
            <AvatarFallback>YT</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm truncate">Yume wo Kanaete Doraemon</p>
            <p className="text-xs text-muted-foreground">mao</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-2">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Center: Player Controls */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Shuffle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              className="h-10 w-10 bg-primary text-primary-foreground rounded-full hover:bg-primary/90"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 fill-current" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Repeat className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-xs text-muted-foreground">1:23</span>
            <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
            <span className="text-xs text-muted-foreground">4:07</span>
          </div>
        </div>

        {/* Right: Volume & Other Controls */}
        <div className="flex items-center justify-end gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <ListMusic className="w-4 h-4"/>
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <MonitorSpeaker className="w-4 h-4"/>
            </Button>
            <div className="flex items-center gap-2 w-32">
                <Volume2 className="h-4 w-4 text-muted-foreground"/>
                <Slider defaultValue={[80]} max={100} step={1} />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default PlayerFooter;