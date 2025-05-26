export type Provider = 'kakao' | 'naver' | 'google';
export type LocationData = {
  lat: number | undefined;
  lng: number| undefined;
  locationNote: string;
  locationAddress: string;
};
export type StatusType = "active" | "completed" | "expired";
export type participantsType = "share" | "group-buy";