import Body from "@/components/Body";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="flex flex-col items-center justify-center space-y-5">
          <Image
            src={"/assets/warning.png"}
            alt="Logo"
            width={150}
            height={150}
            quality={40}
            loading="lazy"
            className="text-center text-white"
          />
          <p className="text-center text-xl font-normal">
            Es necesario renovar la suscripción
          </p>
        </div>
      </main>
      {/* <Header />
      <main>
        <Body />
      </main>
      <Footer /> */}
    </>
  );
}
