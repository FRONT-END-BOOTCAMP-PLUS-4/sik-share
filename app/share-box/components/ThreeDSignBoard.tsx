import { useGLTF } from "@react-three/drei";

type ThreeDDishProps = JSX.IntrinsicElements["group"];

export default function ThreeDSignBoard(props: ThreeDDishProps) {
  const { scene } = useGLTF("/assets/3D/signboard.gltf");
  return <primitive object={scene} {...props} />;
}
