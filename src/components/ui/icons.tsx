import {
  Activity,
  TrendingUp,
  Brain,
  LayoutDashboard,
  Calendar,
  Clock,
  Heart,
  Moon,
  Shield,
  Lock,
  Mail,
  AlertTriangle,
  CheckCircle2,
  Info,
  ChevronDown,
  Menu,
  X,
  Download,
  Trash2,
  Eye,
  HelpCircle,
  Play,
  Sliders,
  Check,
} from "lucide-react";

export const Icons = {
  // Brand / Twin
  Twin: Activity,
  Forecast: TrendingUp,
  Brain: Brain,
  Dashboard: LayoutDashboard,
  CheckIn: Calendar,
  PostSession: Clock,

  // Health Metrics
  HRV: Heart,
  Sleep: Moon,
  Readiness: Activity,
  Workload: Sliders,

  // Security / Data
  Security: Shield,
  Lock: Lock,
  Mail: Mail,
  Export: Download,
  Erasure: Trash2,
  Revoke: Eye,

  // States
  Success: CheckCircle2,
  Warning: AlertTriangle,
  Critical: AlertTriangle,
  Info: Info,
  Check: Check,

  // Navigation / UI
  ChevronDown: ChevronDown,
  Menu: Menu,
  Close: X,
  Help: HelpCircle,
  Play: Play,
  Logo: ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background stylized letter 'A' */}
      <path
        d="M128 36L224 220H184L128 108L72 220H32L128 36Z"
        fill="currentColor"
        fillOpacity="0.15"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      {/* Dynamic green arrow overlay */}
      <path
        d="M72 220L128 96L146 140L196 96"
        stroke="#10b981"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrowhead */}
      <path
        d="M172 96H196V120"
        stroke="#10b981"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
export type IconType = typeof Icons[keyof typeof Icons];
