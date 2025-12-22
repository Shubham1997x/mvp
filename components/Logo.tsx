export const Logo = ({ className = "w-12 h-6" }: { className?: string }) => {
  return (
    <img
      src="/logo.svg"
      alt="Logo"
      className={className}
    />
  );
};

