import PageHeader from "@/components/page-header";
import CreateProductForm from "@/components/product/create-product-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add New Product | Aether Admin",
  description:
    "Create and publish new minimalist pieces to the Aether collection.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function CreateProduct() {
  return (
    <div className="container md:min-h-screen mx-auto flex flex-col items-center px-6 md:px-0 pb-14 lg:pb-16  ">
      <PageHeader subtitle="New Arrival" title="Create Product"></PageHeader>

      <CreateProductForm />
    </div>
  );
}
