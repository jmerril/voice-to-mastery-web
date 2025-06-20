
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-bold">Zyglio Explainer Video</DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-0">
          <div style={{padding:"56.25% 0 0 0", position:"relative"}}>
            <iframe 
              src="https://player.vimeo.com/video/1078127276?badge=0&autopause=0&player_id=0&app_id=58479&password=View25" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" 
              style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
              title="Zyglio_Logo6"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
