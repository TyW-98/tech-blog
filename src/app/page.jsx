import Image from "next/image";
import Carousel from "@/components/carousel/Carousel";
import TopReads from "@/components/TopReads/TopReads";

export default function Home() {
  return (
    <main>
      <section>
        <Carousel />
      </section>
      <section>
        <TopReads />
      </section>
    </main>
  );
}
