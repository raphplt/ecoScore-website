import Image from "next/image";
import Link from "next/link";

export default function HeaderMobile() {
  return (
    <div>
      <div className="flex sm:hidden items-center justify-between w-[90%] mx-auto pt-2">
        <Link href={"./"}>
          <Image
            src={require("../../public/assets/ecoscoreLogo.png")}
            alt="logo"
            width={35}
            height={35}
          />
        </Link>
        <Image
          src={require("../../public/assets/icons/menu-hamb.png")}
          alt="menu"
        />
      </div>
    </div>
  );
}
