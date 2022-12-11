import {
  AboutCompany,
  EasyPayment,
  HeroHome,
  MerchantJoin,
  PaymentGateway,
} from "../app/components/Home";

export default function Home() {
  return (
    <>
      <HeroHome />
      <MerchantJoin />
      <PaymentGateway />
      <AboutCompany />
      <EasyPayment />
    </>
  );
}
