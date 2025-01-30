import { RetroGrid } from "../ui/retro-grid";
import { TextAnimate } from "../ui/text-animate";

function Footer() {
  return (
    <footer className="h-24 relative w-full flex justify-center items-center bg-background">
      <TextAnimate animation="slideUp" by="word">
        {`© ${new Date().getFullYear()} Aulilkez. All rights reserved.`}
      </TextAnimate>
      <RetroGrid />
    </footer>
  );
}

export default Footer;
