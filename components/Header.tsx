import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-6 gap-44">
      <Image src="/mc-logo.png" alt="McDonaldsLogo" width={50} height={50} />
      <div className="flex items-center justify-start w-[40%]">
        <Input
          placeholder="Znajdź coś dobrego ..."
          className="pl-6 border
      border-yellow-500
      rounded-bl-full rounded-tl-full
      "
        />
        <div
          className="flex items-center justify-center bg-yellow-500 p-2.5 w-20 rounded-tr-full rounded-br-full
          hover:bg-yellow-400 cursor-pointer"
        >
          <Search className="h-5 w-5 text-yellow-800" />
        </div>
      </div>

      <Button
        className="text-sm bg-yellow-500 text-black
        font-medium tracking-tight px-4
        hover:bg-yellow-400 transition py-4 rounded-full"
      >
        Zaloguj się
      </Button>
    </div>
  );
}
