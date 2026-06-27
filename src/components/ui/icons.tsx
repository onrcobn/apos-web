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
};
export type IconType = typeof Icons[keyof typeof Icons];
