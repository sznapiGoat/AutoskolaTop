"use client";

import { motion } from "framer-motion";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-dark pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg italic text-slate-300">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
