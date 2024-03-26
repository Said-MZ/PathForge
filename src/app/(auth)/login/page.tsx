import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="grid place-items-center h-screen w-screen">
      <Button variant="default" className="absolute top-4 left-4">
        <Link href="/">Back</Link>
      </Button>
      <Tabs defaultValue="account" className="w-full mx-auto max-w-96">
        <TabsList className="w-full">
          <TabsTrigger value="account" className="w-full">
            Sign in
          </TabsTrigger>
          <TabsTrigger value="password" className="w-full">
            Sign up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </main>
  );
};

export default LoginPage;
