import { Button } from "../Fragment/Button/ButtonForm"

const CardProduct = ({children}) => {
    return (
        <div>
            <div className="h-full w-full max-w-xs rounded-lg border border-slate-700 bg-slate-800 text-slate-200 shadow flex flex-col justify-between">
                {children}
            </div>
        </div>
    )
}

const Header = ({src, alt}) => {
    return (
        <a href="/">
            <img src={src} alt={alt} style={{"width":"280px", "height":"280px"}} className="mx-auto p-3 rounded-t-xl"/>
        </a>
    )
}

const Body = ({children,title}) => {
    return (
        <div className="px-5 pb-5 h-full">
            <a href="/product">
                <h5 className="text-xl font-semibold tracking-tight text-slate-200">{title}</h5>
                <p>{children}</p>
            </a>
        </div>
    )
}

const Footer = ({price, addToCart, id}) => {
    return (
        <div className="px-5 flex">
            <p className="text-lg font-medium tracking-tight text-slate-200">Rp. {price.toLocaleString('id-ID', { styles: "currency", currency: "IDR"})}</p>
            <Button className={"mr-0 mb-1 px-6 py-1"} onClick={() => addToCart(id)}>Add To Cart</Button>
        </div>
    )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct