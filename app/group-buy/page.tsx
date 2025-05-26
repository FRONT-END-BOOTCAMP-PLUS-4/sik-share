// import KakaoMap from "@/components/common/KakaoMap";
import SubHeader from "@/components/common/SubHeader";
import { GroupBuyFooter } from "./components/GroupBuyFooter";

export default function GroupBuyPage() {
  //   const [location, setLocation] = useState<{
  //     address: string;
  //     neighborhoodName: string;
  //   } | null>(null);

  //   const onSelect = useCallback((address: string, neighborhoodName: string) => {
  //     setLocation({ address, neighborhoodName });
  //   }, []);

  return (
    <>
      <SubHeader />
      <GroupBuyFooter />
    </>
  );
}
