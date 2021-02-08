import styled from "styled-components";

export const CategoryContainer = styled.div`
  position: relative;
  text-align: center;
  height: 100%;
`;
export const ImageContainer = styled.section`
  line-height: 0;
  column-count: 5;
  column-gap: 10px;
  margin-bottom: 30px;
  img {
    width: 100% !important;
    height: auto !important;
    margin: 5px;
  }
  @media (max-width: 1200px) {
    column-count: 4;
  }
  @media (max-width: 1000px) {
    column-count: 3;
  }
  @media (max-width: 800px) {
    column-count: 2;
  }
  @media (max-width: 400px) {
    column-count: 1;
  }
`;

export const EmptyPage = styled.div`
  font-size: 30px;
  text-transform: uppercase;
  color: #989898;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
