import React from 'react';
import ReactDOM from 'react-dom';
import FilterableItemList from '../filterableItemList';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';

afterEach(cleanup);

it("Search bar renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<FilterableItemList files={[]}></FilterableItemList>, div)
})
