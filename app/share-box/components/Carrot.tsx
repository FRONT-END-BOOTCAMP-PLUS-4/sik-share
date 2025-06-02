import { useGLTF } from "@react-three/drei";

type ThreeDDishProps = JSX.IntrinsicElements["group"];

export default function Carrot(props: ThreeDDishProps) {
  const { scene } = useGLTF("/assets/3D/carrot.gltf");

  return <primitive object={scene} {...props} />;
}
