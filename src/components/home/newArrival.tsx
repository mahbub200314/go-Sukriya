
import { newArrival } from "@/lib/products"
import Image from "next/image"
import Link from "next/link"

const NewArrival = () => {
  const products = newArrival.slice(0, 4)
  
  return (
    <section className="w-full bg-white py-16 sm:py-20" aria-labelledby="new-arrival-heading">
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-7 w-3 rounded-sm bg-[#db4444]" />
          <span className="text-sm font-semibold text-[#db4444]">Featured</span>
        </div>
        <h2 id="new-arrival-heading" className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">
          New Arrivals
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
        {products.map((product, index) => (
          <article
            key={product.id}
            className={[
              "group relative isolate min-h-64 overflow-hidden rounded-sm",
              index === 0 && "sm:col-span-2 sm:row-span-2 sm:min-h-[34rem]",
              index === 1 && "sm:col-span-2 sm:min-h-64",
              index === 2 && "sm:min-h-64",
              index === 3 && "sm:min-h-64",
            ].filter(Boolean).join(" ")}
          >
            {index === 0 && (
              <>
                <Image src={product.image} alt={product.name} fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                 className="-z-20 object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/75">Just landed</p>
                  <h3 className="max-w-sm text-2xl font-semibold sm:text-3xl">{product.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">{product.description}</p>
                  <p className="mt-5 text-lg font-semibold">${product.price}</p>
                  <Link href='#' className="underline hover:text-primary">SHOP NOW</Link>
                </div>
              </>
            )}

            {index === 1 && (
              <div className="grid h-full min-h-64 grid-cols-2 items-center bg-[#edf3f2]">
                <div className="z-10 p-5 sm:p-7">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#52716c]">{product.category}</p>
                  <h3 className="text-xl font-semibold text-[#152522] sm:text-2xl">{product.name}</h3>
                  <p className="mt-3 text-sm text-[#52716c]">{product.description}</p>
                  <p className="mt-5 text-lg font-semibold text-[#152522]">${product.price}</p>
                  <Link href='#' className="underline hover:text-primary">SHOP NOW</Link>
                </div>
                <div className="relative h-full min-h-64">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
              </div>
            )}

            {index === 2 && (
              <>
                <div className="absolute inset-0 -z-20 bg-[#202522]" />
                <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="-z-10 object-cover opacity-65 transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 -z-[5] bg-gradient-to-r from-[#17201d]/95 via-[#17201d]/55 to-transparent" />
                <div className="flex h-full min-h-64 max-w-[75%] flex-col justify-end p-5 text-white sm:p-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#b8d8c8]">{product.category}</p>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="mt-3 text-lg font-semibold">${product.price}</p>
                  <Link href='#' className="underline hover:text-primary">SHOP NOW</Link>
                </div>
              </>
            )}

            {index === 3 && (
              <div className="flex h-full min-h-64 flex-col bg-[#f4eee5]">
                <div className="relative min-h-40 flex-1">
                  <Image src={product.image} alt={product.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-sm bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#51483d]">New</span>
                </div>
                <div className="flex justify-between gap-3 p-4 justify-between items-end">
                  <div className="min-w-0">
                    <p className="text-xs text-[#786d60]">{product.category}</p>
                    <h3 className="mt-1 truncate text-base font-semibold text-[#28231e]">{product.name}</h3>
                    
                  <p className="shrink-0 text-base font-semibold text-[#28231e]">${product.price}</p>
                  </div>
                  <Link href='#' className="underline hover:text-primary">SHOP NOW</Link>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default NewArrival