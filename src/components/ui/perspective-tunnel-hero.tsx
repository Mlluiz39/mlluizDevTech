import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Globe,
  LayoutTemplate,
  MousePointer2,
} from "lucide-react";

const cards = [
  {
    title: "Sua marca, seu espaço.",
    label: "01 / SITE INSTITUCIONAL",
    kind: "website",
    x: -50,
    y: -115,
    z: -100,
    rotation: -9,
  },
  {
    title: "Feito para conectar.",
    label: "02 / LANDING PAGE",
    kind: "landing",
    x: 50,
    y: 5,
    z: 20,
    rotation: 7,
  },
  {
    title: "Pronto para evoluir.",
    label: "03 / PRESENÇA DIGITAL",
    kind: "dashboard",
    x: -45,
    y: 100,
    z: 100,
    rotation: -5,
  },
];
type Pointer = { x: MotionValue<number>; y: MotionValue<number> };
function TunnelCard({
  card,
  progress,
  pointer,
  reduced,
}: {
  card: (typeof cards)[number];
  progress: MotionValue<number>;
  pointer: Pointer;
  reduced: boolean;
}) {
  const transform = useTransform(
    [progress, pointer.x, pointer.y],
    ([p, x, y]: number[]) =>
      `translate3d(calc(-50% + ${card.x - x * 14}px), calc(-50% + ${card.y - y * 10}px), ${card.z + (reduced ? 0 : p * 130)}px) rotateZ(${card.rotation}deg)`,
  );
  return (
    <motion.div className={`tunnel-card ${card.kind}`} style={{ transform }}>
      <div className="mock-browser">
        <span />
        <span />
        <span />
        <span className="mock-address">mlluizdevtech / studio</span>
        <ArrowUpRight size={12} />
      </div>
      <div className="mock-content">
        <span className="mock-label">{card.label}</span>
        <strong>{card.title}</strong>
        {card.kind === "website" ? (
          <div className="mock-website">
            <div className="mock-lines">
              <i />
              <i />
              <i />
            </div>
            <Globe size={45} strokeWidth={1} />
          </div>
        ) : card.kind === "landing" ? (
          <div className="mock-landing">
            <div className="mock-button">
              Vamos começar <ArrowUpRight size={12} />
            </div>
            <div className="mock-orbit">
              <LayoutTemplate size={40} strokeWidth={1} />
            </div>
          </div>
        ) : (
          <div className="mock-dashboard">
            <div className="mock-bars">
              {[35, 58, 47, 75, 65, 90, 100].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <span>
              Uma base para crescer <ArrowUpRight size={12} />
            </span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
/** Adapted perspective tunnel: native scrolling, local parallax and reduced-motion support. */
export default function PerspectiveTunnelHero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const rawX = useMotionValue(0),
    rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 60, damping: 25 });
  const y = useSpring(rawY, { stiffness: 60, damping: 25 });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  return (
    <div
      ref={ref}
      className="tunnel-stage"
      aria-hidden="true"
      onPointerMove={(e) => {
        if (reduced || e.pointerType !== "mouse") return;
        const box = e.currentTarget.getBoundingClientRect();
        rawX.set(((e.clientX - box.left) / box.width) * 2 - 1);
        rawY.set(((e.clientY - box.top) / box.height) * 2 - 1);
      }}
      onPointerLeave={() => {
        rawX.set(0);
        rawY.set(0);
      }}
    >
      <div className="tunnel-grid" />
      <div className="tunnel-ring" />
      <div className="tunnel-ring outer" />
      <div className="tunnel-plane">
        {cards.map((card) => (
          <TunnelCard
            key={card.kind}
            card={card}
            progress={scrollYProgress}
            pointer={{ x, y }}
            reduced={!!reduced}
          />
        ))}
      </div>
      <span className="tunnel-caption">
        <MousePointer2 size={13} /> Da sua ideia para o mundo.
      </span>
    </div>
  );
}
