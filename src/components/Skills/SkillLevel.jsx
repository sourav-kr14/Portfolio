import { motion } from "framer-motion";

const SkillLevel = ({ skillName, percentage }) => {
  return (
    <motion.div
      className="mb-6"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Skill name + percentage */}
      <div className="flex justify-between items-center mb-2">
        <p className="font-medium text-gray-800 tracking-wide">
          {skillName}
        </p>
        <p className="text-sm font-semibold text-indigo-600">
          {percentage}%
        </p>
      </div>

      {/* Progress track */}
      <div
        className="relative w-full h-3 rounded-full 
        bg-gray-200/60 backdrop-blur-md 
        overflow-hidden"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {/* Animated progress bar */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, ease: "easeOut" }}
          className="
            h-full rounded-full 
            bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400
            shadow-[0_0_12px_rgba(99,102,241,0.6)]
          "
        />

        {/* Glow overlay (subtle) */}
        <div
          className="
            pointer-events-none absolute inset-0
            rounded-full
            bg-gradient-to-r from-indigo-400/30 via-blue-400/30 to-cyan-400/30
            opacity-0 hover:opacity-100 transition-opacity
          "
        />
      </div>
    </motion.div>
  );
};

export default SkillLevel;
