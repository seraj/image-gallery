import React, { useEffect, useState } from "react";
import axios from "axios";
import { serialize } from "../../utils/helpers";
import Img from "react-cool-img";
import { useParams } from "react-router-dom";
import { Button } from "../../components";
import { Props, ParamsType, DataType } from "./Category.types";
import * as Styled from "./Category.styled";

const Category = React.memo<Props>(() => {
  const [params, setParams] = useState<ParamsType>({ limit: 10, page: 0 });
  const [loading, setLoading] = useState<boolean>(false);
  const [loadMorePost, setLoadMorePost] = useState<boolean>(false);
  const [data, setData] = useState<DataType[]>([]);
  const { id } = useParams();

  const handleGetCatData = (params: ParamsType) => {
    axios
      .get(`https://api.thecatapi.com/v1/images/search?${serialize(params)}`)
      .then((res) => {
        setData(params.page === 0 ? res.data : [...data, ...res.data]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (!!id) {
      setData([]);
      setParams({ limit: 10, category_ids: id, page: 0 });
    }
  }, [id]);

  useEffect(() => {
    if (!!params?.category_ids) {
      setLoading(true);
      handleGetCatData(params);
    }
  }, [params]);

  const handleOnLoadMoreClick = () => {
    console.log("test");
    const tempParams = { ...params };
    tempParams.page += 1;
    setParams(tempParams);
  };

  return (
    <Styled.CategoryContainer>
      {!!id ? (
        <>
          <Styled.ImageContainer>
            {data?.map((item: DataType) => (
              <Img
                src={item.url}
                alt="cat"
                key={item.url}
                debounce={350}
                style={{ backgroundColor: "#eee" }}
              />
            ))}
          </Styled.ImageContainer>
          <Button loading={loading} onClick={() => handleOnLoadMoreClick()}>
            Load More
          </Button>
        </>
      ) : (
        <Styled.EmptyPage>Please Select a category</Styled.EmptyPage>
      )}
    </Styled.CategoryContainer>
  );
});
export default Category;
