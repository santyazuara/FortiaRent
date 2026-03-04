"use client";

import { testimonios } from "@/config/content";
import AnimatedSection from "@/components/common/AnimatedSection";
import SectionHeader from "@/components/common/SectionHeader";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialsCarousel() {
  return (
    <AnimatedSection className="bg-page py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Testimonios"
          title="Experiencias de clientes que decidieron blindar sus contratos"
          subtitle="Historias de propietarios, inquilinos e inmobiliarias que han utilizado nuestras pólizas y servicios de revisión."
          align="center"
        />

        <div className="mt-8">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1.05}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet !h-2 !w-2 !bg-secondary/30 !opacity-70",
              bulletActiveClass: "!bg-secondary !opacity-100",
            }}
            breakpoints={{
              768: { slidesPerView: 2.1 },
              1024: { slidesPerView: 2.5 },
            }}
          >
            {testimonios.map((testimonio) => (
              <SwiperSlide key={testimonio.id}>
                <article className="h-full rounded-2xl border border-soft bg-surface px-4 py-4 shadow-sm md:px-5 md:py-5">
                  <p className="text-sm leading-relaxed text-muted">
                    “{testimonio.texto}”
                  </p>
                  <div className="mt-4 border-t border-dashed border-soft pt-3 text-sm">
                    <p className="font-semibold text-primary">
                      {testimonio.nombre}
                    </p>
                    <p className="text-xs text-muted">
                      {testimonio.ciudad}, México
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </AnimatedSection>
  );
}

