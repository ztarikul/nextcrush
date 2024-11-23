import Button from "@/app/components/Button";
import Image from "next/image";
import bhaibrothers from "@/public/images/next.jpg";
export default function Mission() {
  return (
    <main className="mt-10">
      <div>lorem ipsum lorem ipsum</div>
      <div className="w-[400px]">
        <Image placeholder="blur" src={bhaibrothers} alt="Bhai Brothers" />
      </div>
      <Button />
    </main>
  );
}
