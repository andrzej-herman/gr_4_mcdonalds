import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <div className="container">
        <Header />
      </div>
      <div className="bg-[url('/banner.jpg')] h-[300px] w-full bg-cover bg-center mt-2">
        test
      </div>
    </div>
  );
}
