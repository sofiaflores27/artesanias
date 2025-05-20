import Image from "next/image"

export function ContactSection() {
  return (
    <section className="w-full bg-[#ad5d5d] py-12 px-4">
      <div className="max-w-md mx-auto bg-[#d9d9d9] p-8 text-center">
        <h2 className="text-2xl font-bold text-[#3a3838] mb-4">ARTE A MANO</h2>

        <div className="flex justify-center items-center gap-2 mb-4">
          <Image src="/phone-dark.png" alt="Phone" width={20} height={20} />
          <span className="text-xl font-medium text-[#3a3838]">Contacto</span>
        </div>

        <p className="text-[#3a3838] mb-4">
          ¿Querés hacer un pedido especial
          <br />o tenés alguna consulta?
        </p>

        <a href="tel:+5491123456789" className="inline-block bg-[#00ff09] px-4 py-2 text-black font-bold mb-4">
          +54 9 11 23456789
        </a>

        <p className="text-[#3a3838]">
          ¡Escribinos!
          <br />
          Estamos felices de ayudarte.
        </p>
      </div>
    </section>
  )
}
