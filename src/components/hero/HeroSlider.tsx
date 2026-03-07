"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { heroSlides, contactoInfo } from "@/config/content";
import { media } from "@/config/media";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";

// SWIPER CSS (Esencial para que funcionen los cambios de imagen)
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSlider() {
  const images = [media.hero1, media.hero2, media.hero3];

  return (
    <section className="relative overflow-hidden bg-primary">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 15000, disableOnInteraction: false }}
        loop={true}
        effect="fade"
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet !bg-white/30 !opacity-100 !h-1.5 !w-10 !rounded-full !transition-all",
          bulletActiveClass: "!bg-accent !w-16",
        }}
        className="h-[85vh] min-h-[600px]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={`hero-img-${index}`}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={img}
                  alt={`FortiaRent Hero ${index + 1}`}
                  fill
                  className="object-cover opacity-90"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                <div className="absolute inset-0 bg-primary/20" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4 md:px-6 lg:px-8">
                <div className="max-w-3xl">
                  <motion.h1
                    className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Blindamos legalmente tus operaciones de arrendamiento
                  </motion.h1>

                  <motion.p
                    className="mt-6 text-lg leading-relaxed text-white/90 md:text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    En <span className="font-semibold text-accent">Fortiarent</span> diseñamos pólizas jurídicas que protegen tu patrimonio y te permiten rentar con tranquilidad.
                  </motion.p>

                  <motion.p
                    className="mt-4 text-[0.95rem] leading-relaxed text-white/70"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    Contamos con un equipo legal completo que acompaña cada operación desde la firma del contrato hasta la conclusión del arrendamiento.
                  </motion.p>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <Button
                      href={contactoInfo.whatsappLink}
                      size="lg"
                      variant="secondary"
                      className="shadow-2xl ring-4 ring-accent/30"
                    >
                      Solicitar póliza
                    </Button>
                    <Button
                      href="/polizas"
                      size="lg"
                      variant="outlineWhite"
                    >
                      Ver tipos de póliza
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative Blur */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent opacity-20 blur-3xl z-20" />
    </section>
  );
}

