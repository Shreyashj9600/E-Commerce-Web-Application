import { Fragment, useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "../../components/ui/sheet";
import CommonForm from "../../components/common/form";
import { addProductFormElements } from "../../config";
import ProductImageUpload from "../../components/admin-view/image-upload";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, fetchAllProducts } from "../../store/admin/products-slice";
import { toast } from "sonner";
import AdminProductTile from "../../components/admin-view/product-tile";

const initialFormData = {
    image: null,
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    salePrice: "",
    totalStock: "",
};

function AdminProducts() {
    const [openCreateProductsDialog, setOpenCreateProductsDialog] =
        useState(false);

    const [formData, setFormData] = useState(initialFormData);
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [imageLoadingState, setImageLoadingState] = useState(false);
    const { productList } = useSelector(state => state.adminProducts)
    const [currentEditedId, setCurrentEditedId] = useState(null);

    const dispatch = useDispatch()

    function onSubmit(event) {
        event.preventDefault();

        dispatch(
            addNewProduct({
                ...formData,
                image: uploadedImageUrl,
            })
        ).then((data) => {
            console.log(data);
            if (data?.payload?.success) {
                dispatch(fetchAllProducts())
                setOpenCreateProductsDialog(false)
                setImageFile(null)
                setFormData(initialFormData)
                toast.success("Product add successfully")
            }
        })
    }

    useEffect(() => {
        dispatch(fetchAllProducts())
    }, [dispatch])

    console.log("productList", uploadedImageUrl);


    return (
        <Fragment>
            <div className="mb-5 w-full flex justify-end">
                <Button onClick={() => setOpenCreateProductsDialog(true)}>
                    Add New Product
                </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 ">
                {
                    productList && productList.length > 0 ?
                    productList.map(productItem => <AdminProductTile  product={productItem}/>) : null
                }
            </div>
            <Sheet
                open={openCreateProductsDialog}
                onOpenChange={() => {
                    setOpenCreateProductsDialog(false);
                }}
            >
                <SheetContent side="right" className="overflow-auto">
                    <SheetHeader>
                        <SheetTitle>Add New Product</SheetTitle>
                    </SheetHeader>
                    <ProductImageUpload
                        imageFile={imageFile}
                        setImageFile={setImageFile}
                        uploadedImageUrl={uploadedImageUrl}
                        setUploadedImageUrl={setUploadedImageUrl}
                        setImageLoadingState={setImageLoadingState}
                        imageLoadingState={imageLoadingState}
                    />
                    <div className="py-6">
                        <CommonForm
                            formData={formData}
                            setFormData={setFormData}
                            buttonText="Add"
                            onSubmit={onSubmit}
                            formControls={addProductFormElements}
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </Fragment>
    );
}

export default AdminProducts;
