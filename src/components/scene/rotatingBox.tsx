import { useRef } from "react";
import * as THREE from "three";
import { getVertices } from "../../utils";

import { indices } from "../../constants";
import { ShapeProperties } from "../../types";

export const RotatingBox = ({ sides }: { sides: ShapeProperties }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  const vertices = getVertices(sides.length, sides.width, sides.height);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const wireframeGeometry = new THREE.WireframeGeometry(geometry);

  return (
    <group>
      <mesh ref={meshRef} geometry={geometry}>
        <meshStandardMaterial
          depthWrite={false}
          color="red"
          transparent={true}
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </mesh>

      <lineSegments geometry={wireframeGeometry}>
        <lineBasicMaterial color="black" />
      </lineSegments>
    </group>
  );
};
