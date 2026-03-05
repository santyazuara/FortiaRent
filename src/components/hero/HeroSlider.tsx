"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { heroSlides, contactoInfo } from "@/config/content";
import { media } from "@/config/media";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

const heroImages = [media.hero1, media.hero2, media.hero3];

export default function HeroSlider() {
  return (
    <section className="section-divider relative">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        effect="fade"
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet !h-2 !w-2 !bg-bg/40 !opacity-70",
          bulletActiveClass: "!bg-bg !opacity-100",
        }}
        className="h-[78vh] min-h-[480px] max-h-[760px]"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="relative h-full w-full"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 6, ease: "easeOut" }}
                >
                  <Image
                    src={heroImages[index] ?? media.hero1}
                    alt={slide.titulo}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-primary/38 to-primary/55" />
              </div>

              <div className="relative z-10 h-full">
                <div className="mx-auto flex h-full max-w-6xl flex-col justify-center px-4 py-10 md:px-6 lg:px-8">
                  <div className="max-w-xl space-y-5 text-bg md:space-y-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent/80">
                      Pólizas jurídicas para arrendamiento y contratos
                    </p>
                    <h1 className="text-2xl font-semibold leading-snug md:text-3xl lg:text-[2.45rem] lg:leading-snug">
                      {slide.titulo}
                    </h1>
                    <p className="max-w-md text-sm text-bg/85 md:text-[0.97rem]">
                      {slide.subtitulo}
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button href={contactoInfo.whatsappLink} size="lg">
                        Cotizar póliza
                      </Button>
                      <Button
                        href="/polizas"
                        variant="secondary"
                        size="lg"
                        className="border-bg/30 bg-transparent text-bg hover:border-accent/70 hover:bg-accent hover:text-primary"
                      >
                        Ver coberturas
                      </Button>
                    </div>
                    <p className="pt-1 text-xs text-accent/85">
                      {slide.confianza}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex items-center justify-center">
        <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-primary/30 px-4 py-2 text-[11px] text-accent/90 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Cobertura jurídica para renta, contratos y empresas.
        </div>
      </div>
    </section>
  );
}

