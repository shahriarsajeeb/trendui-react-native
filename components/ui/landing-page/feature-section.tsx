import { BarChart3, Calendar, Crown, Star, Trophy, Zap } from "lucide-react";

const features = [
  {
    title: "Wide Range of Components",
    description:
      "Includes over 20 versatile components such as Image, Button, TextInput, Carousel, and more.",
    icon: Crown,
    bgColor: "bg-[#452714]",
    valueColor: "text-[#FFA726]",
    iconColor: "text-yellow-400",
  },
  {
    title: "Optimized for Performance",
    description:
      "Each component is optimized for speed and efficiency on both iOS and Android platforms.",
    icon: Zap,
    bgColor: "bg-[#1f1133]",
    valueColor: "text-[#B388FF]",
    iconColor: "text-purple-400",
  },
  {
    title: "Customizable",
    description:
      "Extensive customization options for styles and behaviors to match your brand and design requirements.",
    icon: Trophy,
    bgColor: "bg-[#0b2f2f]",
    valueColor: "text-[#4DB6AC]",
    iconColor: "text-teal-400",
  },
  {
    title: "Consistent Design",
    description:
      "Designed to offer a consistent look and feel that can be easily adapted to your app's design system.",
    icon: Calendar,
    bgColor: "bg-[#002247]",
    valueColor: "text-[#4991df]",
    iconColor: "text-blue-400",
  },
  {
    title: "Easy to Use",
    description:
      "Simple API and documentation make it easy for developers to get started and be productive.",
    icon: BarChart3,
    bgColor: "bg-[#003505]",
    valueColor: "text-[#6aff6b]",
    iconColor: "text-green-400",
  },
  {
    title: "Fully Typesafe",
    description:
      "Written in TypeScript with full type definitions for all components and props.",
    icon: Star,
    bgColor: "bg-[#49031d]",
    valueColor: "text-[#db1d8b]",
    iconColor: "text-pink-400",
  },
];

export default function Features() {
  return (
    <div className="mt-0 bg-black py-6 md:mt-32">
      <div className="container mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
        {features.map((feat, index) => (
          <div
            key={index}
            className={`${feat.bgColor} h-32 rounded-2xl p-4 shadow-lg transition-transform duration-200 ease-in-out hover:scale-105`}
            style={{
              backgroundImage:
                "linear-gradient(#ffffff36 1px, transparent 1px), linear-gradient(to right, #ffffff36 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              backgroundBlendMode: "soft-light",
            }}
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-400">
                <feat.icon className={`size-5 ${feat.iconColor}`} />
                <span className="text-2xl font-semibold text-white">
                  {feat.title}
                </span>
              </div>
              <div className={`text-sm ${feat.valueColor}`}>
                {feat.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
