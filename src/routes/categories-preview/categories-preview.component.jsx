import './categories-preview.styles.scss'

import { Fragment } from "react"
import { useSelector } from 'react-redux';

import CategoryPreview from "../../components/category-preview/category-preview.component"
import { categorySelector } from '../../store/categories/category.selector';

export default function CategoriesPreview() {
    const categoriesMap = useSelector(categorySelector)

    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                )
            })}
        </Fragment>
    )
}