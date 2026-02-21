import { motion } from "motion/react";
import { Clock } from "lucide-react";

interface GiftCardProps {
  title: string;
  bullets: string[];
  image: string;
  badge?: string;
  originalPrice?: string;
  isDark?: boolean;
}

export const GiftCard = ({ 
  title, 
  bullets, 
  image, 
  badge, 
  originalPrice = "999.000đ",
  isDark = false 
}: GiftCardProps) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`relative rounded-[2rem] flex flex-col ${isDark ? 'glass-dark border-gold-light/30' : 'glass border-white'} shadow-2xl overflow-hidden group`}
  >
    {/* Glowing Border Effect */}
    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-light/50 rounded-[2rem] transition-all duration-500 pointer-events-none z-30" />
    
    <div className="p-8 flex-grow flex flex-col relative z-10">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold font-serif leading-tight">{title}</h3>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-center gap-3 text-sm font-medium text-navy/80">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-dark shadow-[0_0_8px_rgba(184,134,11,0.6)]" />
            {bullet}
          </li>
        ))}
      </ul>

      {/* Image Container with Enhanced Curiosity */}
      <div className="relative w-full h-64 mb-8 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-gold-light/20 transition-all duration-500">
        {badge && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl uppercase tracking-tighter z-20">
            {badge}
          </div>
        )}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover blur-[6px] transition-all duration-700 group-hover:blur-[4px] group-hover:scale-110"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Curiosity Overlay with Animation */}
        <div className="absolute inset-0 bg-navy/30 backdrop-blur-[2px] flex flex-col items-center justify-center text-white p-6 text-center transition-all duration-500 group-hover:bg-navy/10">
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center mb-4 border border-white/40 shadow-2xl"
          >
            <Clock className="w-8 h-8 text-white" />
          </motion.div>
          <p className="text-sm font-black uppercase tracking-[0.2em] drop-shadow-2xl">Click để mở khóa</p>
          <div className="mt-2 h-1 w-12 bg-gold-light rounded-full" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 mt-auto pt-8 border-t border-navy/10">
        <div className="flex flex-col">
          <span className="text-xl text-navy/30 line-through font-bold italic tracking-tighter">{originalPrice}</span>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-orange-600 tracking-tighter drop-shadow-xl animate-pulse">MIỄN PHÍ</span>
          </div>
        </div>
        <button className={`px-10 py-5 rounded-2xl text-lg font-black transition-all shadow-2xl hover:shadow-gold-light/40 active:scale-95 ${isDark ? 'gold-gradient text-navy' : 'blue-gradient text-white'}`}>
          Nhận quà
        </button>
      </div>
    </div>
  </motion.div>
);
