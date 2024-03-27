import Navbar from "@/components/navbar";
import ToTopBtn from "@/components/to-top-btn";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <ToTopBtn />
      {children}
    </>
  );
}
