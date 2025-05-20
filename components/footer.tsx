import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full bg-[#ad5d5d] py-12 px-4">
      <div className="max-w-md mx-auto bg-white p-8 text-center">
        <h2 className="text-2xl font-bold text-[#d4506f] mb-6">ARTE A MANO</h2>

        <div className="flex justify-center mb-4">
          <Image src="/instagram-qr.png" alt="Instagram QR Code" width={200} height={200} />
        </div>

        <p className="text-[#d4506f]">@arte_a_mano</p>
      </div>
    </footer>
  )
}
