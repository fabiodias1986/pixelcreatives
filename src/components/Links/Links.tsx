import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // Importando os ícones do react-icons
import Link from "next/link";
import Image from "next/image";


export default function Links() {
  return (
   
      <div className="bg-white w-screen min-h-screen md:w-auto md:h-auto rounded-lg shadow-xl max-w-6xl justify-center flex flex-col items-center px-8 py-8 ">
        <div className="w-[150px] h-[150px]  p-2 bg-white overflow-hidden rounded-full flex items-center justify-center mb-6">
          <Image src="/assets/logos/logo.png" alt="Logo Pixel Creatives" className="object-cover" width={"1000"} height={"1000"} />
        </div>
        
        <h1 className="text-main text-xl  font-semibold mb-1">pixelcreatives.pt</h1>
        <p className="text-main text-sm mb-6 text-center">
          Onde cada pixel conta uma história!
        </p>

        <div className="flex gap-6 mb-8 md:mb-12">
          <Link href="https://www.facebook.com/profile.php?id=61568119252052" target="_blank" className="text-main hover:text-secundary">
            <FaFacebookF className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link href="https://www.instagram.com/pixelcreatives.pt" target="_blank" className="text-main hover:text-secundary">
            <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
          <Link href="https://www.linkedin.com/company/pixel-creativespt/" target="_blank" className="text-main hover:text-secundary">
            <FaLinkedinIn className="w-5 h-5 sm:w-6 sm:h-6" />
          </Link>
        </div>

        <div className="w-full max-w-md space-y-4">
          <Button
            variant="outline"
            className=" w-full h-10 sm:h-12 text-base sm:text-lg bg-black hover:bg-white hover:text-black text-white hover:border-main transition-colors duration-200"
            asChild
            
          >
            <Link href="/" >Website</Link>
          </Button>
          
          <Button
            variant="outline"
            className="w-full h-10 sm:h-12 text-base sm:text-lg bg-black hover:bg-white hover:text-black text-white hover:border-main transition-colors duration-200"
            asChild
          >
            <Link href="/proposta">Solicitar Proposta</Link>
          </Button>
          <Button
            variant="outline"
            className="w-full h-10 sm:h-12 text-base sm:text-lg bg-black hover:bg-white hover:text-black text-white hover:border-main transition-colors duration-200"
            asChild
          >
            <Link href="https://wa.me/message/Z6DK62YFL3IKH1">Whatsapp</Link>
          </Button>
        </div>
       
      </div>
   
   
  );
}