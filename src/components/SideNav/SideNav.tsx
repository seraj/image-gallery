import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { setSelectedCatId, selectedCatId } from "../../store/modules/category";
import { Props, CategoryTypes } from "./SideNav.types";
import * as Styled from "./SideNav.styled";

const SideNav = React.memo<Props>(() => {
  const selectedCategoryID = useSelector(selectedCatId);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState<CategoryTypes[]>([]);

  const handleGetCats = () => {
    axios.get("https://api.thecatapi.com/v1/categories").then((res) => {
      setCategories(res.data);
    });
  };
  useEffect(() => {
    handleGetCats();
  }, []);

  const handleOnCategoryClick = (id: number) => {
    dispatch(setSelectedCatId(Number(id) || 0));
  };

  return (
    <Styled.NavContainer>
      <Styled.NavHeader>CATS</Styled.NavHeader>
      <Styled.List>
        {categories?.map((cat: CategoryTypes) => (
          <Styled.ListItem
            key={cat.id}
            onClick={() => handleOnCategoryClick(cat.id)}
            selected={cat.id === selectedCategoryID}
          >
            <Link to={`/category/${cat.id}`}>
              <span>{cat.name}</span>
            </Link>
          </Styled.ListItem>
        ))}
      </Styled.List>
    </Styled.NavContainer>
  );
});
export default SideNav;
