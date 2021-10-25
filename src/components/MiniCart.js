import React from 'react'

const MiniCart = ( {toggleCartVisibility, dispatch, showCart} ) => {

    return (
        <div className={`minicart-right-drawer modal right fade ${showCart}`} id="minicart-drawer">
        <div className="modal-dialog">
            <div className="modal-content">
                <div id="cart-drawer" className="block block-cart">
                    <a href="javascript:void(0);" className="close-cart" data-dismiss="modal" aria-label="Close" onClick={()=> {toggleCartVisibility("hide")}}><i className="anm anm-times-r"></i></a>
                    <h4>Your cart (2 Items)</h4>
                    <div className="minicart-content">
                        <ul className="clearfix">
                            <li className="item clearfix">
                                <a className="product-image" href="#">
                                    <img src="assets/images/product-images/cart-page-img1.jpg" alt="" title="" />
                                </a>
                                <div className="product-details">
                                    <a href="#" className="remove"><i className="anm anm-times-sql" aria-hidden="true"></i></a>
                                    <a href="#" className="edit-i remove"><i className="icon icon-pencil" aria-hidden="true"></i></a>
                                    <a className="product-title" href="cart-style1.html">Backpack With Contrast Bow</a>
                                    <div className="variant-cart">Black / XL</div>
                                    <div className="wrapQtyBtn">
                                        <div className="qtyField">
                                            <a className="qtyBtn minus" href="javascript:void(0);"><i className="anm anm-minus-r" aria-hidden="true"></i></a>
                                            <input type="text"  name="quantity" value="1" className="qty" />
                                            <a className="qtyBtn plus" href="javascript:void(0);"><i className="anm anm-plus-r" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <div className="priceRow">
                                        <div className="product-price">
                                            <span className="money">$59.00</span>
                                        </div>
                                     </div>
                                </div>
                            </li>
                            <li className="item clearfix">
                                <a className="product-image" href="#">
                                    <img src="assets/images/product-images/cart-page-img1.jpg" alt="" title="" />
                                </a>
                                <div className="product-details">
                                    <a href="#" className="remove"><i className="anm anm-times-sql" aria-hidden="true"></i></a>
                                    <a href="#" className="edit-i remove"><i className="icon icon-pencil" aria-hidden="true"></i></a>
                                    <a className="product-title" href="cart-style1.html">Innerbloom Puffer</a>
                                    <div className="variant-cart">Red / S</div>
                                    <div className="wrapQtyBtn">
                                        <div className="qtyField">
                                            <a className="qtyBtn minus" href="javascript:void(0);"><i className="anm anm-minus-r" aria-hidden="true"></i></a>
                                            <input type="text"  name="quantity" value="1" className="qty" />
                                            <a className="qtyBtn plus" href="javascript:void(0);"><i className="anm anm-plus-r" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                    <div className="priceRow">
                                        <div className="product-price">
                                            <span className="money">$89.00</span>
                                        </div>
                                     </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="minicart-bottom">
                        <div className="subtotal list">
                            <span>Shipping:</span>
                            <span className="product-price">$10.00</span>
                        </div>
                        <div className="subtotal list">
                            <span>Tax:</span>
                            <span className="product-price">$05.00</span>
                        </div>
                        <div className="subtotal">
                            <span>Total:</span>
                            <span className="product-price">$93.13</span>
                        </div>
                        <button type="button" className="btn proceed-to-checkout">Proceed to Checkout</button>
                        <button type="button" className="btn btn-secondary cart-btn">View Cart</button>
                    </div>
                </div>
    		</div>
    	</div>
    </div>
    )
}

export default MiniCart;
