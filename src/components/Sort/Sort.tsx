import { useState } from 'react';

import arrowRight from "../../assets/arrow-right.png";

import styled, { css } from "styled-components";
import { SidebarButton } from "../Layout/Layout";

const SortContainer = styled.div`
    margin-top: 53px;
    margin-bottom: 40px;
`;

type SortIconProps = {
    rotation?: boolean;
}
const SortIcon = styled.img<SortIconProps>`
    height: 9px;
    transition: 0.1s ease-in-out;

    ${(props: SortIconProps) =>
        props.rotation &&
        css`
            transform: rotate(90deg);
        `
    }
`;

const SortForm = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`;

const FormLabel = styled.label`
    margin: 10px;
`;

const FormInput = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  
    border: 1px solid black;
    border-radius: 50%;
    width: 11px;
    height: 11px;
    cursor: pointer;

    &:checked {
        background-color: black;
    }
`;

const FormInputText = styled.span`
    margin-left: 11px;
    font-size: 14px;
    padding: 0 4px;
    cursor: pointer;
`;

function Sort({ handleSortFetch }: {handleSortFetch: (value: string) => void}) {
    const [choice, setChoice] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    const [selected, setSelected] = useState("ASC");

    function handleClick() {
        setIsClicked(!isClicked);
        setChoice(!choice);
    }

    return (
        <>
            <SortContainer>
                <SidebarButton onClick={handleClick}>
                    Sort by
                    <SortIcon rotation={isClicked} src={arrowRight} alt="" />
                </SidebarButton>

                {
                    choice ? (
                        <SortForm data-testid="sort-form">
                            <FormLabel htmlFor="ascending" onClick={(event) => setSelected((event.target as HTMLInputElement).value)} onChange={(event) => handleSortFetch((event.target as HTMLInputElement).value)} >
                                <FormInput type="radio" id='ascending' name='sort' value="ASC" checked={selected === "ASC"}/>
                                <FormInputText>Ascending Order</FormInputText>
                            </FormLabel>

                            <FormLabel data-testid="sort-label-desc" htmlFor="descending" onClick={(event) => setSelected((event.target as HTMLInputElement).value)} onChange={(event) => handleSortFetch((event.target as HTMLInputElement).value)} >
                                <FormInput type="radio" id='descending' name='sort' value="DESC" checked={selected === "DESC"} />
                                <FormInputText>Descending Order</FormInputText>
                            </FormLabel>
                        </SortForm>
                    ) : (null)
                }
            </SortContainer>
        </>
    )
}

export default Sort;