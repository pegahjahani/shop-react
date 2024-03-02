import { Form } from "../components/form";
import { ShopContextProvider } from "../context/shopContext";


export const LogForShop = ()=>{
    return(
    <ShopContextProvider>

        <div className="col-10">
        <Form />
      </div>
      </ShopContextProvider>
    )
}