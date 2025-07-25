import { useGLTF } from "@react-three/drei";

type ThreeDDishProps = JSX.IntrinsicElements["group"];

export default function ThreeDBack(props: ThreeDDishProps) {
  const { scene } = useGLTF("/assets/3D/back.gltf");
  return <primitive object={scene} {...props} />;
}
