import CreateProductForm from "@/components/create-product-form";
import PageHeader from "@/components/page-header";

export default function CreateProduct() {
  return (
    <div className="container md:min-h-screen mx-auto flex flex-col items-center px-6 md:px-0 pb-14 lg:pb-16  ">
      <PageHeader subtitle="New Arrival" title="Create Product"></PageHeader>

      <CreateProductForm></CreateProductForm>
    </div>
  );
}
