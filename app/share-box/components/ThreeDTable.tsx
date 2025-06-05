import { useGLTF } from "@react-three/drei";

type ThreeDDishProps = JSX.IntrinsicElements["group"];

export default function ThreeDTable(props: ThreeDDishProps) {
  const { scene } = useGLTF("/assets/3D/table.gltf");
  return <primitive object={scene} {...props} />;
}
