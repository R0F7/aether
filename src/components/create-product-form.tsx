"use client";

import { useActionState } from "react";
import { createProductAction } from "@/lib/actions/createProductActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function CreateProductForm() {
  const initialState = {
    message: "",
    error: "",
    success: false,
  };

  const [state, formAction, isPending] = useActionState(
    createProductAction,
    initialState,
  );

  const inputs = state?.inputs as Record<string, any> | undefined;

  return (
    <div className="container max-w-xl mx-auto">
      <form
        action={formAction}
        className="w-full space-y-3 border p-6 rounded-xl"
      >
        {state?.errors && (
          <p className="text-red-500 text-sm">{state.message}</p>
        )}
        {state?.success && (
          <p className="text-green-500 text-sm">{state.message}</p>
        )}

        {/* name */}
        <Field>
          <FieldLabel htmlFor="name">
            Product Name <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="name"
            name="name"
            defaultValue={inputs?.name}
            placeholder="e.g. Cashmere Blend Overcoat"
            disabled={isPending}
          />
          {state?.errors?.name && (
            <p className="text-xs text-red-500 font-medium">
              {state.errors.name[0]}
            </p>
          )}
        </Field>

        {/* slug */}
        <Field>
          <FieldLabel htmlFor="slug">
            Slug <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="slug"
            type="text"
            name="slug"
            defaultValue={inputs?.slug}
            disabled={isPending}
            placeholder="e.g. cotton-chino-trousers"
          />
          {state?.errors?.slug && (
            <p className="text-xs text-red-500 font-medium">
              {state.errors.slug[0]}
            </p>
          )}
        </Field>

        {/* price + original price*/}
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <Field>
            <FieldLabel htmlFor="price">
              Price <span className="text-destructive">*</span>
            </FieldLabel>
            <Input
              id="price"
              type="number"
              name="price"
              defaultValue={inputs?.price}
              disabled={isPending}
              placeholder="e.g. $120"
            />
            {state?.errors?.price && (
              <p className="text-xs text-red-500 font-medium">
                {state.errors.price[0]}
              </p>
            )}
          </Field>

          <Field>
            <FieldLabel htmlFor="originalPrice">
              Original Price <span className="text-destructive">*</span>
            </FieldLabel>
            <Input
              id="originalPrice"
              type="number"
              name="originalPrice"
              defaultValue={inputs?.originalPrice}
              disabled={isPending}
              placeholder="e.g. $100"
            />
            {state?.errors?.originalPrice && (
              <p className="text-xs text-red-500 font-medium">
                {state.errors.originalPrice[0]}
              </p>
            )}
          </Field>
        </div>

        {/* category */}
        <Field>
          <FieldLabel htmlFor="category">
            Category <span className="text-destructive">*</span>
          </FieldLabel>
          <Select
            name="category"
            disabled={isPending}
            defaultValue={inputs?.category}
          >
            <SelectTrigger className="w-45">
              <SelectValue placeholder="e.g. trousers" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="shirts">Shirts</SelectItem>
                <SelectItem value="trousers">Trousers</SelectItem>
                <SelectItem value="outerwear">Outerwear</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {state?.errors?.category && (
            <p className="text-xs text-red-500 font-medium">
              {state.errors.category[0]}
            </p>
          )}
        </Field>

        {/* sizes */}
        <FieldGroup>
          <FieldLabel>
            Available Sizes<span className="text-destructive">*</span>
          </FieldLabel>
          <div key={inputs?.sizes} className="flex gap-4 -mt-1">
            {["S", "M", "L", "XL", "One Size"].map((size) => (
              <Field
                key={size}
                orientation="horizontal"
                className="flex items-center gap-2"
              >
                <Checkbox
                  id={size}
                  name="sizes"
                  value={size}
                  defaultChecked={
                    Array.isArray(inputs?.sizes) && inputs.sizes.includes(size)
                  }
                  disabled={isPending}
                />
                <FieldLabel htmlFor={size}>{size}</FieldLabel>
              </Field>
            ))}
          </div>

          {state?.errors?.sizes && (
            <p className="text-xs text-red-500 font-medium">
              {state.errors.sizes[0]}
            </p>
          )}
        </FieldGroup>

        {/* images */}
        <Field>
          <FieldLabel htmlFor="images">
            Product Images (Exactly 3)
            <span className="text-destructive">*</span>
          </FieldLabel>
          <Input
            id="images"
            type="file"
            name="images"
            multiple
            accept="image/*"
            disabled={isPending}
            className={state?.errors?.images ? "border-red-500" : ""}
          />
          {state?.errors?.images && (
            <p className="text-xs text-red-500 font-medium">
              {state.errors.images[0]}
            </p>
          )}
        </Field>

        {/* featured + isNew */}
        <div className="w-full flex justify-between">
          <Field>
            <FieldLabel>Featured</FieldLabel>
            <RadioGroup name="featured" defaultValue={"false"} className="flex">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="true" id="featured-yes" />
                <Label htmlFor="featured-yes">Yes</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="false" id="featured-no" />
                <Label htmlFor="featured-no">No</Label>
              </div>
            </RadioGroup>
          </Field>

          <Field>
            <FieldLabel>IsNew</FieldLabel>
            <RadioGroup name="isNew" defaultValue="false" className="flex">
              <div className="flex items-center gap-3">
                <RadioGroupItem value="true" id="isNew-yes" />
                <Label htmlFor="isNew-yes">Yes</Label>
              </div>
              <div className="flex items-center gap-3">
                <RadioGroupItem value="false" id="isNew-no" />
                <Label htmlFor="isNew-no">No</Label>
              </div>
            </RadioGroup>
          </Field>
        </div>

        {/* description */}
        <Field>
          <FieldLabel htmlFor="description">
            Description <span className="text-destructive">*</span>
          </FieldLabel>
          <Textarea
            id="description"
            name="description"
            defaultValue={inputs?.description}
            disabled={isPending}
            placeholder="e.g. Classic chino trousers in premium stretch cotton..."
          />
          {state?.errors?.description && (
            <p className="text-xs text-red-500 font-medium">
              {state.errors.description[0]}
            </p>
          )}
        </Field>

        {/* details */}
        <Field>
          <FieldLabel htmlFor="details">
            Details <span className="text-destructive">*</span>
          </FieldLabel>
          <Textarea
            id="details"
            name="details"
            defaultValue={inputs?.details}
            disabled={isPending}
            placeholder="e.g. 98% Cotton, 2% Elastane. Slant pockets. Button-through..."
          />
          {state?.errors?.details && (
            <p className="text-xs text-red-500 font-medium">
              {state.errors.details[0]}
            </p>
          )}
        </Field>

        {/* sizing guide */}
        <Field>
          <FieldLabel htmlFor="sizingGuide">
            Sizing Guide <span className="text-destructive">*</span>
          </FieldLabel>
          <Textarea
            id="sizingGuide"
            name="sizingGuide"
            defaultValue={inputs?.sizingGuide}
            disabled={isPending}
            placeholder="e.g. Model is 6'1&quot; wearing size 32. Slim fit with slight..."
          />
          {state?.errors?.sizingGuide && (
            <p className="text-xs text-red-500 font-medium">
              {state.errors.sizingGuide[0]}
            </p>
          )}
        </Field>

        {/* shipping */}
        <Field>
          <FieldLabel htmlFor="shipping">
            Shipping <span className="text-destructive">*</span>
          </FieldLabel>
          <Textarea
            id="shipping"
            name="shipping"
            defaultValue={inputs?.shipping}
            disabled={isPending}
            placeholder="e.g. Complimentary shipping on all orders.Estimated..."
          />
          {state?.errors?.shipping && (
            <p className="text-xs text-red-500 font-medium">
              {state.errors.shipping[0]}
            </p>
          )}
        </Field>

        <Button
          type="submit"
          disabled={isPending}
          variant="outline"
          className="w-full tracking-widest uppercase font-light py-4"
        >
          {isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Publish to Collection"
          )}
        </Button>
      </form>
    </div>
  );
}
