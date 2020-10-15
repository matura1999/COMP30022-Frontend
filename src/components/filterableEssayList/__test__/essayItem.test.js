import React from 'react';
import ReactDOM from 'react-dom';
import EssayItem from '../essayItem';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';


const testvalue = {
    name: "test",
    content: "this is a test",
    date: "2020-09-01 01:01:00",
    thumbnail: "https://static.billboard.com/files/media/ateez-1-2020-kq-entertainment-1024x677.jpg",
};
afterEach(cleanup);

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<EssayItem></EssayItem>, div)
})

it("renders button correctly", ()=>{
    const {getByTestId } = render(<EssayItem name={testvalue.name} content={testvalue.content} date={testvalue.date} thumbnail={testvalue.thumbnail}/>);
    expect(getByTestId('essayItem-name')).toHaveTextContent(testvalue.name);
    expect(getByTestId('essayItem-content')).toHaveTextContent(testvalue.content);
    expect(getByTestId('essayItem-date')).toHaveTextContent(testvalue.date);
    expect(getByTestId('essayItem-thumbnail')).toHaveTextContent(testvalue.thumbnail);
})

it("match snapshot", () => {
    const tree = renderer.create(<EssayItem name={testvalue.name} content={testvalue.content} date={testvalue.date} thumbnail={testvalue.thumbnail}/>).toJSON;
    expect(tree).toMatchSnapshot();
})