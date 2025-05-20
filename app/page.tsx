import Image from "next/image"
import { Search } from "@/components/search"
import { ProductCarousel } from "@/components/product-carousel"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Header Section */}
      <section className="w-full bg-[#ad5d5d] py-8 px-4 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center gap-2 mb-4">
            <h1 className="text-4xl font-bold tracking-wider text-white">ARTE A MANO</h1>
            <div className="flex gap-1">
              <Image src="/heart.png" alt="Heart" width={30} height={30} className="transform rotate-12" />
              <Image src="/heart.png" alt="Heart" width={30} height={30} className="transform -rotate-12" />
            </div>
          </div>

          <p className="text-sm text-center max-w-3xl mx-auto">
            EN ARTE A MANO CREEMOS EN LO AUTÉNTICO, LO HECHO CON PACIENCIA Y CORAZÓN. NUESTRO EMPRENDIMIENTO NACE DEL
            AMOR POR LAS ARTESANÍAS Y POR RESCATAR TÉCNICAS QUE HAN PASADO DE GENERACIÓN EN GENERACIÓN.
          </p>

          <p className="text-sm text-center max-w-3xl mx-auto mt-4">
            CADA CREACIÓN ES ÚNICA DESDE LA ELECCIÓN DE LOS MATERIALES HASTA LOS DETALLES FINALES. TODO ES ELABORADO
            CUIDADOSAMENTE A MANO. NOS INSPIRAMOS EN LA NATURALEZA, LA CULTURA LOCAL Y EL DESEO DE TRANSMITIR EMOCIONES
            A TRAVÉS DE OBJETOS SIMPLES PERO LLENOS DE SIGNIFICADO.
          </p>

          <p className="text-sm text-center max-w-3xl mx-auto mt-4">
            CON CADA PIEZA, QUEREMOS QUE TE LLEVES NO SOLO UN PRODUCTO SINO UN PEDACITO DE NUESTRA HISTORIA. GRACIAS POR
            VALORAR, GRACIAS POR APOYAR EL LO HECHO A MANO. GRACIAS APOYAR EL ARTE CON ALMA.
          </p>

          <div className="flex justify-center mt-4 gap-2">
            <Image src="/heart.png" alt="Heart" width={25} height={25} className="transform rotate-12" />
            <Image src="/heart.png" alt="Heart" width={25} height={25} className="transform -rotate-12" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full bg-[#d4506f] py-4 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Search />
            <h2 className="text-2xl font-bold text-white">ARTE A MANO</h2>
            <div className="flex gap-2">
              <a href="#" aria-label="Phone">
                <div className="bg-white rounded-full p-1">
                  <Image src="/phone.png" alt="Phone" width={20} height={20} />
                </div>
              </a>
              <a href="#" aria-label="Instagram">
                <div className="bg-white rounded-full p-1">
                  <Image src="/instagram.png" alt="Instagram" width={20} height={20} />
                </div>
              </a>
            </div>
          </div>

          <ProductCarousel />

          <div className="flex justify-between mt-4">
            <button className="bg-[#d9d9d9] px-4 py-1 text-[#3a3838]">volver</button>
            <button className="bg-[#d9d9d9] px-4 py-1 text-[#3a3838]">comprar</button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
