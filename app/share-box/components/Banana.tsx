import { useGLTF } from "@react-three/drei";

type ThreeDDishProps = JSX.IntrinsicElements["group"];

export default function Banana(props: ThreeDDishProps) {
  const { scene } = useGLTF("/assets/3D/banana.gltf");

  return <primitive object={scene} {...props} />;
}
