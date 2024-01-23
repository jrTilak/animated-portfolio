import SOCIAL_LINKS from "../../assets/constants/social-links";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav className="h-24">
      {/* wrapper */}
      <div className="max-w-7xl m-auto flex items-center justify-end p-5 sm:p-0 sm:justify-between h-full">
        <motion.span 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-lg"
        >
          John Doe
        </motion.span>
        {/* social links */}
        <div className="flex gap-5 items-center justify-center">
          {SOCIAL_LINKS.map((link) => {
            return (
              <a
                key={link.name}
                href={link.link}
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-5 h-5" src={link.image} alt="" />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
