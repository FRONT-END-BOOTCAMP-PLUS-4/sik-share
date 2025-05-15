interface MyCharacterProps {
  grade: string;
}

export default function MyCharacter({ grade }: MyCharacterProps) {
  return (
    <div className="h-[calc(100%-74px)] flex items-center justify-center">
      3D : {grade}
    </div>
  );
}
