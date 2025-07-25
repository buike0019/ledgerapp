import Image from "next/image";
import Link from "next/link";
import NavHeader from "../components/NavHeader/NavHeader";

export default function Page() {
  return (
    <div className="container mx-auto px-4 flex flex-col items-center justify-center bg-gray-50 pb-8">
      <NavHeader />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
        <Link
          href="https://ramp.network/buy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition h-44"
        >
          <Image src="/buyImg/ramp.png" width={50} height={50} alt="Ramp" />
          <h2 className="text-lg font-semibold pt-3">Ramp</h2>
        </Link>
        <Link
          href="https://global.transak.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition h-44"
        >
          <Image src="/buyImg/transak.png" width={50} height={50} alt="Transak" />
          <h2 className="text-lg font-semibold pt-3">Transak</h2>
        </Link>
        <Link
          href="/dashboard/buy/gift-card-deposit"
          className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition h-44"
        >
          <Image src="/buyImg/giftcard.png" width={50} height={50} alt="GiftCard" />
          <h2 className="text-lg font-semibold pt-3 text-center">
            Redeem<br />GiftCard
          </h2>
        </Link>
        <Link
          href="https://moonpay.com/buy"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-white rounded-xl shadow p-6 hover:shadow-lg transition h-44"
        >
          <Image src="/buyImg/moonpay.png" width={50} height={50} alt="Moonpay" />
          <h2 className="text-lg font-semibold pt-3">Moonpay</h2>
        </Link>
      </div>
    </div>
  );
}