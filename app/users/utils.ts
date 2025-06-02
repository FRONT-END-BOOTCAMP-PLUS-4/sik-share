const scoreGradeMap = [
  { min: 80, grade: "Fruit", memberBadge: "이 구역의 천사 나누미" },
  { min: 60, grade: "Flower", memberBadge: "마을의 공유 달인" },
  { min: 40, grade: "Leaf", memberBadge: "든든한 밥친구" },
  { min: 20, grade: "Sucus", memberBadge: "동네 나눔 메이트" },
  { min: 0, grade: "Sprout", memberBadge: "새로운 식샤 패밀리" },
];

export function getScoreVisual(score: number) {
  return scoreGradeMap.find(({ min }) => score >= min) ?? {grade:"Leaf", memberBadge : "새로운 식샤 패밀리"};
}


export function getTabValues(type: "share" | "group-buy"| "participation" , isMyAccount: boolean): Record<string, string>[] {
  switch (type) {
    case "participation":
      return [
        { label: "나눔", value: "share" },
        { label: "같이 장보기", value: "group-buy" },
      ];

    case "group-buy":
      return [
        { label: "진행 중", value: "active" },
        { label: "장보기 완료", value: "completed" },
      ];

    case "share":
      return [
        { label: "진행 중", value: "active" },
        { label: "나눔 완료", value: "completed" },
        ...(isMyAccount ? [{ label: "기한 만료", value: "expired" }] : []),
      ];
  }
}