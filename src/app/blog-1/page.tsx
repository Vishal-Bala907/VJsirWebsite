import BlogDetails from "@/components/inner-pages/blogs/blog-details";
import Blog2 from "@/components/inner-pages/blogs/custom/blog2/Blog2";
import Wrapper from "@/layouts/Wrapper";
import React from "react";

export const metadata = {
  title: "Vishal Joshi sir",
};
const page = () => {
  return (
    <div>
      <Wrapper>
        <Blog2 />
      </Wrapper>
    </div>
  );
};

export default page;
