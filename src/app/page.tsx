import BgMain from "@/components/main/bgmain";
import Calendar from "@/components/calendar/calendar";
import Calendar2 from "@/components/calendar2";
export default function Home() {
  return (
    <main className="relative z-1 bg-hanyang-blue">
      <BgMain />
      <Calendar />
      <Calendar2/>
    </main>
  );
}
