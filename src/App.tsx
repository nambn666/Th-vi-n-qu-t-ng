import { motion } from "motion/react";
import { 
  Globe, 
  ShieldCheck, 
  Users, 
  Trophy,
  Award,
  ChevronRight
} from "lucide-react";
import { GiftCard } from "./components/GiftCard";
import { FeatureItem } from "./components/FeatureItem";

export default function App() {
  const scrollToGifts = () => {
    const element = document.getElementById('gift-library');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden font-sans text-navy bg-[#fdfcf9]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-gold-light/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 blur-[120px] rounded-full" />
        
        {/* Floating Glass Shards */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[55%] left-[2%] w-48 h-64 glass rotate-12 rounded-3xl opacity-40" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[60%] right-[2%] w-64 h-80 glass -rotate-12 rounded-[40px] opacity-30" 
        />
        
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[10%] left-[10%] w-24 h-16 glass rounded-xl opacity-20" 
        />
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[15%] right-[10%] w-20 h-32 glass rounded-xl opacity-20" 
        />

        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-[5%] w-20 h-20 glass rotate-45 rounded-lg opacity-20" 
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 flex flex-col items-center">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={scrollToGifts}
            className="relative group cursor-pointer inline-block mb-8"
          >
            <span className="text-2xl font-serif font-black tracking-[0.2em] text-gold-dark uppercase relative z-10">
              Nguyễn Nam BĐS
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-gold-light/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-gold-light/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
            Môi giới chuyên nghiệp<br />không nên bỏ qua
          </h1>
          <p className="text-lg text-navy/70 max-w-xl mx-auto leading-relaxed">
            Kho quà tặng đặc biệt giúp bạn đột phá giao dịch và nâng tầm kỹ năng tư vấn.
          </p>
        </motion.header>

        {/* Gift Library Section */}
        <section id="gift-library" className="w-full mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-3">Thư Viện Quà Tặng</h2>
            <p className="text-navy/60">Những tài liệu được tổng hợp và biên soạn kỹ lưỡng từ kinh nghiệm thực chiến.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GiftCard 
              badge="HOT"
              title="Học dự án chuyên nghiệp"
              bullets={[
                "Học dự án nhanh theo checklist",
                "Check pháp lý & tiến độ đúng trọng tâm",
                "Phân tích thị trường theo 6 lớp rõ ràng",
                "So sánh dự án với đối thủ cạnh tranh",
                "Phân tích: thanh khoản – tăng giá – dòng tiền"
              ]}
              originalPrice="1.600.000đ"
              image="https://i.postimg.cc/qqm8Dqnb/HU_O_NG_DA_N_HO_C_DU_A_N_CHUYE_N_NGHIE_P_NGUYE_N_NAM_BĐS_(1).png"
              link="https://hocduan.nambds.vn/#preview"
            />
            <GiftCard 
              isDark
              badge="PRO RECOMMEND"
              title="11 câu hỏi khai thác nhu cầu khách hàng"
              bullets={[
                "Lọc nhu cầu khách trong 3–5 phút",
                "Chốt mục tiêu: ở/đầu tư/cho thuê",
                "Xác định ngân sách & phương án vay",
                "Khoanh khu vực + thời gian nắm giữ",
                "Giảm nói lan man, tăng tỷ lệ chốt hẹn"
              ]}
              originalPrice="2.000.000đ"
              image="https://i.postimg.cc/6q6rhn70/CHECKLIST_11_CA_U_HO_I_KHAI_THA_C_NHU_CA_U_KHA_CH_HA_NG_NGUYE_N_NAM_BĐS.png"
              link="https://11cauhoi.nambds.vn/"
            />
            <GiftCard 
              badge="NEW"
              title="CRM Sheet - Quản lý Data khách hàng"
              bullets={[
                "Biết ngay khách “nét” đang ở đâu",
                "Không sót khách, không trùng follow-up",
                "Phễu 6 tầng rõ ràng đến “Chuẩn bị cọc”",
                "Dùng được cho người mới & leader",
                "Có hướng dẫn + copy dùng ngay"
              ]}
              originalPrice="2.200.000đ"
              image="https://i.postimg.cc/V60J0F4F/1111.png"
              link="https://crmsheet.nambds.vn/"
            />
          </div>
        </section>

        {/* Why Section */}
        <section className="w-full mb-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Liên tục học tập</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FeatureItem icon={Globe} label="Am hiểu thị trường" />
            <FeatureItem icon={ShieldCheck} label="Tự tin tư vấn" />
            <FeatureItem icon={Users} label="Có nhiều khách hàng" />
            <FeatureItem icon={Trophy} label="Trở thành Best Seller" />
          </div>
        </section>

        {/* Profile Section with Enhanced Branding */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full mb-20 relative"
        >
          <div className="max-w-4xl mx-auto glass rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden border border-white/50">
            {/* Background Brand Watermark */}
            <div className="absolute top-0 right-0 text-[10rem] font-serif font-black text-navy/[0.02] -rotate-12 pointer-events-none select-none">
              NAM
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                  <img 
                    src="https://i.postimg.cc/GtngZLrM/nam_nho.jpg" 
                    alt="Nguyễn Nam BĐS" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                {/* Decorative Circles */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-4 border-2 border-gold-light/20 rounded-full" 
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-8 border border-gold-light/10 rounded-full" 
                />
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h2 className="text-4xl font-serif font-black text-navy mb-2">Nguyễn Nam</h2>
                <p className="text-gold-dark font-bold tracking-[0.3em] uppercase text-sm mb-6">Môi giới chuyên nghiệp</p>
                
                <p className="text-lg text-navy/70 leading-relaxed mb-8 italic">
                  "Sứ mệnh của tôi là giúp môi giới bất động sản làm nghề bài bản bằng tư duy đúng và quy trình chuyên nghiệp. Để bạn có khách đều, chốt giao dịch ổn định và từng bước trở thành Best Seller và Leader."
                </p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <div className="flex items-center gap-2 glass px-6 py-3 rounded-2xl text-sm font-black text-navy shadow-sm">
                    <Award className="w-5 h-5 text-gold-dark" />
                    4+ NĂM THỰC CHIẾN
                  </div>
                  <div className="flex items-center gap-2 glass px-6 py-3 rounded-2xl text-sm font-black text-navy shadow-sm">
                    <Users className="w-5 h-5 text-gold-dark" />
                    175K FOLLOWERS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer CTA */}
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl glass rounded-[40px] p-10 text-center shadow-2xl border-2 border-white/50"
        >
          <h2 className="text-3xl font-serif font-bold mb-8">Nhận quà ngay để nâng tầm kỹ năng</h2>
          <button 
            onClick={scrollToGifts}
            className="w-full gold-gradient text-navy font-bold py-4 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Nhận ngay hôm nay
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.footer>
      </div>
    </div>
  );
}
