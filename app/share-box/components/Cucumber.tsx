import { useGLTF } from "@react-three/drei";

type ThreeDDishProps = JSX.IntrinsicElements["group"];

export default function Cucumber(props: ThreeDDishProps) {
  const { scene } = useGLTF("/assets/3D/cucumber.gltf");

  return <primitive object={scene} {...props} />;
}
