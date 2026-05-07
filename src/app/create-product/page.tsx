import CreateProductForm from "@/components/create-product-form";
import SectionHeader from "@/components/section-header";

export default function CreateProduct() {
  return (
    <div className="container md:min-h-screen mx-auto flex flex-col items-center px-6 md:px-0 py-14  ">
      <SectionHeader subtitle="New Arrival" title="Create Product"></SectionHeader>

      <CreateProductForm></CreateProductForm>
    </div>
  );
}
