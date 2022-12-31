import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { fetchCategoriesAsync } from "../../store/categories/category.action";

import "./shop.styles.scss";
import { useDispatch } from "react-redux";

export default function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(fetchCategoriesAsync());
    //eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}
