import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { signOutStart } from "../../store/user/user.action";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

// import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import NatoLogo  from "../../assets/img/nato/LOGO-rosa.png";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";

export default function Navigation() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer className="navigation">
        <LogoContainer to="/">
          <img src={NatoLogo} alt="logo-nato" className="logo" />
          {/* <NatoLogo className="logo" /> */}
        </LogoContainer>
        <NavLinks>
          {/* <NavLink to="/shop">SHOP</NavLink> */}
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SAIR DA CONTA
            </NavLink>
          ) : (
            <NavLink to="/auth">ENTRAR NA CONTA</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}
