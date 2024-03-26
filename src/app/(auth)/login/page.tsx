import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginPage = () => {
  return (
    <main className="grid place-items-center h-screen w-screen">
      <Button variant="secondary" className="absolute top-4 left-4">
        <Link
          href="/"
          className="flex justify-center items-center gap-1 hover:gap-2 transition-all"
        >
          <IoIosArrowBack className="w-5 h-5" />
          <span>الصفحة الرئيسية</span>
        </Link>
      </Button>
      <Tabs defaultValue="login" className="w-full mx-auto max-w-96 min-h-96">
        <TabsList className="w-full">
          <TabsTrigger value="login" className="w-full">
            إنشاء حساب جديد
          </TabsTrigger>
          <TabsTrigger value="signup" className="w-full">
            تسجيل الدخول
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <form className="flex flex-col gap-4 text-right mt-6">
            <Label htmlFor="name">الاسم</Label>
            <Input
              type="text"
              id="name"
              placeholder="الاسم الكامل"
              required
              className="text-right"
            />
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input
              type="email"
              id="email"
              placeholder="ahmad@example.com"
              required
            />
            <Label htmlFor="password">كلمة المرور</Label>
            <Input
              type="password"
              id="password"
              placeholder="********"
              required
            />
            <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
            <Input
              type="password"
              id="confirm-password"
              placeholder="********"
              required
            />
            <Button variant="default" className="w-full">
              إنشاء حساب جديد
            </Button>
          </form>
        </TabsContent>
        <TabsContent value="signup">
          <form action="" className="flex flex-col gap-4 text-right mt-6">
            <Label htmlFor="email">البريد الإلكتروني</Label>
            <Input type="email" id="email" placeholder="ahmad@example.com" />
            <Label htmlFor="password">كلمة المرور</Label>
            <Input type="password" id="password" placeholder="********" />
            <Button variant="default" className="w-full">
              تسجيل الدخول
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default LoginPage;
