import Image from "next/image";

import CommunityIcon from "@/assets/icons/community.png";

export default function CommunityPage() {
  return (
    <>
      <h1>This is the Community Page</h1>
      <Image src={CommunityIcon} alt="Community Icon" width="120" />
    </>
  );
}
