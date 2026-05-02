import { Link } from "react-router-dom";

const FooterRevealSection = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 w-full bg-foreground -z-10"
      style={{ height: "200px" }}
    >
      <div className="h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Logo only */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <span className="text-foreground font-bold text-xl">A</span>
          </div>
          <span className="text-2xl sm:text-3xl font-bold text-background transition-colors duration-300 group-hover:text-background/80">
            Advora
          </span>
        </Link>
      </div>
    </div>
  );
};

export default FooterRevealSection;
