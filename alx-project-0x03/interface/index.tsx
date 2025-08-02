export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green' | 'slate'; // ✅ Add 'slate'
  action?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface PageRouteProps {
  pageRoute: string;
}