export type Provider = 'kakao' | 'naver' | 'google';
export type LocationData = {
  lat: number | undefined;
  lng: number| undefined;
  locationNote: string;
  locationAddress: string;
};