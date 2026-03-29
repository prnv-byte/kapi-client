"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto glass p-12">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          The Scene Within
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-ink/70"
        >
          A quiet space for the thoughts you don’t always understand,
          but feel deeply anyway.
        </motion.p>

        <div className="flex gap-6 justify-center mt-10 flex-wrap">
          <Link href="/about" className="btn-secondary">
            Explore
          </Link>
          <Link href="/booking" className="btn-primary">
            Book Session
          </Link>
        </div>

      </div>
    </section>
  );
}