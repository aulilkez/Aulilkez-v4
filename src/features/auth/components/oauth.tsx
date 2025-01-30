import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { IconBrandGoogle, IconBrandFacebook } from "@tabler/icons-react";

function OAuthBox() {
  return (
    <CardFooter className="gap-3 mt-[1.50rem] py">
      <Button variant="secondary" className="basis-1/2 h-10">
        <IconBrandGoogle />
      </Button>
      <Button variant="secondary" className="basis-1/2 h-10">
        <IconBrandFacebook />
      </Button>
    </CardFooter>
  );
}

export default OAuthBox;
