// @ts-nocheck
import Filter from '../Filter/Filter';
import Sort from '../Sort/Sort';

import styled from "styled-components";

const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    min-width: 200px;
    padding-top: 31px;
    padding-right: 20px;
    padding-left: 20px;
    margin-left: 20px;
    background-color: var(--light-grey);
`;

function Sidebar(props) {
  const { handleSortFetch, handleCategoryFetch, handlePriceFetch, handleRatingFetch } = props;

  return (
    <SideBar>
      <Sort handleSortFetch={handleSortFetch} />
      <Filter handleCategoryFetch={handleCategoryFetch} handlePriceFetch={handlePriceFetch} handleRatingFetch={handleRatingFetch} />
    </SideBar>
  )
}

export default Sidebar;