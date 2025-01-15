import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Box, Palette, Rocket, Sparkles, Wand2, Zap } from "lucide-react";

const features = [
  {
    title: "Lightning-Fast Setup",
    //   description as component
    description: () => {
      return (
        <div className="flex">
          <div className="mt-5">
            <p>
              Get your app running in minutes with our streamlined installation
              process, compatible with any Expo or React Native project.
            </p>
          </div>

          <div className="mx-auto w-full max-w-2xl">
            <div className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 shadow-xl">
              <div className="flex h-12 items-center border-b border-zinc-700 bg-zinc-800 px-4">
                <div className="flex items-center space-x-2">
                  <div className="size-3 rounded-full bg-red-500" />
                  <div className="size-3 rounded-full bg-yellow-500" />
                  <div className="size-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-4 w-full pr-6 text-center text-sm text-white">
                  Trend UI
                </div>
              </div>
              <div className="h-48 p-4">
                <p className="italic text-gray-400">{"//"} install the cli</p>
                <p>npm i @trendui/react-native</p>
                <br />
                <p className="italic text-gray-400">
                  {"//"} get the desired component
                </p>
                <p>npx trendui add button</p>
              </div>
            </div>
          </div>
        </div>
      );
    },
    icon: Rocket,
    gradient: "bg-gradient-to-r from-orange-600 to-red-700",
    descriptionGradient: "bg-gradient-to-r from-orange-600/20 to-red-700/20",
  },
  {
    title: "Smart Defaults",
    description: () => {
      return (
        <div className="flex">
          <div className="mt-5">
            <p>
              Carefully crafted default settings that provide production-ready
              components while maintaining complete flexibility for
              customization.
            </p>
          </div>

          <div className="mx-auto w-full max-w-2xl">
            <div className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 shadow-xl">
              <div className="flex h-12 items-center border-b border-zinc-700 bg-zinc-800 px-4">
                <div className="flex items-center space-x-2">
                  <div className="size-3 rounded-full bg-red-500" />
                  <div className="size-3 rounded-full bg-yellow-500" />
                  <div className="size-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-4 w-full pr-6 text-center text-sm text-white">
                  Trend UI
                </div>
              </div>
              <div className="h-48 p-4">
                <p className="italic text-gray-400">{"//"} install the cli</p>
                <p></p>
                <br />
                <p className="italic text-gray-400">
                  {"//"} get the desired component
                </p>
                <p>npx trendui add button</p>
              </div>
            </div>
          </div>
        </div>
      );
    },
    icon: Box,
    gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
    descriptionGradient: "bg-gradient-to-r from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Effortless Customization",
    description:
      "Take full control of your UI with our intuitive customization system. Modify styles, behaviors, and animations with minimal code and maximum impact.",
    icon: Palette,
    gradient: "from-blue-700 to-green-500",
    descriptionGradient: "bg-gradient-to-r from-blue-700/20 to-green-500/20",
  },
  {
    title: "Seamless Theming",
    description:
      "Switch between light, dark, and custom themes effortlessly. Our robust theming system makes it simple to maintain consistent styling across your entire app.",
    icon: Wand2,
    gradient: "bg-gradient-to-r from-green-500 to-lime-300",
    descriptionGradient: "bg-gradient-to-r from-green-500/20 to-lime-300/20",
  },
  {
    title: "Premium Design Language",
    description:
      "Elevate your app's visual appeal with our meticulously crafted components that incorporate modern design principles and micro-interactions.",
    icon: Sparkles,
    gradient: "bg-gradient-to-r from-purple-700 to-rose-500",
    descriptionGradient: "bg-gradient-to-r from-purple-700/20 to-rose-500/20",
  },
  {
    title: "Rapid Development",
    description:
      "Accelerate your development cycle with our extensive collection of production-ready components, designed to help you ship features faster without compromising quality.",
    icon: Zap,
    gradient: "bg-gradient-to-r from-rose-700 to-red-500",
    descriptionGradient: "bg-gradient-to-r from-rose-700/20 to-red-500/20",
  },
];

export default function FeatureDescription() {
  const [activeFeature, setActiveFeature] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observers = featureRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveFeature(index);
          }
        },
        {
          root: null,
          rootMargin: "-45% 0px -45% 0px",
          threshold: [0, 0.1, 0.5, 1],
        },
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  const scrollToFeature = (index: number) => {
    featureRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section className="relative min-h-screen">
      <div className="pointer-events-none absolute inset-0" />

      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-[300px,1fr] md:gap-12">
          {/* Feature navigation buttons */}
          <div className="top-20 h-fit md:sticky">
            <div className="flex md:block">
              <div className="flex w-full gap-2 pb-4 md:flex-col md:gap-2 md:pb-0">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.button
                      key={index}
                      onClick={() => scrollToFeature(index)}
                      className={`group relative shrink-0 overflow-hidden rounded-xl p-4 text-left transition-all duration-300 ease-in-out md:w-full ${
                        activeFeature === index
                          ? "bg-gradient-to-r text-white shadow-lg"
                          : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white"
                      } ${activeFeature === index ? feature.gradient : ""}`}
                      initial={false}
                      animate={{
                        scale: activeFeature === index ? 1.02 : 1,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <div className="relative z-10 flex items-center gap-3">
                        <motion.div
                          animate={{
                            scale: activeFeature === index ? 1.1 : 1,
                            transition: { duration: 0.3 },
                          }}
                        >
                          <Icon
                            className={`size-5 transition-colors duration-300 ${
                              activeFeature === index
                                ? "text-white"
                                : "text-zinc-400 group-hover:text-white"
                            }`}
                          />
                        </motion.div>
                        <span className="hidden font-medium transition-colors duration-300 md:inline">
                          {feature.title}
                        </span>
                      </div>
                      {activeFeature === index && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 z-0"
                          transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            duration: 0.4,
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Feature content cards */}
          <div className="relative" ref={containerRef}>
            <div className="-mt-8 space-y-0 md:mt-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (featureRefs.current[index] = el)}
                    className="min-h-[20vh]"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={`relative overflow-hidden p-4 shadow-2xl md:p-8 ${feature.descriptionGradient}`}
                      >
                        <div className="relative z-10 h-fit">
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="mb-4 inline-block rounded-lg bg-white/10 p-3"
                          >
                            <Icon className="size-6 text-white" />
                          </motion.div>
                          <motion.h3
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.4 }}
                            className="mb-4 hidden text-2xl font-bold text-white md:block md:text-3xl"
                          >
                            {feature.title}
                          </motion.h3>
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                            className="text-base text-white/80 md:text-lg"
                          >
                            {typeof feature.description === "function" ? (
                              <div className="flex flex-col gap-8 md:flex-row">
                                {feature.description()}
                              </div>
                            ) : (
                              feature.description
                            )}
                          </motion.div>
                        </div>
                        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
