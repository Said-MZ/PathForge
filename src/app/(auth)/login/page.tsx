import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="grid place-items-center h-screen w-screen">
      <Button variant="default" className="absolute top-4 left-4">
        <Link
          href="/"
          className="flex justify-center items-center gap-1 hover:gap-2 transition-all"
        >
          <IoIosArrowBack className="w-5 h-5" />
          <span>الصفحة الرئيسية</span>
        </Link>
      </Button>
      <Tabs defaultValue="login" className="w-full mx-auto max-w-96">
        <TabsList className="w-full">
          <TabsTrigger value="login" className="w-full">
            إنشاء حساب جديد
          </TabsTrigger>
          <TabsTrigger value="signup" className="w-full">
            تسجيل الدخول
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          Make changes to your login here.
        </TabsContent>
        <TabsContent value="signup">Change your signup here.</TabsContent>
      </Tabs>
    </main>
  );
};

export default LoginPage;
