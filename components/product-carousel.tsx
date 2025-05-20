import Image from "next/image"

export function ProductCarousel() {
  return (
    <div className="relative">
      <div className="flex gap-4 overflow-hidden">
        <div className="flex-1 bg-[#ffbcbc] p-3 flex">
          <div className="w-1/2">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Tejidos hechos a mano"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
          <div className="w-1/2 pl-2">
            <h3 className="text-sm font-medium uppercase">Tejidos completamente a mano</h3>
            <p className="text-xs mt-1">TELAS DE COLORES VIBRANTES</p>
            <p className="text-xs mt-1">CADA UNA CON UN DISEÑO ÚNICO</p>
            <p className="text-xs mt-1">AJUSTABLE, CÓMODO Y RESISTENTE</p>
            <p className="text-sm font-bold text-[#539f23] mt-2">$1200 ARS</p>
          </div>
        </div>

        <div className="flex-1 bg-[#ffbcbc] p-3 flex">
          <div className="w-1/2">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Tazón hecho con cerámica"
              width={150}
              height={150}
              className="object-cover"
            />
          </div>
          <div className="w-1/2 pl-2">
            <h3 className="text-sm font-medium uppercase">Tazón hecho con cerámica esmaltada</h3>
            <p className="text-xs mt-1">COLOR ROSA Y AZUL DEGRADADO</p>
            <p className="text-xs mt-1">CON DELICADOS DETALLES DE FLORES</p>
            <p className="text-xs mt-1">IDEAL PARA TOMAR CAFÉ, TÉ, TAMAÑO PERFECTO PARA DISFRUTAR BEBIDAS CALIENTES</p>
            <p className="text-sm font-bold text-[#539f23] mt-2">$1200 ARS</p>
          </div>
        </div>
      </div>

      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full">
        <span className="text-2xl">←</span>
      </button>

      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 p-1 rounded-full">
        <span className="text-2xl">→</span>
      </button>
    </div>
  )
}
