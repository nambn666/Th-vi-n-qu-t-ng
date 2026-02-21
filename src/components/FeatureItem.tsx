import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  label: string;
}

export const FeatureItem = ({ icon: Icon, label }: FeatureItemProps) => (
  <div className="flex flex-col items-center gap-3">
    <div className="w-16 h-16 rounded-full glass flex items-center justify-center shadow-lg">
      <Icon className="w-8 h-8 text-gold-dark" />
    </div>
    <span className="text-sm font-medium text-center max-w-[100px] leading-tight text-navy/80">
      {label}
    </span>
  </div>
);
