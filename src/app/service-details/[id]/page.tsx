import SericeDetails from "@/components/inner-pages/services/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Vishal Joshi sir",
};
const index = async ({ params }: { params: { id: any } }) => {
  const { id } = await params;
  return (
    <Wrapper>
      <SericeDetails id={id} />
    </Wrapper>
  );
};

export default index;
