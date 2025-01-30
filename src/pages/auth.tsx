import MainLayout from "@/components/layouts/main-layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginBox from "@/features/auth/components/login";
import OAuthBox from "@/features/auth/components/oauth";
import RegisterBox from "@/features/auth/components/register";
import { Plus } from "lucide-react";

function AuthPage() {
  return (
    <MainLayout classNameContent="flex relative justify-center items-center h-dvh dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="absolute h-lvh pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Card className="w-full max-w-md z-50">
        <Tabs defaultValue="Register" className="w-full">
          <CardHeader>
            <TabsList>
              <TabsTrigger value="Register" className="basis-1/2">
                Register
              </TabsTrigger>
              <TabsTrigger value="Login" className="basis-1/2">
                Login
              </TabsTrigger>
            </TabsList>
          </CardHeader>
          <CardContent>
            <Card className="rounded-md p-3 pb-6 relative">
              <div>
                <Plus className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                <Plus className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                <Plus className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                <Plus className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
              </div>
              <TabsContent value="Register">
                <RegisterBox />
              </TabsContent>
              <TabsContent value="Login">
                <LoginBox />
              </TabsContent>
            </Card>
          </CardContent>

          <div className="relative mx-2.5 flex justify-center items-center">
            <Separator />
            <Badge variant="outline" className="absolute bg-secondary">
              Or continue with
            </Badge>
          </div>
          <OAuthBox />
        </Tabs>
      </Card>
    </MainLayout>
  );
}

export default AuthPage;
