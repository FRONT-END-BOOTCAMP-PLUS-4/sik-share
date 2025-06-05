import { useGLTF } from "@react-three/drei";

type ThreeDDishProps = JSX.IntrinsicElements["group"];

export default function Onion(props: ThreeDDishProps) {
  const { scene } = useGLTF("/assets/3D/onion.gltf");

  return <primitive object={scene} {...props} />;
}
