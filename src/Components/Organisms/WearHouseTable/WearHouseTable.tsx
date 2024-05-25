import WearHouseTableStyle from "./WearHouseTableStyle";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks";
import EmptyState from "../../Molecule/EmptyState/EmptyState";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../../Redux/ProductsSlice";
import ProductDetailsModal from "../ProductDetailsModal/ProductDetailsModal";

const WearHouseTable = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);
  const color = useAppSelector((state) => state.color);
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState("")
  const navigate = useNavigate();
  const entry = products?.map((items: any) => {
    return items.items;
  });

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const navigateToProductDetails = () => {
    openModal();
    // navigate("/wearhouse/details");
  };

  const formateDate = (evt: any) => {
    const options: object = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(evt);
    return date.toLocaleString("en-US", options);
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const renderModal = () => {
    if (modal) {
      return <ProductDetailsModal cancle={closeModal} id={selectedId}/>;
    }
  };

  return (
    <WearHouseTableStyle>
      <>
        {renderModal()}
        <div className="WearHouseTable__bar__container" id={color.mode}>
          <table>
            <thead>
              <tr>
                <th>Items</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Date Added</th>
              </tr>
            </thead>
            <tbody>
              {entry?.map((item: any, i: any) => {
                return (
                  item.length > 0 &&
                  item.map((product: any) => {
                    console.log(product);
                    return (
                      <tr
                        key={i}
                        onClick={() => {
                          navigateToProductDetails();
                          setSelectedId(product.id)
                        }}
                      >
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        {product.price && (
                          <td>{`₦${Number(product.price).toLocaleString()}`}</td>
                        )}
                        {product.dateCreated && (
                          <td>
                            {formateDate(product.dateCreated.split(",")[0])}
                          </td>
                        )}
                      </tr>
                    );
                  })
                );
              })}
            </tbody>
          </table>

          {/* {products === null && <div>
                  <EmptyState
                    header="No Product Found"
                    text="Click add Products to start"
                  />
                </div>
              )} */}
        </div>
      </>
    </WearHouseTableStyle>
  );
};

export default WearHouseTable;
