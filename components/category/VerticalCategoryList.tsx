import CategoryCard from "./CategoryCard";
import { categories } from "./consts";
import styles from "./VerticalCategoryList.module.scss";


const VerticalCategoryList = () => {
  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
};
export default VerticalCategoryList;