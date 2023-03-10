import Image from "next/image";

export default function ShortCutButton(props: any) {
  return (
    <div className="w-36 p-36 rounded-[30%] bg-slate-300">
      <Image src={props.src} alt={props.alt} />
    </div>
  );
}
