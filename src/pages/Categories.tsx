import { useAppDispatch, useAppSelector } from "../store/hook";
import { getCategories } from "../store/categories/categoriesSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Categories() {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories,
  );

  const categoriesList = records.length > 0 ? [...records] : [];
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className="flex flex-col items-center w-full ">
      <h1 className="my-3 text-center text-xl font-semibold text-blue-500">
        Shop By Category
      </h1>
      {categoriesList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categoriesList.map(({ id, title, img }) => (
            <Link to="" key={id}>
              <div className="border-solid border-3 border-blue-400 shadow-md w-full px-10 py-6 flex flex-col items-center rounded-md hover:bg-slate-200 transition-all duration-300 cursor-pointer">
                <img
                  src={img}
                  alt={title}
                  width={250}
                  height={100}
                  className="p-3 rounded-3xl"
                />
                <span className="font-semibold text-slate-300 text-xl ">
                  {title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>There are no categories</p>
      )}
    </div>
  );
}
export default Categories;
