import React from 'react';
import ReactDOM from 'react-dom';
import FileItem from '../fileItem';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import renderer from 'react-test-renderer';


const testvalue = {
    name: "test",
    type: "jpg",
    size: 1024,
    date: "2020-09-01 01:01:00",
    fileUrl: "ateez-1-2020-kq-entertainment-1024x677.jpg",
};
afterEach(cleanup);

it("renders without crashing", ()=>{
    const div = document.createElement("div");
    ReactDOM.render(<FileItem></FileItem>, div)
})

it("renders button correctly", ()=>{
    const {getByTestId } = render(<FileItem name={testvalue.name} type={testvalue.type} size={testvalue.size} date={testvalue.date} fileUrl={testvalue.fileUrl}/>);
    expect(getByTestId('fileItem-name')).toHaveTextContent(testvalue.name);
    expect(getByTestId('fileItem-type')).toHaveTextContent(testvalue.type);
    expect(getByTestId('fileItem-size')).toHaveTextContent(testvalue.size);
    expect(getByTestId('fileItem-date')).toHaveTextContent(testvalue.date);
    expect(getByTestId('fileItem-url').getAttribute('href')).toBe('https://mojito-eportfolio.s3-ap-southeast-2.amazonaws.com/'+testvalue.fileUrl)
})

it("match snapshot", () => {
    const tree = renderer.create(<FileItem name={testvalue.name} content={testvalue.content} date={testvalue.date} thumbnail={testvalue.thumbnail}/>).toJSON;
    expect(tree).toMatchSnapshot();
})