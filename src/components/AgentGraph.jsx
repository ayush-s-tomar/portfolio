import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const NODE_COUNT = 42;
const CONNECT_DIST = 2.6;

function Graph() {
  const groupRef = useRef();
  const pointsRef = useRef();
  const linesRef = useRef();

  const nodes = useMemo(() => {
    const arr = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      arr.push({
        pos: new THREE.Vector3(
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 4
        ),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.004,
          (Math.random() - 0.5) * 0.004
        ),
      });
    }
    return arr;
  }, []);

  const positions = useMemo(() => new Float32Array(NODE_COUNT * 3), []);
  const maxLines = NODE_COUNT * 8;
  const linePositions = useMemo(() => new Float32Array(maxLines * 2 * 3), [maxLines]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    nodes.forEach((n, i) => {
      n.pos.add(n.vel);
      ['x', 'y', 'z'].forEach((axis) => {
        const bound = axis === 'z' ? 2 : axis === 'y' ? 3 : 5;
        if (n.pos[axis] > bound || n.pos[axis] < -bound) n.vel[axis] *= -1;
      });
      positions[i * 3] = n.pos.x;
      positions[i * 3 + 1] = n.pos.y;
      positions[i * 3 + 2] = n.pos.z;
    });
    if (pointsRef.current) {
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }

    let lineIdx = 0;
    for (let i = 0; i < NODE_COUNT && lineIdx < maxLines; i++) {
      for (let j = i + 1; j < NODE_COUNT && lineIdx < maxLines; j++) {
        const d = nodes[i].pos.distanceTo(nodes[j].pos);
        if (d < CONNECT_DIST) {
          linePositions[lineIdx * 6] = nodes[i].pos.x;
          linePositions[lineIdx * 6 + 1] = nodes[i].pos.y;
          linePositions[lineIdx * 6 + 2] = nodes[i].pos.z;
          linePositions[lineIdx * 6 + 3] = nodes[j].pos.x;
          linePositions[lineIdx * 6 + 4] = nodes[j].pos.y;
          linePositions[lineIdx * 6 + 5] = nodes[j].pos.z;
          lineIdx++;
        }
      }
    }
    for (let k = lineIdx; k < maxLines; k++) {
      linePositions[k * 6] = 0; linePositions[k * 6 + 1] = 0; linePositions[k * 6 + 2] = 0;
      linePositions[k * 6 + 3] = 0; linePositions[k * 6 + 4] = 0; linePositions[k * 6 + 5] = 0;
    }
    if (linesRef.current) {
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.setDrawRange(0, lineIdx * 2);
    }

    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.05) * 0.15;
      groupRef.current.rotation.x = Math.cos(t * 0.04) * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={NODE_COUNT} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#29f6c6" size={0.065} sizeAttenuation transparent opacity={0.85} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={maxLines * 2} array={linePositions} itemSize={3} />
        </bufferGeometry>
        <lineBasicMaterial color="#6c7bff" transparent opacity={0.22} />
      </lineSegments>
    </group>
  );
}

export default function AgentGraph() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 7], fov: 55 }} dpr={[1, 1.5]}>
        <Graph />
      </Canvas>
    </motion.div>
  );
}