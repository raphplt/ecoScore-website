import Image from "next/image";

export default function ShortCutButton(props: any) {
  return (
    <div className="w-20 h-20 rounded-[30%] bg-[#D9D9D9] hover:bg-[#BAB5B5] flex items-center justify-center mx-5 hover:cursor-pointer">
      <Image src={props.src} alt={props.alt} />
    </div>
  );
}
