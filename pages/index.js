import {
  AboutCompany,
  Clients,
  EasyPayment,
  HeroHome,
  MerchantJoin,
  PaymentGateway,
  Services,
} from "../app/components/Home";

export default function Home() {
  return (
    <>
      <HeroHome />
      <MerchantJoin />
      <PaymentGateway />
      <AboutCompany />
      <EasyPayment />
      <Services />
      <Clients />
    </>
  );
}
