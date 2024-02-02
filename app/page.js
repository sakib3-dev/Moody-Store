// icon
import { FaTruck, FaHeadset } from "react-icons/fa";
import { BsArrowLeftSquare } from "react-icons/bs";

// component
import Container from "@/components/Container";
import Flex from "@/components/Flex";
import Image from "next/image";
import Link from "next/link";

// banner
import BannerOne from "@/app/assets/banner-one.jpg";
import BannerTwo from "@/app/assets/banner-two.jpg";
import BannerThree from "@/app/assets/banner-three.jpg";

export default function Home() {
  return (
    <section>
      <main>
        <div className="px-4">
          <Container>
            {/* announcement */}
            <Flex className="justify-between md:px-28">
              <Flex className="items-center gap-2">
                <FaTruck className="md:text-2xl text-brandTwo text-md" />{" "}
                <span className="md:text-sm text-[8px] text-brandOne">
                  FREE SHIPPING
                </span>
              </Flex>
              <Flex className="items-center gap-2">
                <BsArrowLeftSquare className="md:text-2xl text-brandTwo text-md" />{" "}
                <span className="md:text-sm text-[8px] text-brandOne">
                  100% MONEY BACK
                </span>
              </Flex>
              <Flex className="items-center gap-2">
                <FaHeadset className="md:text-2xl text-brandTwo text-md" />{" "}
                <span className="md:text-sm text-[8px] text-brandOne">
                  SUPPORT 24/7
                </span>
              </Flex>
            </Flex>
            {/* announcement */}
          </Container>
        </div>
        {/* banner */}
        <div className="pt-5 w-full">
          <Link href="/">
            <Image className="w-full" src={BannerOne} alt="banner" />
          </Link>
          <Container>
            <Flex className="justify-between mt-5 gap-5 hidden md:flex">
              <div className="w-1/2">
                <Link href="/">
                  <Image className="w-full" src={BannerTwo} alt="banner" />
                </Link>
              </div>
              <div className="w-1/2">
                <Link href="/">
                  <Image className="w-full" src={BannerThree} alt="banner" />
                </Link>
              </div>
            </Flex>
          </Container>
        </div>
        {/* banner */}
      </main>
    </section>
  );
}
