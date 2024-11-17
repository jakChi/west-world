import { motion } from "framer-motion";

export default function NarrativeCard ({ id, title, plot, img, activate }) {
  return (
    <motion.div
      layoutId={id}
      onClick={() => activate(id)}
      className={`w-[90%] h-72 m-auto rounded-3xl p-3`}
    >
      <motion.img
        src={img}
        className="object-cover object-top w-full h-2/3 rounded-2xl"
      />
      <motion.h5 className="h-16 text-sm line-clamp-3">{plot}</motion.h5>
      <motion.h2 className="text-xl">{title}</motion.h2>
    </motion.div>
  );
};

